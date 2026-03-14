# DSGVO-Compliance-Dokumentation — Idea Factory

**Version:** 1.0.0
**Datum:** 2026-03-14
**Rechtsgrundlage:** EU-Datenschutz-Grundverordnung (DSGVO) 2016/679

---

## 1. Verantwortlicher (Art. 4 Nr. 7 DSGVO)

```
Idea Factory
[Firmenname vollständig ergänzen]
[Straße, PLZ, Stadt]
Deutschland

E-Mail: datenschutz@idea-factory.de
Telefon: [Telefonnummer ergänzen]
```

---

## 2. Datenschutzbeauftragter

> **Hinweis:** Ein Datenschutzbeauftragter ist ab 20 ständig mit Datenverarbeitung
> beschäftigten Mitarbeitern oder bei bestimmten Verarbeitungstypen verpflichtend
> (§ 38 BDSG, Art. 37 DSGVO).

Bei Erreichen der Schwellenwerte:
```
Datenschutzbeauftragter
[Name]
[Kontakt]
```

---

## 3. Verarbeitungstätigkeiten (Art. 30 DSGVO — VVT)

### 3.1 Aktuell implementierte Verarbeitungen

| Nr. | Verarbeitung | Rechtsgrundlage | Speicherung | Dritte |
|-----|-------------|-----------------|-------------|--------|
| V-01 | Cookie-Einwilligung speichern | Einwilligung (Art. 6 Abs. 1 lit. a) | localStorage, 365 Tage | Keine |
| V-02 | Anonymes Audit-Logging | Berechtigtes Interesse (Art. 6 Abs. 1 lit. f) | localStorage, 100 Einträge | Keine |
| V-03 | Session-ID (anonym) | Berechtigtes Interesse | sessionStorage, Sitzungsdauer | Keine |

### 3.2 Geplante Verarbeitungen (bei Produktivstart)

| Nr. | Verarbeitung | Rechtsgrundlage | Speicherort |
|-----|-------------|-----------------|-------------|
| V-10 | Nutzerkonto-Erstellung | Vertrag (Art. 6 Abs. 1 lit. b) | EU-Datenbankserver |
| V-11 | Zahlungsabwicklung | Vertrag (Art. 6 Abs. 1 lit. b) | Stripe (EU-Server) |
| V-12 | Rechnungsstellung | Rechtliche Pflicht (Art. 6 Abs. 1 lit. c) | EU-Datenbankserver |
| V-13 | Nutzungsanalytik (opt-in) | Einwilligung (Art. 6 Abs. 1 lit. a) | EU-Server |
| V-14 | Support-Kommunikation | Vertrag (Art. 6 Abs. 1 lit. b) | EU-E-Mail-Server |

---

## 4. Cookie-Kategorien & Einwilligung

### 4.1 Technisch notwendige Cookies (keine Einwilligung erforderlich)

| Cookie | Zweck | Ablauf | Anbieter |
|--------|-------|--------|---------|
| `if_consent_v1` | Einwilligungsstatus speichern | 365 Tage | Idea Factory |
| `if_consent_ts_v1` | Einwilligungszeitpunkt | 365 Tage | Idea Factory |
| `if_audit_log_v1` | Anonymes Fehler-Logging | Session | Idea Factory |
| `if_sid` | Anonyme Session-ID | Browser-Sitzung | Idea Factory |

**Rechtsgrundlage:** Berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO; § 25 Abs. 2 Nr. 2 TDDDG

### 4.2 Analyse-Cookies (Einwilligung erforderlich)

| Cookie | Zweck | Ablauf | Anbieter |
|--------|-------|--------|---------|
| [Noch nicht implementiert] | Nutzungsanalyse, A/B-Tests | - | - |

**Rechtsgrundlage:** Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1 TDDDG

### 4.3 Marketing-Cookies (Einwilligung erforderlich)

| Cookie | Zweck | Ablauf | Anbieter |
|--------|-------|--------|---------|
| [Noch nicht implementiert] | Personalisierte Werbung | - | - |

**Rechtsgrundlage:** Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1 TDDDG

### 4.4 Einwilligungs-Management

Das Cookie-Consent-System erfüllt folgende DSGVO-Anforderungen:

- ✅ **Freiwilligkeit:** Weiternutzung auch mit nur notwendigen Cookies möglich
- ✅ **Informiertheit:** Jede Cookie-Kategorie erklärt
- ✅ **Granularität:** Einzelne Kategorien wählbar
- ✅ **Widerrufbarkeit:** Einwilligung jederzeit entziehbar (Datenschutzeinstellungen im Footer)
- ✅ **Nachweis:** Zeitstempel der Einwilligung gespeichert
- ✅ **Erneuerung:** Nach 365 Tagen erneute Einwilligung
- ✅ **Keine Dark Patterns:** Akzeptieren und Ablehnen gleichwertig gestaltet

---

## 5. Betroffenenrechte (Art. 15–22 DSGVO)

### 5.1 Rechte und Ausübung

| Recht | Artikel | Frist | Kontakt |
|-------|---------|-------|---------|
| Auskunft | Art. 15 | 1 Monat | datenschutz@idea-factory.de |
| Berichtigung | Art. 16 | 1 Monat | datenschutz@idea-factory.de |
| Löschung ("Recht auf Vergessenwerden") | Art. 17 | 1 Monat | datenschutz@idea-factory.de |
| Einschränkung der Verarbeitung | Art. 18 | 1 Monat | datenschutz@idea-factory.de |
| Datenübertragbarkeit | Art. 20 | 1 Monat | datenschutz@idea-factory.de |
| Widerspruch | Art. 21 | Unverzüglich | datenschutz@idea-factory.de |
| Widerruf der Einwilligung | Art. 7 Abs. 3 | Unverzüglich | Cookie-Banner im Footer |

