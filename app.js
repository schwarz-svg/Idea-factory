/* ============================================
   CodeVault - Application Logic
   ============================================ */

// --- Demo Data ---
const projects = [
  {
    id: 1,
    title: "KI-Chatbot Framework",
    description: "Leistungsstarkes Framework zum Erstellen intelligenter Chatbots mit NLP-Integration und vortrainierten Modellen.",
    longDescription: "Dieses umfassende Framework ermöglicht es Entwicklern, in kürzester Zeit intelligente Chatbots zu erstellen. Mit integrierter NLP-Pipeline, vortrainierten Sprachmodellen und einer flexiblen Plugin-Architektur. Unterstützt mehrere Messaging-Plattformen wie Telegram, Slack und Discord. Inklusive Sentiment-Analyse und automatischer Intent-Erkennung.",
    category: "KI / ML",
    tags: ["Python", "TensorFlow", "NLP", "API"],
    price: 39,
    rating: 4.8,
    downloads: 3842,
    author: "Dr. Anna Weber",
    authorRole: "KI-Ingenieurin",
    language: "Python",
    framework: "TensorFlow",
    icon: "\u{1F916}",
    featured: true,
    dateAdded: "2026-02-15",
    readme: "# KI-Chatbot Framework\n\nSchnellstart:\n\n```bash\npip install codevault-chatbot\nchatbot init mein-bot\nchatbot serve\n```\n\nFeatures: NLP-Pipeline, Multi-Platform, Plugin-System, Sentiment-Analyse."
  },
  {
    id: 2,
    title: "E-Commerce Starter Kit",
    description: "Vollständiges E-Commerce-System mit Warenkorb, Bezahlung, Produktverwaltung und Admin-Dashboard.",
    longDescription: "Ein produktionsreifes E-Commerce-System mit allem, was Sie brauchen: Produktkatalog mit Varianten, Warenkorb mit Session-Management, Stripe/PayPal-Integration, Bestellverwaltung, Kundenkontenverwaltung, Admin-Dashboard mit Analysen, SEO-optimierte Produktseiten und responsive Design. Perfekt als Grundlage für Ihren Online-Shop.",
    category: "Web",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    price: 49,
    rating: 4.6,
    downloads: 5621,
    author: "Max Schneider",
    authorRole: "Full-Stack Entwickler",
    language: "JavaScript",
    framework: "React",
    icon: "\u{1F6D2}",
    featured: true,
    dateAdded: "2026-01-20",
    readme: "# E-Commerce Starter Kit\n\n```bash\nnpx create-codevault-shop mein-shop\ncd mein-shop\nnpm run dev\n```\n\nInklusive: Produktkatalog, Warenkorb, Stripe-Integration, Admin-Panel."
  },
  {
    id: 3,
    title: "IoT Dashboard",
    description: "Echtzeit-Dashboard für IoT-Geräte mit Sensorvisualisierung, Alarmen und Gerätemanagement.",
    longDescription: "Professionelles IoT-Dashboard zur Überwachung und Steuerung Ihrer IoT-Geräte. Echtzeit-Datenvisualisierung mit WebSockets, konfigurierbare Alarme und Benachrichtigungen, Geräteverwaltung mit Gruppierung, historische Datenanalyse, MQTT-Broker-Integration und REST-API für Drittanbieter-Integrationen.",
    category: "IoT",
    tags: ["Vue.js", "MQTT", "WebSocket", "Chart.js"],
    price: 29,
    rating: 4.4,
    downloads: 1893,
    author: "Lisa Hoffmann",
    authorRole: "IoT-Spezialistin",
    language: "JavaScript",
    framework: "Vue.js",
    icon: "\u{1F4E1}",
    featured: false,
    dateAdded: "2026-03-01",
    readme: "# IoT Dashboard\n\n```bash\nnpm install iot-dashboard\nnpm run setup\nnpm start\n```\n\nVerbinden Sie Ihre Geräte über MQTT und visualisieren Sie Daten in Echtzeit."
  },
  {
    id: 4,
    title: "REST API Generator",
    description: "Generiert automatisch RESTful APIs aus Datenbankschemas mit Authentifizierung und Dokumentation.",
    longDescription: "Sparen Sie Wochen Entwicklungszeit mit diesem intelligenten API-Generator. Definieren Sie Ihr Schema und erhalten Sie automatisch CRUD-Endpunkte, Validierung, JWT-Authentifizierung, Rate-Limiting, Swagger-Dokumentation und TypeScript-Typen. Unterstützt PostgreSQL, MySQL und MongoDB.",
    category: "Backend",
    tags: ["Node.js", "Express", "PostgreSQL", "Swagger"],
    price: 0,
    rating: 4.7,
    downloads: 8234,
    author: "Tom Becker",
    authorRole: "Backend-Architekt",
    language: "TypeScript",
    framework: "Express",
    icon: "\u{26A1}",
    featured: true,
    dateAdded: "2026-02-28",
    readme: "# REST API Generator\n\n```bash\nnpx rest-api-gen init\n# Schema definieren in schema.yaml\nnpx rest-api-gen generate\nnpm start\n```\n\nAutomatische API-Generierung mit Swagger-Docs und JWT-Auth."
  },
  {
    id: 5,
    title: "React Component Library",
    description: "60+ hochwertige, barrierefreie UI-Komponenten für React mit Theming und Storybook.",
    longDescription: "Eine professionelle Komponentenbibliothek mit über 60 sorgfältig gestalteten Komponenten. Vollständig barrierefrei (WCAG 2.1 AA), anpassbares Theming-System, Dark/Light-Mode, TypeScript-Support, Storybook-Dokumentation und Tree-Shaking-fähig. Von Buttons und Formularen bis hin zu Datentabellen und Charts.",
    category: "Frontend",
    tags: ["React", "TypeScript", "Storybook", "CSS-in-JS"],
    price: 19,
    rating: 4.9,
    downloads: 12450,
    author: "Sarah Klein",
    authorRole: "UI-Entwicklerin",
    language: "TypeScript",
    framework: "React",
    icon: "\u{1F3A8}",
    featured: true,
    dateAdded: "2026-01-10",
    readme: "# React Component Library\n\n```bash\nnpm install @codevault/ui\n```\n\n```jsx\nimport { Button, Card } from '@codevault/ui';\n\n<Button variant=\"primary\">Klick mich</Button>\n```\n\n60+ Komponenten, Dark Mode, volle Barrierefreiheit."
  },
  {
    id: 6,
    title: "DevOps Pipeline Template",
    description: "Vorkonfigurierte CI/CD-Pipelines für GitHub Actions, GitLab CI und Jenkins mit Docker-Support.",
    longDescription: "Beschleunigen Sie Ihren DevOps-Workflow mit diesen produktionserprobten Pipeline-Templates. Enthält Konfigurationen für automatisiertes Testen, Linting, Security-Scanning, Docker-Builds, Kubernetes-Deployments und Multi-Environment-Management. Kompatibel mit GitHub Actions, GitLab CI und Jenkins.",
    category: "DevOps",
    tags: ["Docker", "Kubernetes", "CI/CD", "YAML"],
    price: 0,
    rating: 4.5,
    downloads: 6789,
    author: "Jan Müller",
    authorRole: "DevOps-Engineer",
    language: "YAML",
    framework: "Docker",
    icon: "\u{1F680}",
    featured: false,
    dateAdded: "2026-03-05",
    readme: "# DevOps Pipeline Template\n\n```bash\nnpx devops-template init --provider github\n# oder\nnpx devops-template init --provider gitlab\n```\n\nCI/CD, Docker, Kubernetes - alles vorkonfiguriert."
  },
  {
    id: 7,
    title: "Mobile App Template",
    description: "Cross-Platform Mobile App mit React Native, Navigation, State Management und nativen Modulen.",
    longDescription: "Starten Sie Ihre Mobile-App-Entwicklung mit diesem professionellen Template. Enthält React Native mit Expo, React Navigation, Redux Toolkit, Push-Benachrichtigungen, Biometrische Authentifizierung, Offline-Speicher, Dark Mode und über 20 vorgefertigte Screens (Login, Profil, Dashboard, Settings etc.).",
    category: "Mobile",
    tags: ["React Native", "Expo", "Redux", "TypeScript"],
    price: 35,
    rating: 4.3,
    downloads: 4156,
    author: "Nina Wagner",
    authorRole: "Mobile-Entwicklerin",
    language: "TypeScript",
    framework: "React Native",
    icon: "\u{1F4F1}",
    featured: false,
    dateAdded: "2026-02-10",
    readme: "# Mobile App Template\n\n```bash\nnpx create-expo-app --template codevault-mobile\ncd meine-app\nnpm start\n```\n\n20+ Screens, Push-Notifications, Biometrie, Offline-Support."
  },
  {
    id: 8,
    title: "Data Analytics Dashboard",
    description: "Interaktives Analytics-Dashboard mit Datenvisualisierung, Berichten und Export-Funktionen.",
    longDescription: "Ein leistungsstarkes Analytics-Dashboard für datengetriebene Unternehmen. Interaktive Charts und Graphen, Drag-and-Drop Dashboard-Builder, automatische Berichterstellung (PDF/Excel), Datenquellenanbindung (SQL, REST, CSV), Benutzerrechteverwaltung und Echtzeit-Datenaktualisierung.",
    category: "Data",
    tags: ["Python", "Django", "D3.js", "Pandas"],
    price: 45,
    rating: 4.6,
    downloads: 2987,
    author: "Felix Braun",
    authorRole: "Data Engineer",
    language: "Python",
    framework: "Django",
    icon: "\u{1F4CA}",
    featured: false,
    dateAdded: "2026-01-25",
    readme: "# Data Analytics Dashboard\n\n```bash\npip install codevault-analytics\nanalytics init mein-dashboard\nanalytics migrate\nanalytics serve\n```\n\nInteraktive Charts, Berichte, Export, Multi-Datenquellen."
  },
  {
    id: 9,
    title: "Authentication System",
    description: "Komplettes Auth-System mit OAuth2, 2FA, Session-Management und Sicherheits-Best-Practices.",
    longDescription: "Ein sicherheitsgehärtetes Authentifizierungssystem nach Industriestandards. OAuth2/OpenID Connect, Zwei-Faktor-Authentifizierung (TOTP, SMS), Passwort-Recovery-Flow, Rate-Limiting und Brute-Force-Schutz, RBAC (Role-Based Access Control), Session-Management, Audit-Logging und DSGVO-konforme Datenverarbeitung.",
    category: "Security",
    tags: ["Node.js", "JWT", "OAuth2", "Redis"],
    price: 0,
    rating: 4.8,
    downloads: 9876,
    author: "Kai Fischer",
    authorRole: "Security-Experte",
    language: "TypeScript",
    framework: "Node.js",
    icon: "\u{1F512}",
    featured: true,
    dateAdded: "2026-03-10",
    readme: "# Authentication System\n\n```bash\nnpm install @codevault/auth\n```\n\n```js\nconst auth = require('@codevault/auth');\nauth.init({ provider: 'oauth2', mfa: true });\n```\n\nOAuth2, 2FA, RBAC, DSGVO-konform."
  },
  {
    id: 10,
    title: "CMS Headless",
    description: "Flexibles Headless CMS mit GraphQL-API, Medienmanagement und Multi-Sprachen-Support.",
    longDescription: "Ein modernes Headless CMS für Content-getriebene Anwendungen. GraphQL- und REST-API, visueller Content-Editor, Medienbibliothek mit Bildoptimierung, Webhook-Integration, Multi-Sprachen-Support (i18n), Versionierung und Entwürfe, granulare Zugriffsrechte und CDN-Integration für schnelle Auslieferung.",
    category: "CMS",
    tags: ["Node.js", "GraphQL", "React", "PostgreSQL"],
    price: 25,
    rating: 4.4,
    downloads: 3456,
    author: "Marie Schmidt",
    authorRole: "CMS-Architektin",
    language: "TypeScript",
    framework: "GraphQL",
    icon: "\u{1F4DD}",
    featured: false,
    dateAdded: "2026-02-05",
    readme: "# CMS Headless\n\n```bash\nnpx create-codevault-cms mein-cms\ncd mein-cms\nnpm run dev\n```\n\nGraphQL-API, Medien-Management, i18n, Versionierung."
  },
  {
    id: 11,
    title: "Blockchain Smart Contract Kit",
    description: "Toolkit für Ethereum Smart Contracts mit Testing, Deployment und Frontend-Integration.",
    longDescription: "Alles was Sie für die Smart-Contract-Entwicklung brauchen. Hardhat-Konfiguration mit optimierten Settings, vorgefertigte Contract-Templates (ERC-20, ERC-721, DAO), umfassende Test-Suite, automatisiertes Deployment auf mehrere Netzwerke, React-Frontend mit Web3-Integration, Gas-Optimierung und Security-Audit-Checkliste.",
    category: "Blockchain",
    tags: ["Solidity", "Hardhat", "Ethers.js", "React"],
    price: 29,
    rating: 4.2,
    downloads: 1567,
    author: "Paul Richter",
    authorRole: "Blockchain-Entwickler",
    language: "Solidity",
    framework: "Hardhat",
    icon: "\u{26D3}\u{FE0F}",
    featured: false,
    dateAdded: "2026-02-20",
    readme: "# Blockchain Smart Contract Kit\n\n```bash\nnpx hardhat init --template codevault-sc\nnpx hardhat test\nnpx hardhat deploy --network goerli\n```\n\nERC-20, ERC-721, DAO-Templates, Gas-Optimierung."
  },
  {
    id: 12,
    title: "Game Engine Starter",
    description: "2D/3D Game Engine Starter mit Physics, Sprites, Sound und Level-Editor in TypeScript.",
    longDescription: "Ein leichtgewichtiger Game-Engine-Starter für Browser-Spiele. WebGL-basiertes Rendering, integrierte Physics-Engine (Box2D), Sprite-Animation-System, Tilemap-Editor, Sound-Manager, Partikelsystem, Gamepad-Support, Asset-Loading-Pipeline und Beispielprojekte (Platformer, Puzzle, Shooter).",
    category: "Gaming",
    tags: ["TypeScript", "WebGL", "Canvas", "Box2D"],
    price: 15,
    rating: 4.5,
    downloads: 2345,
    author: "Lena Wolf",
    authorRole: "Game-Entwicklerin",
    language: "TypeScript",
    framework: "WebGL",
    icon: "\u{1F3AE}",
    featured: false,
    dateAdded: "2026-03-08",
    readme: "# Game Engine Starter\n\n```bash\nnpm install @codevault/game-engine\n```\n\n```ts\nimport { Engine, Scene } from '@codevault/game-engine';\nconst game = new Engine({ width: 800, height: 600 });\ngame.start();\n```\n\nWebGL, Physics, Sprites, Sound, Level-Editor."
  },
  {
    id: 13,
    title: "CLI Tool Builder",
    description: "Framework zum Erstellen professioneller CLI-Tools mit Argumenten-Parsing, Farben und Progress-Bars.",
    longDescription: "Erstellen Sie beeindruckende CLI-Anwendungen mit minimalem Aufwand. Automatisches Argumenten-Parsing, farbige Ausgabe, interaktive Prompts, Fortschrittsbalken, Spinner, Tabellen-Formatierung, Auto-Vervollständigung, Man-Page-Generierung und Konfigurationsdatei-Management.",
    category: "Backend",
    tags: ["Node.js", "TypeScript", "CLI", "npm"],
    price: 0,
    rating: 4.6,
    downloads: 5432,
    author: "Stefan Jung",
    authorRole: "Tool-Entwickler",
    language: "TypeScript",
    framework: "Node.js",
    icon: "\u{1F4BB}",
    featured: false,
    dateAdded: "2026-01-30",
    readme: "# CLI Tool Builder\n\n```bash\nnpm install @codevault/cli-builder\n```\n\n```ts\nimport { CLI } from '@codevault/cli-builder';\nconst cli = new CLI('mein-tool');\ncli.command('start').action(() => { /* ... */ });\ncli.run();\n```"
  },
  {
    id: 14,
    title: "Microservices Boilerplate",
    description: "Production-ready Microservices-Architektur mit Service Discovery, API Gateway und Monitoring.",
    longDescription: "Eine vollständige Microservices-Infrastruktur, die sofort einsatzbereit ist. Enthält API Gateway (Kong), Service Discovery (Consul), Message Queue (RabbitMQ), zentrales Logging (ELK Stack), Monitoring (Prometheus/Grafana), Circuit Breaker, Health Checks und Docker Compose für lokale Entwicklung.",
    category: "Backend",
    tags: ["Go", "Docker", "gRPC", "Kubernetes"],
    price: 42,
    rating: 4.7,
    downloads: 3210,
    author: "Robert Lange",
    authorRole: "Cloud-Architekt",
    language: "Go",
    framework: "gRPC",
    icon: "\u{1F300}",
    featured: true,
    dateAdded: "2026-03-12",
    readme: "# Microservices Boilerplate\n\n```bash\ngit clone codevault/microservices-bp\ncd microservices-bp\ndocker-compose up -d\n```\n\nAPI Gateway, Service Discovery, Monitoring, Message Queue."
  }
];

