# Security Concept — Idea Factory

**Version:** 1.0.0
**Datum:** 2026-03-14
**Klassifizierung:** Öffentlich

---

## 1. Überblick

Dieses Dokument beschreibt das vollständige Sicherheitskonzept der Idea Factory Plattform. Es dient als verbindliche Grundlage für alle Entwicklungs-, Betriebs- und Auditaktivitäten.

### 1.1 Scope

| Bereich | Status | Bemerkung |
|---------|--------|-----------|
| Frontend (SPA) | ✅ Implementiert | Vanilla JS, kein Framework |
| HTTP-Sicherheitsheader | ✅ Implementiert | via Vercel |
| Cookie-Consent | ✅ Implementiert | DSGVO-konform |
| Input-Sanitization | ✅ Implementiert | XSS-Prävention |
| Audit-Logging | ✅ Implementiert | Client-seitig, kein PII |
| Backend / API | ⚠️ Geplant | Noch nicht implementiert |
| Authentifizierung | ⚠️ Geplant | Noch nicht produktiv |
| Datenbankzugriff | ⚠️ Geplant | Noch nicht implementiert |

---

## 2. Threat Model

### 2.1 Assets

| Asset | Schutzziel | Kritikalität |
|-------|-----------|--------------|
| Quellcode | Integrität, Vertraulichkeit | Hoch |
| Nutzerdaten (zukünftig) | Vertraulichkeit, Verfügbarkeit | Kritisch |
| Zahlungsdaten | Vollständig an Stripe delegiert | Kritisch |
| Deployment-Konfiguration | Integrität | Hoch |
| API-Schlüssel / Secrets | Vertraulichkeit | Kritisch |

### 2.2 Bedrohungsakteure

| Akteur | Motivation | Wahrscheinlichkeit |
|--------|-----------|-------------------|
| Opportunistische Angreifer | Massenexploits, Bots | Hoch |
| Gezielte Angreifer | Datenzugriff, Disruption | Mittel |
| Insider-Bedrohung | Datenmissbrauch | Niedrig |
| Supply-Chain-Angriffe | Dependency-Hijacking | Mittel |

### 2.3 STRIDE-Analyse (aktueller Stand)

| Bedrohung | Maßnahme |
|-----------|---------|
| **S**poofing | Auth-System geplant (OAuth2 / JWT) |
| **T**ampering | SRI (Subresource Integrity) für externe Skripte geplant |
| **R**epudiation | Client-seitiges Audit-Log; serverseitiges geplant |
| **I**nformation Disclosure | Keine sensitiven Daten im Frontend; CSP |
| **D**enial of Service | Vercel Edge-Network, Rate Limiting (Backend) |
| **E**levation of Privilege | Kein Backend vorhanden; RBAC für zukünftige API |

---

## 3. HTTP-Sicherheitsheader

Alle Header sind in `vercel.json` konfiguriert und gelten für alle Routes.

### 3.1 Implementierte Header

#### Content-Security-Policy (CSP)
```
default-src 'self';
script-src 'self' 'unsafe-inline' https://js.stripe.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https:;
connect-src 'self' https://api.stripe.com;
frame-src https://js.stripe.com https://hooks.stripe.com;
object-src 'none';
base-uri 'self';
form-action 'self';
upgrade-insecure-requests
```

> **Bekannte Einschränkung:** `'unsafe-inline'` ist aktuell für `script-src` nötig,
> da App-Logik Inline-Event-Handler in dynamisch generiertem HTML verwendet
> (z. B. `onclick="addToCart(...)`). Der Migrationspfad zu Event-Delegation
> ist in der Roadmap dokumentiert (vgl. Abschnitt 8).

#### Strict-Transport-Security (HSTS)
```
max-age=63072000; includeSubDomains; preload
```
2 Jahre, inkl. Subdomains, HSTS-Preload-Liste beantragt.

#### Weitere Header
| Header | Wert | Zweck |
|--------|------|-------|
| X-Frame-Options | DENY | Clickjacking-Schutz |
| X-Content-Type-Options | nosniff | MIME-Sniffing unterbinden |
| Referrer-Policy | strict-origin-when-cross-origin | Datenleckage minimieren |
| Permissions-Policy | camera=(), microphone=(), geolocation=(), interest-cohort=() | Browser-APIs einschränken |
| Cross-Origin-Opener-Policy | same-origin | Spectre-Mitigierung |
| Cross-Origin-Resource-Policy | same-origin | Cross-Origin-Datenzugriff verhindern |

### 3.2 Geplante Verbesserungen
- **CSP ohne `unsafe-inline`:** Migration zu Event-Delegation in `app.js`
- **Subresource Integrity (SRI):** SHA-384-Hashes für Stripe.js und Google Fonts
- **Report-URI:** CSP-Verletzungsberichte an Monitoring-Endpunkt

---

## 4. Input-Validierung & XSS-Prävention

### 4.1 Sanitization (`security.js`)

Alle dynamisch in das DOM eingefügten Strings werden über `Security.sanitizeHTML()` geleitet:

