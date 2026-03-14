/* ============================================
   Idea Factory — App Logic
   ============================================ */

// ── Product Data ──────────────────────────────
const products = [
    {
        id: 'ai-docs',
        title: 'AI Document Assistant',
        description: 'Intelligente Dokumentenverarbeitung mit KI. Analysiere, fasse zusammen und extrahiere Daten aus beliebigen Dokumenten — automatisch und DSGVO-konform.',
        icon: '\u{1F4C4}',
        iconBg: '#e8f4fd',
        category: 'Produktivit\u00e4t',
        tags: ['OCR', 'NLP', 'Automatisierung'],
        price: 29,
        priceYearly: 23,
        badge: 'Bestseller',
        features: [
            'Automatische Texterkennung (OCR)',
            'KI-gest\u00fctzte Zusammenfassungen',
            'Datenextraktion in strukturierte Formate',
            'Unterst\u00fctzung f\u00fcr PDF, DOCX, Bilder',
            'API-Zugang f\u00fcr eigene Integrationen',
            'Unbegrenzte Dokumente'
        ]
    },
    {
        id: 'ai-support',
        title: 'AI Customer Agent',
        description: 'Autonomer Kundenservice-Agent mit Agentic AI. Beantwortet Anfragen, l\u00f6st Probleme und eskaliert intelligent \u2014 rund um die Uhr.',
        icon: '\u{1F4AC}',
        iconBg: '#f0e8fd',
        category: 'Kundenservice',
        tags: ['Chatbot', 'Agentic AI', 'Multi-Channel'],
        price: 49,
        priceYearly: 39,
        badge: 'Neu',
        features: [
            'Autonome Beantwortung von Kundenanfragen',
            'Multi-Channel: Web, E-Mail, WhatsApp',
            'Intelligente Eskalation an Menschen',
            'Lernf\u00e4hig aus deiner Wissensbasis',
            'Sentiment-Analyse in Echtzeit',
            'Nahtlose CRM-Integration'
        ]
    },
    {
        id: 'ai-analytics',
        title: 'AI Data Analytics',
        description: 'Datenschutzkonforme Analytik mit KI-gest\u00fctzten Insights. Verstehe deine Daten, ohne sie preiszugeben.',
        icon: '\u{1F4CA}',
        iconBg: '#e8fde8',
        category: 'Analytics',
        tags: ['BI', 'Dashboards', 'Prognosen'],
        price: 39,
        priceYearly: 31,
        badge: null,
        features: [
            'KI-gest\u00fctzte Datenanalyse',
            'Automatische Erkennung von Trends',
            'Prognosefunktion mit Machine Learning',
            'Interaktive Dashboards',
            'Datenexport in alle g\u00e4ngigen Formate',
            'Keine Drittland-Transfers'
        ]
    },
    {
        id: 'ai-content',
        title: 'AI Content Studio',
        description: 'Erstelle hochwertige Texte, Social-Media-Posts und Marketingmaterialien \u2014 in deinem Tonfall, auf Knopfdruck.',
        icon: '\u270D\uFE0F',
        iconBg: '#fde8e8',
        category: 'Marketing',
        tags: ['Texterstellung', 'SEO', 'Social Media'],
        price: 19,
        priceYearly: 15,
        badge: null,
        features: [
            'KI-Texterstellung in deinem Stil',
            'SEO-optimierte Blogartikel',
            'Social-Media-Posts auf Knopfdruck',
            'Mehrsprachige Inhalte',
            'Brand-Voice-Konfiguration',
            'Unbegrenzte Generierungen'
        ]
    },
    {
        id: 'ai-workflow',
        title: 'AI Workflow Engine',
        description: 'Automatisiere komplexe Gesch\u00e4ftsprozesse mit intelligenten AI-Agenten. Von der Rechnungsverarbeitung bis zum Onboarding.',
        icon: '\u2699\uFE0F',
        iconBg: '#fdf5e8',
        category: 'Automatisierung',
        tags: ['Workflows', 'RPA', 'Integrationen'],
        price: 59,
        priceYearly: 47,
        badge: 'Enterprise',
        features: [
            'Visuelle Workflow-Builder',
            'AI-Agenten f\u00fcr komplexe Aufgaben',
            '200+ vorgefertigte Integrationen',
            'Bedingte Logik und Entscheidungsb\u00e4ume',
            'Audit-Trail f\u00fcr Compliance',
            'Dedizierter Support'
        ]
    },
    {
        id: 'ai-code',
        title: 'AI Code Companion',
        description: 'Dein KI-Assistent f\u00fcr Softwareentwicklung. Code-Reviews, Bug-Erkennung und automatische Dokumentation.',
        icon: '\u{1F9D1}\u200D\u{1F4BB}',
        iconBg: '#e8f0fd',
        category: 'Entwicklung',
        tags: ['Code Review', 'Docs', 'Testing'],
        price: 29,
        priceYearly: 23,
        badge: null,
        features: [
            'Automatische Code-Reviews',
            'Bug-Erkennung vor dem Deployment',
            'KI-generierte Dokumentation',
            'Test-Generierung',
            'Unterst\u00fctzung f\u00fcr 20+ Sprachen',
            'Git-Integration'
        ]
    }
];