// --- State ---
let state = {
  filteredProjects: [...projects],
  cart: [],
  activeCategory: null,
  activeSearch: '',
  activeTags: [],
  activeRating: 0,
  maxPrice: 49,
  freeOnly: false,
  sortBy: 'featured'
};

// --- Categories ---
const categories = [...new Set(projects.map(p => p.category))];
const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();

// --- Category Icons ---
const categoryIcons = {
  "KI / ML": "\u{1F9E0}",
  "Web": "\u{1F310}",
  "IoT": "\u{1F4E1}",
  "Backend": "\u{2699}\u{FE0F}",
  "Frontend": "\u{1F3A8}",
  "DevOps": "\u{1F680}",
  "Mobile": "\u{1F4F1}",
  "Data": "\u{1F4CA}",
  "Security": "\u{1F512}",
  "CMS": "\u{1F4DD}",
  "Blockchain": "\u{26D3}\u{FE0F}",
  "Gaming": "\u{1F3AE}"
};

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryDropdown();
  renderCategoryFilters();
  renderTagFilters();
  renderProjects();
  setupEventListeners();
});

// --- Render Functions ---

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const noResults = document.getElementById('noResults');
  const countEl = document.getElementById('listingCount');

  if (state.filteredProjects.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    countEl.textContent = '0 Projekte';
    return;
  }

  noResults.style.display = 'none';
  countEl.textContent = `${state.filteredProjects.length} Projekt${state.filteredProjects.length !== 1 ? 'e' : ''}`;

  grid.innerHTML = state.filteredProjects.map(project => `
    <article class="project-card" onclick="showProjectDetail(${project.id})" tabindex="0" role="button" aria-label="${project.title} anzeigen">
      <div class="card-thumbnail" style="background: ${getThumbnailGradient(project.category)}">
        ${project.featured ? '<span class="card-featured">Empfohlen</span>' : ''}
        <span class="card-price-badge ${project.price === 0 ? 'free' : 'paid'}">
          ${project.price === 0 ? 'Kostenlos' : project.price + ' \u20AC'}
        </span>
        <span class="card-icon">${project.icon}</span>
      </div>
      <div class="card-body">
        <div class="card-category">${project.category}</div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-description">${project.description}</p>
        <div class="card-tags">
          ${project.tags.slice(0, 3).map(tag => `<span class="card-tag">${tag}</span>`).join('')}
          ${project.tags.length > 3 ? `<span class="card-tag">+${project.tags.length - 3}</span>` : ''}
        </div>
        <div class="card-meta">
          <div class="card-rating">
            <span class="stars">${renderStars(project.rating)}</span>
            <span class="rating-num">${project.rating.toFixed(1)}</span>
          </div>
          <div class="card-downloads">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            ${formatNumber(project.downloads)}
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function renderCategoryDropdown() {
  const dropdown = document.getElementById('categoryDropdown');
  const mobileCategories = document.getElementById('mobileCategories');

  const allItem = `<div class="dropdown-item" onclick="selectCategory(null)">
    <span>\u{1F4E6}</span> Alle Kategorien
    <span class="cat-count">${projects.length}</span>
  </div>`;

  const items = categories.map(cat => {
    const count = projects.filter(p => p.category === cat).length;
    return `<div class="dropdown-item" onclick="selectCategory('${cat}')">
      <span>${categoryIcons[cat] || '\u{1F4C1}'}</span> ${cat}
      <span class="cat-count">${count}</span>
    </div>`;
  }).join('');

  dropdown.innerHTML = allItem + items;
  mobileCategories.innerHTML = allItem + items;
}

function renderCategoryFilters() {
  const container = document.getElementById('categoryFilters');
  container.innerHTML = categories.map(cat => {
    const count = projects.filter(p => p.category === cat).length;
    return `<label class="checkbox-label">
      <input type="checkbox" value="${cat}" onchange="toggleCategoryFilter('${cat}')">
      <span class="checkmark"></span>
      ${cat} <span style="margin-left:auto;font-size:0.72rem;color:var(--text-muted)">${count}</span>
    </label>`;
  }).join('');
}

function renderTagFilters() {
  const container = document.getElementById('tagFilters');
  container.innerHTML = allTags.map(tag =>
    `<button class="tag-filter" onclick="toggleTagFilter('${tag}')" data-tag="${tag}">${tag}</button>`
  ).join('');
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '\u2605'.repeat(full) + (half ? '\u2606' : '') + '\u2606'.repeat(empty);
}

function formatNumber(num) {
  if (num >= 10000) return (num / 1000).toFixed(1) + 'k';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
}

function getThumbnailGradient(category) {
  const gradients = {
    "KI / ML": "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.1))",
    "Web": "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(6,182,212,0.1))",
    "IoT": "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(59,130,246,0.1))",
    "Backend": "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1))",
    "Frontend": "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(139,92,246,0.1))",
    "DevOps": "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(245,158,11,0.1))",
    "Mobile": "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.1))",
    "Data": "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.1))",
    "Security": "linear-gradient(135deg, rgba(239,68,68,0.15), rgba(245,158,11,0.1))",
    "CMS": "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.1))",
    "Blockchain": "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
    "Gaming": "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(6,182,212,0.1))"
  };
  return gradients[category] || "var(--gradient-subtle)";
}

// --- Filter & Search ---

function filterProjects() {
  let filtered = [...projects];

  // Category filter
  if (state.activeCategory) {
    filtered = filtered.filter(p => p.category === state.activeCategory);
  }

  // Search filter
  if (state.activeSearch) {
    const q = state.activeSearch.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.language.toLowerCase().includes(q) ||
      p.framework.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q)
    );
  }

  // Tag filter
  if (state.activeTags.length > 0) {
    filtered = filtered.filter(p =>
      state.activeTags.some(tag => p.tags.includes(tag))
    );
  }

  // Rating filter
  if (state.activeRating > 0) {
    filtered = filtered.filter(p => p.rating >= state.activeRating);
  }

  // Price filter
  const freeOnly = document.getElementById('freeOnly')?.checked;
  if (freeOnly) {
    filtered = filtered.filter(p => p.price === 0);
  } else {
    const maxPrice = parseInt(document.getElementById('priceRange')?.value || 49);
    filtered = filtered.filter(p => p.price <= maxPrice);
  }

  // Rating radio
  const ratingRadio = document.querySelector('input[name="rating"]:checked');
  if (ratingRadio) {
    const minRating = parseInt(ratingRadio.value);
    if (minRating > 0) {
      filtered = filtered.filter(p => p.rating >= minRating);
    }
  }

  state.filteredProjects = filtered;
  sortProjects(state.sortBy);
}

function searchProjects(query) {
  state.activeSearch = query;
  filterProjects();
}

function selectCategory(category) {
  state.activeCategory = category;
  const title = document.getElementById('listingTitle');
  title.textContent = category ? category : 'Alle Projekte';

  // Uncheck all category checkboxes, then check matching
  document.querySelectorAll('#categoryFilters input[type="checkbox"]').forEach(cb => {
    cb.checked = cb.value === category;
  });

  filterProjects();

  // Close mobile menu if open
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu.classList.contains('open')) {
    toggleMobileMenu();
  }
}

function toggleCategoryFilter(category) {
  const checked = document.querySelectorAll('#categoryFilters input:checked');
  if (checked.length === 0) {
    state.activeCategory = null;
    document.getElementById('listingTitle').textContent = 'Alle Projekte';
  } else if (checked.length === 1) {
    state.activeCategory = checked[0].value;
    document.getElementById('listingTitle').textContent = checked[0].value;
  } else {
    state.activeCategory = null;
    document.getElementById('listingTitle').textContent = 'Gefilterte Projekte';
    // Multi-category filter
    const selectedCats = [...checked].map(c => c.value);
    state.activeCategory = null;
    // Override filter to use multi-cat
    let filtered = [...projects];
    filtered = filtered.filter(p => selectedCats.includes(p.category));
    // Apply other filters on top
    if (state.activeSearch) {
      const q = state.activeSearch.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    state.filteredProjects = filtered;
    sortProjects(state.sortBy);
    return;
  }
  filterProjects();
}

function toggleTagFilter(tag) {
  const idx = state.activeTags.indexOf(tag);
  if (idx > -1) {
    state.activeTags.splice(idx, 1);
  } else {
    state.activeTags.push(tag);
  }
  // Update UI
  document.querySelectorAll('.tag-filter').forEach(btn => {
    btn.classList.toggle('active', state.activeTags.includes(btn.dataset.tag));
  });
  filterProjects();
}

function updatePriceLabel(value) {
  const label = document.getElementById('priceLabel');
  label.textContent = value == 0 ? 'Kostenlos' : `Bis ${value}\u20AC`;
}

function sortProjects(sortBy) {
  state.sortBy = sortBy;
  const sorted = [...state.filteredProjects];

  switch (sortBy) {
    case 'featured':
      sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.downloads - a.downloads);
      break;
    case 'newest':
      sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      break;
    case 'price-low':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case 'downloads':
      sorted.sort((a, b) => b.downloads - a.downloads);
      break;
  }

  state.filteredProjects = sorted;
  renderProjects();
}

function resetFilters() {
  state.activeCategory = null;
  state.activeSearch = '';
  state.activeTags = [];
  state.activeRating = 0;
  state.maxPrice = 49;
  state.freeOnly = false;

  document.getElementById('searchInput').value = '';
  if (document.getElementById('mobileSearchInput')) {
    document.getElementById('mobileSearchInput').value = '';
  }
  document.getElementById('priceRange').value = 49;
  document.getElementById('priceLabel').textContent = 'Bis 49\u20AC';
  document.getElementById('freeOnly').checked = false;
  document.getElementById('listingTitle').textContent = 'Alle Projekte';
  document.getElementById('sortSelect').value = 'featured';

  document.querySelectorAll('#categoryFilters input').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="rating"][value="0"]').forEach(r => r.checked = true);
  document.querySelectorAll('.tag-filter').forEach(btn => btn.classList.remove('active'));

  state.filteredProjects = [...projects];
  sortProjects('featured');
}

// --- Project Detail ---

function showProjectDetail(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  const inCart = state.cart.some(item => item.id === id);
  const modal = document.getElementById('modalContent');

  modal.innerHTML = `
    <div class="modal-hero" style="background: ${getThumbnailGradient(project.category)}">
      <span class="card-icon">${project.icon}</span>
    </div>
    <div class="modal-header">
      <div class="modal-category">${project.category}</div>
      <div class="modal-title-row">
        <h2 class="modal-title">${project.title}</h2>
        <span class="modal-price ${project.price === 0 ? 'free' : 'paid'}">
          ${project.price === 0 ? 'Kostenlos' : project.price + ',00 \u20AC'}
        </span>
      </div>
    </div>

    <div class="modal-stats">
      <div class="modal-stat">
        <span class="stars">${renderStars(project.rating)}</span>
        ${project.rating.toFixed(1)}
      </div>
      <div class="modal-stat">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        ${formatNumber(project.downloads)} Downloads
      </div>
      <div class="modal-stat">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        ${formatDate(project.dateAdded)}
      </div>
    </div>

    <div class="modal-tags">
      ${project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
      <span class="modal-tag">${project.language}</span>
    </div>

    <div class="modal-section">
      <h3>Beschreibung</h3>
      <p>${project.longDescription}</p>
    </div>

    <div class="modal-section">
      <h3>README</h3>
      <div class="modal-readme">
        ${renderReadme(project.readme)}
      </div>
    </div>

    <div class="modal-section">
      <h3>Screenshots</h3>
      <div class="modal-screenshots">
        <div class="screenshot-placeholder">Screenshot 1</div>
        <div class="screenshot-placeholder">Screenshot 2</div>
        <div class="screenshot-placeholder">Screenshot 3</div>
      </div>
    </div>

    <div class="modal-section">
      <h3>Entwickler</h3>
      <div class="modal-author">
        <div class="author-avatar">${project.author.split(' ').map(n => n[0]).join('')}</div>
        <div class="author-info">
          <div class="author-name">${project.author}</div>
          <div class="author-role">${project.authorRole}</div>
        </div>
      </div>
    </div>

    <div class="modal-actions">
      <button class="btn-primary" onclick="${inCart ? `removeFromCart(${project.id})` : `addToCart(${project.id})`}; showProjectDetail(${project.id});">
        ${inCart ? '\u2713 Im Warenkorb' : (project.price === 0 ? 'Kostenlos herunterladen' : 'In den Warenkorb')}
      </button>
      <button class="btn-ghost" onclick="closeModalDirect()">Schließen</button>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderReadme(readme) {
  if (!readme) return '<p>Keine README verfügbar.</p>';
  return readme
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/^# (.+)$/gm, '<h3>$1</h3>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function closeModal(event) {
  if (event.target === document.getElementById('modalOverlay')) {
    closeModalDirect();
  }
}

function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// --- Cart ---

function addToCart(id) {
  const project = projects.find(p => p.id === id);
  if (!project || state.cart.some(item => item.id === id)) return;

  state.cart.push(project);
  updateCartUI();
  showToast(`"${project.title}" zum Warenkorb hinzugefügt`, 'success');
}

function removeFromCart(id) {
  const project = state.cart.find(item => item.id === id);
  state.cart = state.cart.filter(item => item.id !== id);
  updateCartUI();
  if (project) {
    showToast(`"${project.title}" aus dem Warenkorb entfernt`, 'success');
  }
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const mobileCount = document.getElementById('mobileCartCount');
  const count = state.cart.length;

  badge.textContent = count;
  badge.classList.toggle('visible', count > 0);
  if (mobileCount) mobileCount.textContent = count;

  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const footer = document.getElementById('cartFooter');

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <p>Dein Warenkorb ist leer</p>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';
  container.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-icon">${item.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-category">${item.category}</div>
      </div>
      <div class="cart-item-right">
        <span class="cart-item-price ${item.price === 0 ? 'free' : ''}">${item.price === 0 ? 'Kostenlos' : item.price + ',00 \u20AC'}</span>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Entfernen</button>
      </div>
    </div>
  `).join('');

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);
  totalEl.textContent = total === 0 ? 'Kostenlos' : total.toFixed(2).replace('.', ',') + ' \u20AC';
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');

  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function checkout() {
  if (state.cart.length === 0) return;
  showToast(`Bestellung erfolgreich! ${state.cart.length} Projekt(e) werden heruntergeladen.`, 'success');
  state.cart = [];
  updateCartUI();
  toggleCart();
}

// --- Toast Notifications ---

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icon = type === 'success'
    ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#22c55e" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>'
    : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>';

  toast.innerHTML = icon + `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

// --- UI Helpers ---

function toggleFilterSection(titleEl) {
  titleEl.classList.toggle('collapsed');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('mobileMenuBtn');
  menu.classList.toggle('open');
  btn.classList.toggle('active');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

function scrollToProjects() {
  document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth' });
}

function goHome() {
  resetFilters();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Event Listeners ---

function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('searchInput');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  let searchTimeout;

  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => searchProjects(e.target.value), 200);
  });

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchInput.value = e.target.value;
        searchProjects(e.target.value);
      }, 200);
    });
  }

  // Keyboard shortcut for search
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape') {
      closeModalDirect();
      if (document.getElementById('cartSidebar').classList.contains('open')) {
        toggleCart();
      }
    }
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
  });

  // Card keyboard activation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('project-card')) {
      e.target.click();
    }
  });
}