```javascript
function sanitizeHTML(str) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;',
                  '"': '&quot;', "'": '&#x27;', '/': '&#x2F;' };
    return str.replace(/[&<>"'`=/]/g, s => map[s]);
}
```

### 4.2 DOM-Insertion-Regeln

| Kontext | Methode | Status |
|---------|---------|--------|
| Produktdaten (interne Konstanten) | `innerHTML` (sicher, keine Nutzereingaben) | ✅ |
| Nutzereingaben (Auth-Formular) | `value`-Attribut, nie direkt in innerHTML | ✅ |
| Toast-Nachrichten | `textContent` | ✅ |
| Dynamische URLs/IDs | Whitelisted Produkt-IDs, keine freie Eingabe | ✅ |

### 4.3 Formular-Validierung

- E-Mail-Validierung via `Security.isValidEmail()` (Regex + serverseitige Validierung geplant)
- Passwortfelder: Kein Logging, kein Speichern im State
- CSRF: Für Backend-Integration vorbereitet (Double-Submit-Cookie-Pattern)

---

## 5. Datenspeicherung (Client-seitig)

### 5.1 localStorage-Nutzung

| Schlüssel | Inhalt | Personenbezug | Ablauf |
|-----------|--------|---------------|--------|
| `if_consent_v1` | Cookie-Einwilligung (boolean flags) | Nein | 365 Tage |
| `if_consent_ts_v1` | Einwilligungszeitstempel | Nein | 365 Tage |
| `if_audit_log_v1` | Audit-Events (anonym) | Nein | Max. 100 Einträge |

### 5.2 sessionStorage-Nutzung

| Schlüssel | Inhalt | Personenbezug |
|-----------|--------|---------------|
| `if_sid` | Anonyme Session-ID (zufällig, 8 Zeichen) | Nein |

### 5.3 Nicht gespeichert (by Design)
- Keine Passwörter oder Auth-Tokens im localStorage
- Keine Kreditkartendaten (vollständig Stripe-seitig)
- Keine E-Mail-Adressen oder Namen

---

## 6. Zahlungssicherheit (Stripe)

### 6.1 Aktueller Status
Stripe.js ist als Skript eingebunden, aber noch nicht produktiv konfiguriert.

### 6.2 Sicherheitsarchitektur (Produktionsdesign)

```
Nutzer → Frontend (Stripe.js) → Stripe Servers
                                     ↕ (kein PCI-Scope für uns)
Nutzer → Frontend → Backend API → Stripe API (Server-to-Server)
```

**Prinzip:** Kreditkartendaten verlassen niemals unsere Server. Stripe.js tokenisiert direkt auf Stripe-Servern.

### 6.3 Checkliste für Stripe-Produktivschaltung
- [ ] Stripe-Public-Key via Umgebungsvariable (nicht im Code)
- [ ] Webhook-Signaturvalidierung im Backend
- [ ] Idempotency-Keys für alle API-Aufrufe
- [ ] Stripe Radar für Betrugserkennung aktivieren
- [ ] PCI DSS SAQ A Selbstauskunft

---

## 7. Dependency-Management & Supply-Chain

### 7.1 Aktueller Status
Das Projekt hat **null npm-Dependencies** (zero-dependency architecture).
Einzige externe Ressourcen:
- Google Fonts (CDN)
- Stripe.js (CDN)

### 7.2 Maßnahmen

| Maßnahme | Status |
|----------|--------|
| Keine npm-Dependencies | ✅ Aktiv |
| GitHub CodeQL (Static Analysis) | ✅ Konfiguriert |
| Gitleaks (Secret Detection) | ✅ Konfiguriert |
| npm audit (bei zukünftigen Deps) | ✅ Vorbereitet |
| Dependabot (bei zukünftigen Deps) | ⚠️ Aktivieren wenn nötig |
| SRI für externe CDN-Ressourcen | ⚠️ Geplant |

---

## 8. Security Roadmap

### Kurzfristig (0–3 Monate)
1. **CSP `unsafe-inline` entfernen:** Event-Delegation in `app.js`
2. **SRI-Hashes:** Für Stripe.js und Google Fonts
3. **Nonce-basierte CSP:** Für script-Elemente

### Mittelfristig (3–6 Monate)
4. **Backend-Sicherheit:** JWT-Authentifizierung, Rate Limiting, CORS
5. **Secrets-Management:** Vault oder GitHub Encrypted Secrets
6. **Penetrationstest:** Externer Pentest vor Produktivstart

### Langfristig (6–12 Monate)
7. **ISO 27001 / SOC 2:** Zertifizierungspfad definieren
8. **Bug-Bounty-Programm:** Öffentliches Responsible-Disclosure-Programm
9. **WAF:** Web Application Firewall für Backend-Endpunkte

---

## 9. Incident Response

### 9.1 Prozess

```
1. Erkennung     → Security-Team informieren (< 1h)
2. Eingrenzung   → Betroffene Systeme isolieren (< 2h)
3. Analyse       → Ursache identifizieren (< 4h)
4. Behebung      → Patch deployen, Systeme wiederherstellen
5. Nachbereitung → Post-Mortem, Maßnahmen dokumentieren
```

### 9.2 DSGVO Art. 33 — Meldepflicht bei Datenpannen
Datenpannen mit Risiko für betroffene Personen müssen innerhalb von **72 Stunden** der zuständigen Aufsichtsbehörde gemeldet werden.

**Zuständige Behörde:** Landesbeauftragter für Datenschutz (je nach Unternehmenssitz)

### 9.3 Kontakt
- Security-Reports: Über GitHub Private Security Reporting
- Kritische Incidents: Gemäß SECURITY.md
