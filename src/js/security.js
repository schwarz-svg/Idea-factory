/* ============================================
   Idea Factory — Security & DSGVO Module
   Version: 1.0.0

   Responsibilities:
   - DSGVO-konformes Cookie-Consent-Management
   - Input-Sanitization (XSS-Prävention)
   - Client-seitiges Audit-Logging
   - Datenschutzhinweis-Verwaltung
   ============================================ */

'use strict';

// ── Constants ──────────────────────────────────
const CONSENT_STORAGE_KEY = 'if_consent_v1';
const CONSENT_TIMESTAMP_KEY = 'if_consent_ts_v1';
const AUDIT_LOG_KEY = 'if_audit_log_v1';
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // 1 Jahr (DSGVO Art. 7)
const AUDIT_LOG_MAX_ENTRIES = 100;

// ── Input Sanitization ─────────────────────────
/**
 * Escaped HTML-Sonderzeichen zur XSS-Prävention.
 * Wird für alle dynamisch eingesetzten Nutzerdaten verwendet.
 */
function sanitizeHTML(str) {
    if (typeof str !== 'string') return '';
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };
    return str.replace(/[&<>"'`=/]/g, (s) => map[s]);
}

/**
 * Validiert E-Mail-Adressen serverseitig (client-side als UX-Layer).
 */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

// ── Audit Logging ──────────────────────────────
/**
 * Schreibt einen Audit-Log-Eintrag in den localStorage.
 * Logs enthalten keine personenbezogenen Daten.
 * Max. AUDIT_LOG_MAX_ENTRIES Einträge (FIFO).
 */
function auditLog(action, details = {}) {
    try {
        const entries = getAuditLog();
        const entry = {
            ts: new Date().toISOString(),
            action,
            details,
            session: getSessionId()
        };
        entries.push(entry);
        // FIFO: älteste Einträge löschen
        if (entries.length > AUDIT_LOG_MAX_ENTRIES) {
            entries.splice(0, entries.length - AUDIT_LOG_MAX_ENTRIES);
        }
        localStorage.setItem(AUDIT_LOG_KEY, JSON.stringify(entries));
    } catch {
        // Silent fail — Audit darf Kernfunktionen nicht blockieren
    }
}

function getAuditLog() {
    try {
        return JSON.parse(localStorage.getItem(AUDIT_LOG_KEY) || '[]');
    } catch {
        return [];
    }
}

// Anonyme Session-ID (kein Personenbezug, nur für Debugging)
function getSessionId() {
    const KEY = 'if_sid';
    let sid = sessionStorage.getItem(KEY);
    if (!sid) {
        sid = Math.random().toString(36).slice(2, 10);
        sessionStorage.setItem(KEY, sid);
    }
    return sid;
}

// ── Cookie Consent ─────────────────────────────
const ConsentManager = {
    /**
     * Gibt das gespeicherte Einwilligungsobjekt zurück oder null.
     */
    get() {
        try {
            const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
            const ts = parseInt(localStorage.getItem(CONSENT_TIMESTAMP_KEY) || '0', 10);
            if (!raw || !ts) return null;
            // Einwilligung nach 1 Jahr erneuern (DSGVO-Empfehlung)
            if (Date.now() - ts > CONSENT_MAX_AGE_MS) {
                this.clear();
                return null;
            }
            return JSON.parse(raw);
        } catch {
            return null;
        }
    },

    /**
     * Speichert die Einwilligung mit Zeitstempel.
     * @param {Object} consent - { functional: true, analytics: bool, marketing: bool }
     */
    set(consent) {
        const normalized = {
            functional: true, // immer erforderlich
            analytics: Boolean(consent.analytics),
            marketing: Boolean(consent.marketing),
            version: '1.0'
        };
        localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(normalized));
        localStorage.setItem(CONSENT_TIMESTAMP_KEY, Date.now().toString());
        auditLog('consent_given', {
            analytics: normalized.analytics,
            marketing: normalized.marketing
        });
        return normalized;
    },

    /**
     * Löscht alle Einwilligungs- und Tracking-Daten (Widerruf, DSGVO Art. 7 Abs. 3).
     */
    clear() {
        localStorage.removeItem(CONSENT_STORAGE_KEY);
        localStorage.removeItem(CONSENT_TIMESTAMP_KEY);
        auditLog('consent_withdrawn');
    },

    /**
     * Gibt true zurück, wenn eine gültige Einwilligung vorliegt.
     */
    hasConsent() {
        return this.get() !== null;
    }
};