### 5.2 Beschwerderecht (Art. 77 DSGVO)

Betroffene können sich bei der zuständigen Aufsichtsbehörde beschweren:

```
Berliner Beauftragte für Datenschutz und Informationsfreiheit
(oder zuständige Landesbehörde je nach Unternehmenssitz)
```

---

## 6. Drittland-Transfers (Art. 44 ff. DSGVO)

### 6.1 Aktuell

| Dienst | Zweck | Übertragung | Schutzmaßnahme |
|--------|-------|-------------|----------------|
| Google Fonts | Schriftarten | Potentiell USA | Standard-Vertragsklauseln; alternativ: Self-Hosting geplant |
| Stripe.js | Zahlungsverarbeitung | EU-Server (Stripe EMEA) | Angemessenheitsbeschluss nicht anwendbar; SCCs |

> **Empfehlung:** Google Fonts sollten self-hosted werden, um Drittland-Transfers
> vollständig zu vermeiden. Entsprechende Schriftdateien sind in `src/assets/fonts/`
> zu hinterlegen.

### 6.2 Grundsatz: EU-Datenverarbeitung

Alle Nutzerdaten werden ausschließlich auf Servern innerhalb der EU/EWR verarbeitet.

---

## 7. Datensicherheit (Art. 32 DSGVO)

### 7.1 Technische Maßnahmen (TOM)

| Maßnahme | Implementierung | Status |
|----------|----------------|--------|
| Verschlüsselung in Übertragung | HTTPS/TLS 1.2+, HSTS | ✅ |
| Content Security Policy | Vercel-Header | ✅ |
| XSS-Prävention | HTML-Sanitization in security.js | ✅ |
| Keine Klartext-Passwörter | Passwörter werden nicht gespeichert | ✅ |
| Zugangskontrolle | Rolle-basiert (Backend, geplant) | ⚠️ |
| Verschlüsselung im Ruhezustand | Datenbankebene (geplant) | ⚠️ |
| Logging & Monitoring | Audit-Log, CSP-Violation-Reports | ✅ / ⚠️ |

### 7.2 Organisatorische Maßnahmen (TOM)

- Code-Reviews für alle Änderungen (4-Augen-Prinzip)
- Secrets nie im Quellcode (`.gitignore`, GitHub Secrets)
- Responsible-Disclosure-Prozess (SECURITY.md)
- Regelmäßige Sicherheitsscans (GitHub Actions)

---

## 8. Datenpannen (Art. 33–34 DSGVO)

### 8.1 Meldepflichten

| Schwere | Maßnahme | Frist |
|---------|---------|-------|
| Niedrig (kein Risiko) | Interne Dokumentation | - |
| Mittel (mögliches Risiko) | Meldung an Aufsichtsbehörde | 72 Stunden |
| Hoch (hohes Risiko) | Meldung + Benachrichtigung Betroffener | 72 Stunden |

### 8.2 Incident-Response-Prozess

Siehe `docs/SECURITY-CONCEPT.md` Abschnitt 9.

---

## 9. Auftragsverarbeitungsverträge (Art. 28 DSGVO)

| Dienstleister | Dienst | AVV-Status |
|--------------|--------|------------|
| Vercel Inc. | Hosting/CDN | ✅ (DPA auf vercel.com) |
| Stripe Inc. | Zahlungsabwicklung | ✅ (DPA auf stripe.com) |
| GitHub Inc. | Code-Repository, CI/CD | ✅ (DPA auf github.com) |
| Google LLC | Fonts-CDN | ⚠️ Empfehlung: Self-Hosting |

---

## 10. Datenschutz-Folgenabschätzung (DSFA, Art. 35 DSGVO)

Eine DSFA ist erforderlich bei:
- Verarbeitung besonderer Kategorien (Art. 9) → aktuell nicht gegeben
- Profiling mit erheblichen Auswirkungen → aktuell nicht gegeben
- Systematische umfangreiche Überwachung → aktuell nicht gegeben

**Status:** Keine DSFA aktuell erforderlich. Bei Einführung von Analytics/Profiling neu bewerten.

---

## 11. Datenschutz durch Technikgestaltung (Art. 25 DSGVO)

### Privacy-by-Design-Prinzipien

| Prinzip | Umsetzung |
|---------|-----------|
| Datenminimierung | Kein Tracking ohne explizite Einwilligung |
| Zweckbindung | Jede Verarbeitung hat dokumentierten Zweck |
| Speicherbegrenzung | Klare Ablaufzeiten für alle Speichervorgänge |
| Transparenz | Cookie-Banner erklärt jede Kategorie |
| Integrität | HTTPS, CSP, XSS-Schutz |
| Privacy-by-Default | Nur notwendige Cookies sind standardmäßig aktiv |

---

## 12. Checkliste vor Produktivstart

- [ ] Datenschutzerklärung vollständig (Verantwortlicher, Kontakt)
- [ ] Impressum vollständig
- [ ] AVV mit allen Auftragsverarbeitern geschlossen
- [ ] HSTS-Preload beantragt
- [ ] Google Fonts self-hosted oder SCCs dokumentiert
- [ ] Stripe DPA unterzeichnet
- [ ] Datenschutzbeauftragter benannt (falls erforderlich)
- [ ] Verarbeitungsverzeichnis VVT vollständig
- [ ] Cookie-Scanner validiert alle gesetzten Cookies
- [ ] Penetrationstest abgeschlossen
