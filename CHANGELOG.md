# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2026-03-14

### Added

- **Self-Hosted Fonts:** Inter Variable Font (7 WOFF2-Dateien, alle Unicode-Subsets) in `src/assets/fonts/` — vollständige Eliminierung des Google-Fonts-CDN-Drittland-Transfers
- **@font-face-Deklarationen** in `styles.css` mit `font-weight: 100 900` (Variable Font)

### Changed

- **Event-Delegation in `app.js`:** Alle `onclick`-Attribute aus HTML entfernt — zentrale `handleGlobalClick()`-Funktion via `data-action`-Attributen. Schärfere CSP möglich.
- **CSP verschärft:** `fonts.googleapis.com` und `fonts.gstatic.com` aus Content-Security-Policy entfernt; `img-src` auf `'self' data:` eingeschränkt
- **Impressum:** Idea Factory GbR, Rocky Wüst und Melina Schwarz eingetragen
- **Datenschutzerklärung:** Firmendaten aktualisiert, Google-Fonts-Absatz durch Self-Hosting-Hinweis ersetzt
- **AGB:** Firmendaten (Idea Factory GbR, Gesellschafter) aktualisiert
- **Footer:** © 2026 Idea Factory GbR
- **`docs/DSGVO-COMPLIANCE.md`:** Drittland-Transfer-Tabelle aktualisiert — kein Google Fonts mehr
- **`docs/SECURITY-CONCEPT.md`:** CSP-Dokumentation aktualisiert, Stripe-SRI-Limitation dokumentiert

### Security

- Kein Drittland-Transfer mehr durch Google Fonts (DSGVO-Verbesserung)
- CSP-Scope auf `'self'` eingeschränkt für Fonts und Bilder

## [2.1.0] - 2026-03-14

### Added — Security & DSGVO

- **Cookie-Consent-Banner** (DSGVO-konform): Granulare Einwilligung pro Kategorie (notwendig / Analyse / Marketing), Widerruf jederzeit möglich
- **Datenschutzerklärung** (Modal): Vollständige Informationspflichten gem. Art. 13/14 DSGVO
- **Impressum** (Modal): Gesetzlich vorgeschriebene Pflichtangaben gem. § 5 TMG
- **AGB** (Modal): Allgemeine Geschäftsbedingungen für SaaS-Nutzung
- **security.js**: Zentrales Sicherheitsmodul — Input-Sanitization, Audit-Logging, Consent-Management
- **privacy.css**: Vollständiges Styling für alle Datenschutz-UI-Komponenten
- **HTTP Security Headers** (vercel.json): HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CORP, COOP
- **GitHub Actions Security Workflow**: CodeQL, Gitleaks Secret-Detection, npm audit, Security-Header-Validierung
- **docs/SECURITY-CONCEPT.md**: Vollständiges Sicherheitskonzept inkl. Threat Model (STRIDE), CSP-Dokumentation, Security Roadmap
- **docs/DSGVO-COMPLIANCE.md**: GDPR-Compliance-Dokumentation, Verarbeitungsverzeichnis, TOM-Übersicht
- **docs/BACKUP-STRATEGY.md**: Backup-Strategie (3-2-1-Regel), RPO/RTO-Definitionen, DSGVO-konforme Löschkonzepte

### Changed

- Footer-Links (Datenschutz, Impressum, AGB) öffnen jetzt korrekte Modals statt Platzhalter-Links
- Cookie-Einstellungen über Footer jederzeit zugänglich

## [1.0.0] - 2026-03-14

### Added

- Initial release of CodeVault marketplace
- Browse and search 14 demo code projects across 12 categories
- Real-time search with keyboard shortcut (Ctrl+K)
- Advanced filtering by category, price range, rating, and tags
- Sorting by featured, newest, price, rating, and downloads
- Shopping cart with slide-out sidebar
- Project detail modal with README preview and author info
- Dark theme with purple/blue gradient accents
- Fully responsive design (desktop, tablet, mobile)
- German-language UI
- Toast notification system