// ── Cookie Banner UI ───────────────────────────
function initConsentBanner() {
    if (ConsentManager.hasConsent()) return;

    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.setAttribute('aria-hidden', 'false');
        banner.classList.add('visible');
    }
}

function acceptAllCookies() {
    ConsentManager.set({ analytics: true, marketing: true });
    hideBanner();
    showToast('Einwilligung gespeichert. Danke!', 'success');
}

function acceptRequiredCookies() {
    ConsentManager.set({ analytics: false, marketing: false });
    hideBanner();
    showToast('Nur notwendige Cookies akzeptiert.', 'success');
}

function saveConsentSettings() {
    const analytics = document.getElementById('consentAnalytics')?.checked || false;
    const marketing = document.getElementById('consentMarketing')?.checked || false;
    ConsentManager.set({ analytics, marketing });
    hideBanner();
    closePrivacySettings();
    showToast('Datenschutzeinstellungen gespeichert.', 'success');
}

function hideBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.remove('visible');
        banner.setAttribute('aria-hidden', 'true');
    }
}

function openPrivacySettings() {
    const settings = document.getElementById('consentSettings');
    if (settings) {
        const consent = ConsentManager.get() || {};
        const analyticsChk = document.getElementById('consentAnalytics');
        const marketingChk = document.getElementById('consentMarketing');
        if (analyticsChk) analyticsChk.checked = consent.analytics || false;
        if (marketingChk) marketingChk.checked = consent.marketing || false;
        settings.classList.add('active');
    }
}

function closePrivacySettings() {
    document.getElementById('consentSettings')?.classList.remove('active');
}

// ── Legal Modals ───────────────────────────────
function openPrivacyPolicy() {
    openLegalModal('privacyModal');
    auditLog('privacy_policy_viewed');
}

function openImprint() {
    openLegalModal('imprintModal');
}

function openTerms() {
    openLegalModal('termsModal');
}

function openLegalModal(id) {
    const overlay = document.getElementById('legalOverlay');
    // Alle Legal-Modals schließen
    document.querySelectorAll('.legal-modal').forEach(m => m.classList.remove('active'));
    const modal = document.getElementById(id);
    if (modal && overlay) {
        overlay.classList.add('active');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLegalModal() {
    document.getElementById('legalOverlay')?.classList.remove('active');
    document.querySelectorAll('.legal-modal').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
}

// Einwilligung widerrufen (Datenschutzeinstellungen in Footer)
function revokeConsent() {
    ConsentManager.clear();
    closeLegalModal();
    closePrivacySettings();
    // Banner erneut anzeigen
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.setAttribute('aria-hidden', 'false');
        banner.classList.add('visible');
    }
    showToast('Einwilligung widerrufen. Cookie-Banner wird erneut angezeigt.', 'success');
}

// ── Security Init ──────────────────────────────
function initSecurity() {
    initConsentBanner();
    auditLog('page_load', { path: window.location.pathname });

    // Subresource Integrity check (informativ)
    document.addEventListener('securitypolicyviolation', (e) => {
        auditLog('csp_violation', {
            directive: e.violatedDirective,
            blocked: e.blockedURI
        });
    });
}

// ── Export (für app.js zugänglich) ────────────
window.Security = {
    sanitizeHTML,
    isValidEmail,
    auditLog,
    ConsentManager,
    revokeConsent,
    openPrivacySettings,
    closePrivacySettings,
    saveConsentSettings,
    acceptAllCookies,
    acceptRequiredCookies,
    openPrivacyPolicy,
    openImprint,
    openTerms,
    closeLegalModal
};
