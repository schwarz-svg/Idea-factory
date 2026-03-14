# Backup-Strategie — Idea Factory

**Version:** 1.0.0
**Datum:** 2026-03-14
**Klassifizierung:** Intern

---

## 1. Überblick

Dieses Dokument definiert die Backup- und Wiederherstellungsstrategie für alle
Systemkomponenten der Idea Factory Plattform. Es folgt der **3-2-1-Regel**:

```
3 Kopien der Daten
2 verschiedene Speichermedien/-systeme
1 Offsite-Backup (geographisch getrennt)
```

---

## 2. Komponenten & Backup-Anforderungen

### 2.1 Aktuelle Komponenten

| Komponente | Typ | RPO* | RTO** | Priorität |
|-----------|-----|------|-------|-----------|
| Quellcode | Statische Dateien | 0 (Git) | < 5 min | Kritisch |
| Deployment | Vercel Edge | 0 (immutable deploys) | < 2 min | Kritisch |

### 2.2 Zukünftige Komponenten (nach Produktivstart)

| Komponente | Typ | RPO | RTO | Priorität |
|-----------|-----|-----|-----|-----------|
| Nutzerdatenbank | PostgreSQL | < 1h | < 4h | Kritisch |
| Zahlungstransaktionen | PostgreSQL | < 15min | < 2h | Kritisch |
| Nutzerdateien / Uploads | Object Storage | < 1h | < 4h | Hoch |
| Konfigurationen / Secrets | Vault / Env-Secrets | < 0 (versioniert) | < 30min | Kritisch |
| Logs / Audit-Trail | Log-Management | < 5min | < 1h | Mittel |

> *RPO = Recovery Point Objective (max. akzeptabler Datenverlust)
> **RTO = Recovery Time Objective (max. akzeptable Ausfallzeit)

---

## 3. Backup-Implementierung (Aktueller Stand)

### 3.1 Quellcode-Backup via Git

**Primäres Repository:** GitHub (`github.com/[org]/idea-factory`)

**Backup-Ebenen:**
```
Ebene 1: GitHub (Remote) — automatisch mit jedem Push
Ebene 2: Lokale Entwicklerarbeitsplätze (mehrere Kopien)
Ebene 3: Automatische GitHub-Archivierung (ZIP-Snapshots via Actions)
```

**GitHub Actions — Release Archivierung** (`.github/workflows/release.yml`):
- Automatischer ZIP-Snapshot bei jedem Release-Tag
- GitHub Releases als versionierter Backup-Punkt
- Artefakte: Quellcode + Deployment-Konfiguration

### 3.2 Deployment-Backup via Vercel

Vercel bietet von sich aus:
- **Immutable Deployments:** Jedes Deployment hat eine eigene unveränderliche URL
- **Rollback:** Ein-Klick-Rollback auf jeden vorherigen Deployment-Stand
- **Deployment-History:** 30 Tage rückwirkend verfügbar (Free Plan)
- **Preview-Deployments:** Jeder PR-Branch hat eigene Preview-URL

**Rollback-Prozedur:**
```
1. Vercel Dashboard → Projekt → Deployments
2. Gewünschten Stand auswählen
3. "Promote to Production" klicken
4. Verfügbar in < 30 Sekunden
```

---

## 4. Backup-Strategie für Produktivbetrieb

### 4.1 Datenbankbackups (PostgreSQL)

#### Automatisierte Backups
```yaml
Täglich:    Vollbackup (24h Retention → 7 Tage)
Stündlich:  WAL-Archivierung (Point-in-Time Recovery)
Wöchentlich: Cold Backup auf S3/R2 (90 Tage Retention)
```

#### Empfohlene Infrastruktur
- **Primär:** Managed PostgreSQL (Supabase EU, Neon EU, oder AWS RDS eu-central-1)
- **Backup-Ziel:** Cloudflare R2 (EU-Region) oder AWS S3 (eu-central-1)
- **Verschlüsselung:** AES-256 at rest, TLS in transit
- **Point-in-Time Recovery:** Bis zu 7 Tage zurück

#### Backup-Befehlsvorlage
```bash
# Tägliches Backup-Skript (Cron: 0 2 * * *)
#!/bin/bash
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
DB_URL="${DATABASE_URL}"
BUCKET="s3://idea-factory-backups/postgres"

# Backup erstellen
pg_dump "${DB_URL}" | gzip | \
  aws s3 cp - "${BUCKET}/daily/backup_${TIMESTAMP}.sql.gz" \
  --sse aws:kms

# Alte Backups löschen (>30 Tage)
aws s3 ls "${BUCKET}/daily/" | \
  awk '{print $4}' | \
  while read file; do
    age=$(( ($(date +%s) - $(date -d "${file:7:8}" +%s)) / 86400 ))
    [ $age -gt 30 ] && aws s3 rm "${BUCKET}/daily/${file}"
  done
```

