# Architecture Overview

## High-Level Architecture

CodeVault is a client-side single-page application (SPA) built with vanilla HTML, CSS, and JavaScript. There is no backend, build step, or framework dependency.

```
┌─────────────────────────────────────────────────┐
│                   Browser                        │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌───────────────┐  │
│  │ index.   │  │ styles.  │  │    app.js      │  │
│  │ html     │──│ css      │  │               │  │
│  │          │  │          │  │ - State Mgmt  │  │
│  │ Semantic │  │ Dark     │  │ - Rendering   │  │
│  │ HTML5    │  │ Theme    │  │ - Filtering   │  │
│  │ Structure│  │ System   │  │ - Search      │  │
│  │          │  │          │  │ - Cart Logic  │  │
│  └──────────┘  └──────────┘  └───────────────┘  │
│                                                  │
└─────────────────────────────────────────────────┘
```

## Application State

All application state is managed through a single `state` object in `app.js`:

```javascript
state = {
  projects: [],        // All project data
  filteredProjects: [], // Currently displayed projects
  cart: [],            // Shopping cart items
  filters: {           // Active filter settings
    category: null,
    search: '',
    tags: [],
    minRating: 0,
    maxPrice: Infinity
  },
  sort: 'featured'     // Current sort method
}
```

## Data Flow

```
User Interaction
      │
      ▼
Event Handlers (click, input, keydown)
      │
      ▼
State Update (filters, cart, sort)
      │
      ▼
filterProjects() ─── applies all active filters
      │
      ▼
renderProjects() ─── updates DOM with filtered results
```

## File Responsibilities

| File | Responsibility |
|------|---------------|
| `index.html` | Document structure, semantic markup, modals, navigation |
| `src/css/styles.css` | Design system, theming (CSS custom properties), responsive layout, animations |
| `src/js/app.js` | Project data, state management, DOM manipulation, event handling |

## CSS Architecture

The stylesheet uses CSS custom properties for a consistent design system:

- **Colors**: Defined in `:root` with dark theme palette
- **Layout**: CSS Grid for project cards, Flexbox for components
- **Responsive**: Breakpoints at 1024px, 768px, 480px
- **Effects**: Backdrop filters, gradients, transitions

## Future Architecture Considerations

When evolving this project, consider:

1. **Backend**: REST API or GraphQL for real data persistence
2. **Auth**: OAuth 2.0 / JWT for user authentication
3. **Database**: PostgreSQL or MongoDB for project storage
4. **Payments**: Stripe integration for transactions
5. **CDN**: Asset delivery via Vercel Edge Network
