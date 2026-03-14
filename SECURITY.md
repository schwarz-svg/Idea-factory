# Security Policy — Idea Factory

## Supported Versions

| Version | Unterstützt |
|---------|-------------|
| 2.x.x   | ✅ Aktiv |
| 1.0.x   | ⚠️ Security-only |

---

## Vulnerability Reporting (Responsible Disclosure)

**Bitte keine öffentlichen Issues für Sicherheitslücken öffnen.**

Stattdessen:

1. Gehe zum [Security-Tab](https://github.com/schwarz-svg/Idea-factory/security) dieses Repositories
2. Klicke auf **"Report a vulnerability"** (GitHub Private Security Reporting)
3. Beschreibe die Schwachstelle detailliert

**Alternativ:** E-Mail an `security@idea-factory.de` mit PGP-Verschlüsselung (Key auf Anfrage).

### SLA

| Schwere | Bestätigung | Patch-Ziel |
|---------|-------------|------------|
| Kritisch | 24 Stunden | 48 Stunden |
| Hoch | 48 Stunden | 7 Tage |
| Mittel | 72 Stunden | 30 Tage |
| Niedrig | 7 Tage | Nächstes Release |

---

## Scope

### In Scope

- XSS (Cross-Site Scripting) in der Hauptanwendung
- Content-Security-Policy-Bypässe
- Clickjacking / UI-Redressing
- Unsichere Direktverweise / IDOR (bei zukünftigem Backend)
- Authentifizierungsschwächen (bei zukünftigem Backend)
- Datenlecks / Informationsoffenbarung
- Dependency-Schwachstellen mit nachweisbarer Auswirkung

### Out of Scope

- Denial-of-Service-Angriffe
- Social Engineering
- Physische Angriffe
- Schwachstellen in Drittanbieter-Diensten (Stripe, Vercel, GitHub)
- Scanner-Findings ohne nachgewiesene Ausnutzbarkeit

---

## Implementierte Sicherheitsmaßnahmen

### HTTP-Sicherheitsheader (alle via Vercel)
- ✅ Strict-Transport-Security (HSTS, 2 Jahre, Preload)
- ✅ Content-Security-Policy
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy (Kamera, Mikrofon, Geolocation deaktiviert)
- ✅ Cross-Origin-Opener-Policy: same-origin
- ✅ Cross-Origin-Resource-Policy: same-origin

### Code-Sicherheit
- ✅ Input-Sanitization für alle dynamischen DOM-Inhalte (`security.js`)
- ✅ Kein `eval()`, kein `document.write()`
- ✅ Keine sensitiven Daten im Client-State
- ✅ Stripe.js für PCI-DSS-konforme Zahlungsverarbeitung

### CI/CD Security
- ✅ GitHub CodeQL (Static Analysis bei jedem Push)
- ✅ Gitleaks (Secret Detection)
- ✅ Automatische Security-Header-Validierung
- ✅ npm audit (für zukünftige Dependencies)

### DSGVO-Compliance
- ✅ Cookie-Consent-Banner (granular, TDDDG-konform)
- ✅ Datenschutzerklärung (Art. 13 DSGVO)
- ✅ Impressum (§ 5 TMG)
- ✅ Widerrufsmöglichkeit für Einwilligungen (Art. 7 Abs. 3 DSGVO)
- ✅ Privacy-by-Default: nur notwendige Cookies aktiviert

### Bekannte Einschränkungen
- ⚠️ CSP `script-src 'unsafe-inline'` aktuell nötig (Migrationspfad: Event-Delegation — in Roadmap)
- ⚠️ Google Fonts via CDN (potenzieller Drittland-Transfer, Self-Hosting geplant)

---

## Sicherheitsdokumentation

Vollständiges Sicherheitskonzept: [`docs/SECURITY-CONCEPT.md`](docs/SECURITY-CONCEPT.md)
DSGVO-Compliance: [`docs/DSGVO-COMPLIANCE.md`](docs/DSGVO-COMPLIANCE.md)
Backup-Strategie: [`docs/BACKUP-STRATEGY.md`](docs/BACKUP-STRATEGY.md)

---

## Hall of Fame

Wir danken allen, die verantwortungsvoll Sicherheitslücken gemeldet haben.
*(Bislang keine Einträge)*

---

## Lizenz dieser Policy

Diese Security Policy steht unter [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) — frei adaptierbar.