// ── Pricing Plans ──────────────────────────────
const pricingPlans = [
    {
        name: 'Starter',
        description: 'F\u00fcr Einzelpersonen und kleine Teams.',
        price: 0,
        priceYearly: 0,
        period: 'Kostenlos',
        cta: 'Kostenlos starten',
        featured: false,
        features: [
            '1 AI-Tool nach Wahl',
            '100 Anfragen / Monat',
            'Community-Support',
            'EU-Server',
            'DSGVO-konform'
        ]
    },
    {
        name: 'Professional',
        description: 'F\u00fcr wachsende Teams und Unternehmen.',
        price: 49,
        priceYearly: 39,
        period: '/ Monat',
        cta: 'Jetzt starten',
        featured: true,
        features: [
            'Bis zu 3 AI-Tools',
            'Unbegrenzte Anfragen',
            'Priorit\u00e4ts-Support',
            'API-Zugang',
            'Team-Verwaltung',
            'Custom Branding'
        ]
    },
    {
        name: 'Enterprise',
        description: 'F\u00fcr Organisationen mit besonderen Anforderungen.',
        price: 149,
        priceYearly: 119,
        period: '/ Monat',
        cta: 'Kontakt aufnehmen',
        featured: false,
        features: [
            'Alle AI-Tools inklusive',
            'Unbegrenzte Anfragen',
            'Dedicated Account Manager',
            'SLA-Garantie (99.9%)',
            'On-Premise Option',
            'Custom Integrationen',
            'SSO / SAML'
        ]
    }
];

// ── State ──────────────────────────────────────
const state = {
    cart: [],
    yearlyPricing: false,
    authMode: 'login'
};

// ── Init ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderPricing();
    updateCartUI();
    initNavScroll();
    initKeyboard();
});