### 4.2 Object Storage (Nutzerdateien)

```
Replikation:    Synchron auf 2 EU-Regionen
Versionierung:  Letzte 30 Versionen jeder Datei
Cross-Region:   Wöchentliches Backup in 3. Region
Retention:      90 Tage nach Löschung durch Nutzer (DSGVO-Löschfrist beachten!)
```

### 4.3 Secrets & Konfigurationen

```
Primär:  GitHub Encrypted Secrets (automatisch verschlüsselt)
Backup:  Passwort-Manager (z.B. 1Password Business, Bitwarden)
Prozess: Secrets-Rotation-Protokoll dokumentiert in interner Wiki
```

---

## 5. Backup-Verifizierung & Testing

### 5.1 Automatische Tests

```yaml
# Wöchentliche Backup-Verifikation (Cron: 0 6 * * 0)
Schritte:
  1. Letztes Backup herunterladen
  2. In Testdatenbank einspielen
  3. Integritätsprüfung (Row-Count, Checksums)
  4. Ergebnis in Monitoring-Dashboard
  5. Alert bei Fehlschlag (PagerDuty / Slack)
```

### 5.2 Manuelle Disaster-Recovery-Tests

| Häufigkeit | Test | Erwartetes Ergebnis |
|-----------|------|---------------------|
| Monatlich | Datenbankwiederherstellung in Staging | RTO < 4h eingehalten |
| Quartalsweise | Vollständige Umgebungswiederherstellung | System funktionsfähig |
| Jährlich | Kompletter Disaster-Recovery-Test | Alle RTO/RPO erfüllt |

---

## 6. DSGVO-Konforme Datenlöschung

### 6.1 Löschkonzept

Bei Löschungsanfragen (Art. 17 DSGVO):
```
1. Produktivdaten:  Sofortige logische Löschung
2. Hot Backups:     Löschung innerhalb 24h (automatisiert)
3. Cold Backups:    Löschung beim nächsten Backup-Zyklus
4. Maximale Frist:  30 Tage bis zur vollständigen Löschung aus allen Backups
```

> **Rechtliche Ausnahme:** Rechnungsdaten müssen nach § 147 AO / § 257 HGB
> 10 Jahre aufbewahrt werden — auch nach Nutzerkontolöschung.

### 6.2 Dokumentation

Jede Löschanfrage wird im Audit-Log dokumentiert:
```json
{
  "action": "data_deletion_request",
  "requestId": "del_xxx",
  "userId": "anonymized_hash",
  "requestedAt": "2026-03-14T10:00:00Z",
  "completedAt": "2026-03-14T10:05:00Z",
  "backupPurgeDue": "2026-04-13T10:00:00Z"
}
```

---

## 7. Backup-Monitoring & Alerting

### 7.1 Metriken

| Metrik | Zielwert | Alert-Schwelle |
|--------|----------|----------------|
| Backup-Erfolgsrate | 100% | < 99% → Alert |
| Backup-Dauer | < 30 min | > 60 min → Warning |
| Backup-Größe | Baseline ±20% | > +50% → Alert |
| Wiederherstellungszeit (Test) | RPO eingehalten | Überschreitung → Critical |

### 7.2 Alerting-Kanäle
- Slack (#ops-alerts)
- E-Mail (ops@idea-factory.de)
- PagerDuty (für kritische Ausfälle)

---

## 8. Verantwortlichkeiten

| Rolle | Verantwortung |
|-------|--------------|
| CTO / Lead Developer | Backup-Strategie, Infrastruktur |
| DevOps | Automatisierung, Monitoring |
| Datenschutzbeauftragter | DSGVO-Konformität der Backups |
| Alle Entwickler | Keine sensitiven Daten in Code/Logs |

---

## 9. Backup-Inventar

| Backup-Typ | Ort | Verschlüsselung | Retention | Letzter Test |
|-----------|-----|----------------|-----------|--------------|
| Git-Repository | GitHub | AES-256 (GitHub) | Unbegrenzt | Täglich (CI) |
| Vercel Deployments | Vercel CDN | TLS + at-rest | 30 Tage | Automatisch |
| Lokale Kopien | Entwickler-PCs | Festplatten-Verschlüsselung | Manuell | - |