// ── Products ───────────────────────────────────
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card" onclick="showDetail('${product.id}')" tabindex="0" role="button" aria-label="${product.title}">
            <div class="product-icon" style="background: ${product.iconBg}">${product.icon}</div>
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-tags">
                ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
            </div>
            <div class="product-footer">
                <div class="product-price">
                    ${product.price === 0 ? 'Kostenlos' : `${state.yearlyPricing ? product.priceYearly : product.price} \u20AC<span class="product-price-period"> / Monat</span>`}
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart('${product.id}')">
                        In den Warenkorb
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ── Product Detail ─────────────────────────────
function showDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const content = document.getElementById('detailContent');
    content.innerHTML = `
        <div class="detail-icon" style="background: ${product.iconBg}">${product.icon}</div>
        <h2 class="detail-title">${product.title}</h2>
        <span class="product-badge" style="margin-bottom: 16px; display: inline-flex">${product.category}</span>
        <p class="detail-subtitle">${product.description}</p>
        <div class="detail-features">
            <h3>Features</h3>
            <ul>
                ${product.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        <div class="detail-footer">
            <div>
                <div class="detail-price">
                    ${product.price === 0 ? 'Kostenlos' : `${state.yearlyPricing ? product.priceYearly : product.price} \u20AC`}
                    ${product.price > 0 ? `<span class="detail-price-period">/ Monat</span>` : ''}
                </div>
            </div>
            <div class="product-actions">
                <button class="btn btn-ghost" onclick="closeDetail()">Schlie\u00DFen</button>
                <button class="btn btn-primary" onclick="addToCart('${product.id}'); closeDetail()">In den Warenkorb</button>
            </div>
        </div>
    `;

    document.getElementById('detailOverlay').classList.add('active');
    document.getElementById('detailModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetail() {
    document.getElementById('detailOverlay').classList.remove('active');
    document.getElementById('detailModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ── Pricing ────────────────────────────────────
function renderPricing() {
    const grid = document.getElementById('pricingGrid');
    grid.innerHTML = pricingPlans.map(plan => {
        const price = state.yearlyPricing ? plan.priceYearly : plan.price;
        return `
            <div class="pricing-card ${plan.featured ? 'featured' : ''}">
                <h3 class="pricing-name">${plan.name}</h3>
                <p class="pricing-desc">${plan.description}</p>
                <div class="pricing-price">${price === 0 ? 'Kostenlos' : `${price} \u20AC`}</div>
                <p class="pricing-period">${price === 0 ? 'F\u00fcr immer' : plan.period}</p>
                <ul class="pricing-features">
                    ${plan.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <button class="btn ${plan.featured ? 'btn-primary' : 'btn-outline'} btn-full" onclick="openAuth('signup')">
                    ${plan.cta}
                </button>
            </div>
        `;
    }).join('');

    const toggleMonthly = document.getElementById('toggleMonthly');
    const toggleYearly = document.getElementById('toggleYearly');
    const toggleSwitch = document.getElementById('pricingToggle');

    if (state.yearlyPricing) {
        toggleYearly.classList.add('active');
        toggleMonthly.classList.remove('active');
        toggleSwitch.classList.add('active');
    } else {
        toggleMonthly.classList.add('active');
        toggleYearly.classList.remove('active');
        toggleSwitch.classList.remove('active');
    }
}

function togglePricing() {
    state.yearlyPricing = !state.yearlyPricing;
    renderPricing();
    renderProducts();
}

// ── Cart ───────────────────────────────────────
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (state.cart.find(item => item.id === productId)) {
        showToast('Dieses Produkt ist bereits im Warenkorb.', 'error');
        return;
    }

    state.cart.push(product);
    updateCartUI();
    showToast(`${product.title} wurde hinzugef\u00fcgt.`, 'success');
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const items = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');
    const total = document.getElementById('cartTotal');

    const count = state.cart.length;
    badge.textContent = count;
    badge.classList.toggle('visible', count > 0);

    if (count === 0) {
        items.innerHTML = '<div class="cart-empty"><p>Dein Warenkorb ist leer.</p></div>';
        footer.style.display = 'none';
    } else {
        items.innerHTML = state.cart.map(item => {
            const price = state.yearlyPricing ? item.priceYearly : item.price;
            return `
                <div class="cart-item">
                    <div class="cart-item-icon" style="background: ${item.iconBg}">${item.icon}</div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.title}</div>
                        <div class="cart-item-price">${price} \u20AC / Monat</div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Entfernen">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
            `;
        }).join('');

        footer.style.display = 'block';
        const totalValue = state.cart.reduce((sum, item) => sum + (state.yearlyPricing ? item.priceYearly : item.price), 0);
        total.textContent = `${totalValue},00 \u20AC / Monat`;
    }
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    const isActive = sidebar.classList.contains('active');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = isActive ? '' : 'hidden';
}

function checkout() {
    if (state.cart.length === 0) return;

    // Stripe Checkout integration point
    // In production, create a Stripe Checkout session via backend API:
    // const stripe = Stripe('pk_live_...');
    // const response = await fetch('/api/create-checkout-session', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ items: state.cart.map(i => i.id) })
    // });
    // const session = await response.json();
    // stripe.redirectToCheckout({ sessionId: session.id });

    showToast('Weiterleitung zur Stripe-Kasse...', 'success');
    setTimeout(() => {
        showToast('Stripe-Integration wird konfiguriert. Bitte kontaktiere den Administrator.', 'error');
    }, 1500);
}

// ── Auth Modal ─────────────────────────────────
function openAuth(mode) {
    state.authMode = mode;
    renderAuth();
    document.getElementById('authOverlay').classList.add('active');
    document.getElementById('authModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAuth() {
    document.getElementById('authOverlay').classList.remove('active');
    document.getElementById('authModal').classList.remove('active');
    document.body.style.overflow = '';
}

function renderAuth() {
    const content = document.getElementById('authContent');
    const isLogin = state.authMode === 'login';

    content.innerHTML = `
        <h2>${isLogin ? 'Willkommen zur\u00fcck' : 'Kostenlos starten'}</h2>
        <p>${isLogin ? 'Melde dich an, um deine Tools zu nutzen.' : 'Erstelle dein Konto und starte sofort.'}</p>
        <form class="auth-form" onsubmit="handleAuth(event)">
            ${!isLogin ? '<input type="text" class="auth-input" placeholder="Name" required>' : ''}
            <input type="email" class="auth-input" placeholder="E-Mail-Adresse" required>
            <input type="password" class="auth-input" placeholder="Passwort" required>
            <button type="submit" class="btn btn-primary btn-full">${isLogin ? 'Anmelden' : 'Konto erstellen'}</button>
        </form>
        <p class="auth-switch">
            ${isLogin
                ? 'Noch kein Konto? <a href="#" onclick="event.preventDefault(); openAuth(\'signup\')">Registrieren</a>'
                : 'Bereits registriert? <a href="#" onclick="event.preventDefault(); openAuth(\'login\')">Anmelden</a>'
            }
        </p>
    `;
}

function handleAuth(event) {
    event.preventDefault();
    showToast(state.authMode === 'login' ? 'Anmeldung erfolgreich!' : 'Konto erstellt! Du kannst jetzt loslegen.', 'success');
    closeAuth();
}

// ── Navigation ─────────────────────────────────
function goHome(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

function initNavScroll() {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            nav.style.borderBottomColor = 'var(--color-border-light)';
        } else {
            nav.style.borderBottomColor = 'transparent';
        }
    }, { passive: true });
}

// ── Keyboard ───────────────────────────────────
function initKeyboard() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDetail();
            closeAuth();
            if (document.getElementById('cartSidebar').classList.contains('active')) {
                toggleCart();
            }
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.classList.contains('product-card')) {
            e.target.click();
        }
    });
}

// ── Toast ──────────────────────────────────────
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
