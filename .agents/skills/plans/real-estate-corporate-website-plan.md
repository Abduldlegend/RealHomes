# Real Estate Corporate Website - Implementation Plan

**Project:** Real Homes - World-Class Corporate Real Estate Website  
**Date:** July 14, 2026  
**Status:** Planning Phase - Ready for Implementation

---

## 1. Understanding

Build a **world-class corporate website** for a real estate and property development company (NOT a marketplace). The site must establish credibility, communicate expertise, showcase impact, and generate business inquiries from investors, clients, government agencies, and partners.

**Benchmark brands:** Emaar, DAMAC, Julius Berger, Cappa & D'Alberto, RCC Nigeria, Turner Construction, Brookfield Properties, Hines, JLL, CBRE

**Brand attributes to communicate:** Trust, Excellence, Innovation, Quality, Stability, Professionalism, Growth

---

## 2. Plan Overview

### Affected Pages (8 Core Pages)

| Page | Purpose | Key Sections |
|------|---------|--------------|
| **Home** | Hero, value prop, featured projects, stats, leadership preview, CTA | Hero, Value Props, Featured Projects, Key Stats, Leadership Preview, CTA |
| **About** | Company story, mission/vision/values, leadership, milestones | Hero, Story, Mission/Vision/Values, Leadership, Timeline/Milestones |
| **Projects** | Portfolio showcase (residential, commercial, infrastructure, mixed-use) | Hero, Filterable Grid, Project Detail Modal/Page, Case Studies |
| **Services** | Service offerings with depth | Hero, Service Cards (4-6), Process, CTA |
| **Investors** | Investor relations, financials, ESG, governance | Hero, Financial Highlights, Reports, ESG, Governance, Calendar, Contact IR |
| **Insights** | Thought leadership, news, reports | Hero, Featured Article, Category Filter, Pagination, Newsletter |
| **Careers** | Employer brand, job listings, culture | Hero, Culture/Values, Benefits, Open Positions, Application Form |
| **Contact** | Multi-location contact, inquiry form, map | Hero, Contact Form, Office Locations with Map, FAQ |

---

### Component Architecture

```
src/
├── components/
│   ├── ui/                    # shadcn/ui primitives (Button, Card, Dialog, etc.)
│   ├── layout/                # Header, Footer, Navigation, Sidebar
│   ├── home/                  # Hero, ValueProps, FeaturedProjects, Stats, LeadershipPreview
│   ├── about/                 # Story, MissionVisionValues, Leadership, Timeline
│   ├── projects/              # ProjectGrid, ProjectCard, ProjectModal, ProjectFilters, CaseStudy
│   ├── services/              # ServiceCard, ServiceProcess
│   ├── investors/             # FinancialHighlights, ReportsTable, ESGCard, GovernanceCard
│   ├── insights/              # ArticleCard, ArticleGrid, CategoryFilter, NewsletterForm
│   ├── careers/               # JobCard, JobFilters, ApplicationForm, BenefitsGrid
│   ├── contact/               # ContactForm, OfficeCard, MapWrapper, FAQ
│   ├── shared/                # SEO, JsonLd, Image, Counter, Animations
│   └── forms/                 # FormField, FormError, SubmitButton
├── pages/                     # Page components (Home, About, Projects, etc.)
├── hooks/                     # useScrollAnimation, useCounter, useIntersectionObserver
├── lib/                       # animations.js, utils.js, constants.js, validations.js
├── styles/                    # globals.css (Tailwind v4 theme)
├── routes/                    # Router configuration
└── providers/                 # ThemeProvider, Toaster, QueryProvider
```

---

### Required Dependencies

**Production:**
- `react-router-dom@7` - Client-side routing
- `framer-motion@11` - Animations
- `lucide-react@0.4` - Icons
- `react-hook-form@7` - Forms
- `@hookform/resolvers@3` - Zod resolver
- `zod@3` - Validation
- `sonner@1` - Toasts
- `next-themes@0.3` - Dark mode
- `clsx` + `tailwind-merge` - Class utilities
- `@radix-ui/*` - shadcn/ui primitives

**Dev:**
- `tailwindcss@4` via `@tailwindcss/vite`
- `vitest`, `@testing-library/react`, `jsdom`
- `playwright` (E2E)
- `oxlint` (already present)

---

### Tailwind v4 Design System (from DESIGN.md)

```css
/* src/styles/globals.css */
@import "tailwindcss";

@theme {
  /* Light Theme Colors */
  --color-background: #FFFFFF;
  --color-secondary-background: #FAFAFA;
  --color-card: #FFFFFF;
  --color-muted-surface: #F5F5F5;
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-accent: #0EA5E9;
  --color-success: #16A34A;
  --color-warning: #F59E0B;
  --color-danger: #DC2626;
  --color-border: #E5E7EB;
  --color-heading: #111827;
  --color-body: #4B5563;
  --color-muted: #9CA3AF;

  /* Dark Theme Colors (in .dark block) */
  /* ... */

  /* Typography */
  --font-display: "Geist", "Inter", sans-serif;
  --font-body: "Geist", "Inter", sans-serif;

  /* Spacing - 8pt Grid */
  --space-4: 4px; --space-8: 8px; --space-12: 12px; --space-16: 16px;
  --space-20: 20px; --space-24: 24px; --space-32: 32px; --space-40: 40px;
  --space-48: 48px; --space-64: 64px; --space-80: 80px; --space-96: 96px;
  --space-120: 120px; --space-160: 160px;

  /* Border Radius */
  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 16px; --radius-xl: 24px;
  --radius-pill: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 5%);
  --shadow-md: 0 8px 24px rgb(0 0 0 / 8%);
  --shadow-lg: 0 16px 40px rgb(0 0 0 / 12%);

  /* Animations */
  --animate-fade-in: fade-in 200ms ease-out;
  --animate-slide-up: slide-up 300ms ease-out;
  --animate-counter: counter 1500ms ease-out;

  @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slide-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes counter { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
}

@custom-variant dark (&:where(.dark, .dark *));

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-body antialiased; }
  html { scroll-behavior: smooth; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

### Accessibility Checklist (WCAG AA)

- [ ] Semantic HTML5 (header, nav, main, section, article, aside, footer)
- [ ] Heading hierarchy (h1→h2→h3, no skips)
- [ ] Focus visible: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`
- [ ] Skip to main content link
- [ ] ARIA labels on icon-only buttons
- [ ] Color contrast ≥ 4.5:1 (both themes)
- [ ] `prefers-reduced-motion` respected
- [ ] Keyboard navigation for all interactive elements
- [ ] Form labels + error messages + helper text
- [ ] Alt text for all meaningful images
- [ ] Touch targets ≥ 44×44px
- [ ] Landmarks and ARIA roles where needed

---

### SEO Implementation

| Element | Implementation |
|---------|----------------|
| Meta tags | Per-page SEO component |
| Open Graph | `og:title`, `og:description`, `og:image`, `og:type`, `og:url` |
| Twitter Cards | `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` |
| JSON-LD | `Organization`, `WebSite`, `ItemList`, `RealEstateProject`, `Article`, `JobPosting`, `LocalBusiness` |
| Canonical | Absolute URL per page |
| Sitemap | Generated at build (`vite-plugin-sitemap` or custom) |
| Robots.txt | Allow all, reference sitemap |

---

### Performance Optimizations

1. **Images**: WebP/AVIF, responsive `srcset`, lazy load below fold, explicit width/height
2. **Fonts**: Preload Geist variable font, `font-display: swap`
3. **Code Splitting**: `React.lazy()` + `Suspense` for all pages except Home
4. **Bundle**: Dynamic imports for heavy components (Google Maps, Charts)
5. **Critical CSS**: Inline above-the-fold styles
6. **Third-party**: Load Google Maps API only when Contact page mounts

---

### Animation System (Framer Motion)

```javascript
// lib/animations.js
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" }
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.05 } }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" }
};

export const counter = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.5, ease: "easeOut" }
};

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.2, ease: "easeInOut" }
};
```

---

## 3. Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Tailwind v4 design system in `src/styles/globals.css`
- [ ] shadcn/ui component library setup (Button, Card, Dialog, Input, Label, etc.)
- [ ] Layout shell: Header (sticky, blur, border), Footer, Navigation
- [ ] React Router v7 configuration with lazy-loaded routes
- [ ] Providers: ThemeProvider (next-themes), Toaster (sonner), QueryClient
- [ ] ESLint + Oxlint + Prettier configuration

### Phase 2: Home Page (Week 1-2)
- [ ] Hero section with animated headline, CTA, background imagery
- [ ] Value Propositions (3-4 cards with icons)
- [ ] Featured Projects carousel/grid (3 projects)
- [ ] Key Stats counter animation (4 metrics)
- [ ] Leadership Preview (3 executives)
- [ ] CTA section with newsletter signup
- [ ] Full mobile responsiveness
- [ ] SEO metadata + JSON-LD (Organization, WebSite)

### Phase 3: About Page (Week 2)
- [ ] Hero with mission statement
- [ ] Company Story section
- [ ] Mission / Vision / Values (3 cards)
- [ ] Leadership Team grid (6-8 executives)
- [ ] Milestones Timeline (horizontal scroll on mobile)
- [ ] SEO metadata + JSON-LD (Organization, AboutPage)

### Phase 4: Projects Page (Week 2-3)
- [ ] Hero with project category filter
- [ ] Filterable Project Grid (residential, commercial, infrastructure, mixed-use)
- [ ] Project Card with image, type badge, location, status
- [ ] Project Detail Modal (gallery, specs, description, key facts)
- [ ] Case Studies section (2-3 deep dives)
- [ ] SEO metadata + JSON-LD (ItemList, RealEstateProject)

### Phase 5: Services Page (Week 3)
- [ ] Hero with service overview
- [ ] Service Cards (6 services: Development, Construction, PM, Investment, Asset Mgmt, Advisory)
- [ ] Service Process timeline (4-5 steps)
- [ ] CTA for inquiries
- [ ] SEO metadata + JSON-LD (Service)

### Phase 6: Investors Page (Week 3-4)
- [ ] Hero with investor value prop
- [ ] Financial Highlights (4 KPI cards with trends)
- [ ] Reports Table (Annual, Quarterly, Sustainability)
- [ ] ESG Section (Environmental, Social, Governance cards)
- [ ] Governance Board grid
- [ ] Financial Calendar (upcoming events)
- [ ] Contact IR form
- [ ] SEO metadata + JSON-LD (Organization, FinancialProduct)

### Phase 7: Insights Page (Week 4)
- [ ] Hero with featured article
- [ ] Category Filter (Market Trends, Sustainability, Leadership, Projects)
- [ ] Article Grid with pagination/load more
- [ ] Article Card (image, category, date, read time, author)
- [ ] Newsletter signup
- [ ] SEO metadata + JSON-LD (Blog, Article, ItemList)

### Phase 8: Careers Page (Week 4)
- [ ] Hero with employer brand statement
- [ ] Culture & Values (4-5 cards)
- [ ] Benefits Grid (8-10 benefits with icons)
- [ ] Job Listings with filters (Department, Location, Type)
- [ ] Job Application Form (multi-step, file upload for resume)
- [ ] SEO metadata + JSON-LD (JobPosting, ItemList)

### Phase 9: Contact Page (Week 4-5)
- [ ] Hero with contact CTA
- [ ] Contact Form (React Hook Form + Zod, reCAPTCHA/honeypot)
- [ ] Office Locations cards with Google Map (lazy loaded)
- [ ] FAQ Accordion (8-10 questions)
- [ ] SEO metadata + JSON-LD (LocalBusiness, ContactPage)

### Phase 10: Polish & Production (Week 5)
- [ ] Dark mode complete + tested
- [ ] Accessibility audit (axe-core, keyboard, screen reader)
- [ ] Lighthouse ≥ 95 all categories
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Responsive testing (375px, 768px, 1024px, 1440px, 1920px, landscape)
- [ ] SEO validation (Google Rich Results Test, Schema Validator)
- [ ] Sitemap.xml + robots.txt generation
- [ ] 404 page, loading states, error boundaries
- [ ] Performance budget check (JS < 170KB gzipped, CSS < 50KB)
- [ ] Documentation: README, component library storybook (optional)

---

## 4. Key Implementation Decisions

### Why React Router v7 (not Next.js)?
- Pure SPA requirement (no SSR/SSG needed for corporate site)
- Simpler deployment (static files to any CDN)
- Team familiarity with Vite + React Router
- Framer Motion page transitions work seamlessly

### Why Tailwind v4 (CSS-first)?
- DESIGN.md tokens map directly to `@theme`
- Native dark mode with `@custom-variant`
- Smaller bundle, faster builds
- Future-proof (v3 maintenance mode)

### Why shadcn/ui over custom components?
- Accessible, tested primitives (Radix UI)
- Customizable to DESIGN.md specs
- Reduces reinventing wheels
- Team can extend without maintaining core lib

### Animation Philosophy
- Subtle, purposeful, < 300ms
- Stagger on scroll reveal (IntersectionObserver)
- Counter animation for stats
- Page transitions via Framer Motion AnimatePresence
- Respect `prefers-reduced-motion` always

---

## 5. Definition of Done (Per AGENTS.md)

A task is complete ONLY when:

- [ ] Functionality works as specified
- [ ] UI is polished (matches DESIGN.md)
- [ ] Mobile experience is excellent
- [ ] Accessibility verified (WCAG AA)
- [ ] Performance acceptable (Lighthouse ≥ 95)
- [ ] Code is reusable and well-structured
- [ ] No lint errors (oxlint)
- [ ] No obvious improvements left unaddressed

**Never stop at "it works." Aim for "production-ready."**

---

## 6. File Structure Summary

```
real-homes/
├── .agents/skills/plans/real-estate-corporate-website-plan.md  ← THIS FILE
├── public/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui primitives
│   │   ├── layout/          # Header, Footer, Nav
│   │   ├── home/            # Home-specific sections
│   │   ├── about/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── investors/
│   │   ├── insights/
│   │   ├── careers/
│   │   ├── contact/
│   │   ├── shared/          # SEO, JsonLd, Image, Counter
│   │   └── forms/
│   ├── pages/               # Page components
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # animations, utils, constants, validations
│   ├── styles/              # globals.css (Tailwind v4 theme)
│   ├── routes/              # Router config
│   ├── providers/           # Theme, Toaster, Query
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js (minimal - v4 uses CSS)
├── AGENTS.md
├── DESIGN.md
└── README.md
```

---

## 7. Next Steps

**Ready to begin Phase 1: Foundation** when approved.

1. Install dependencies
2. Configure Tailwind v4 with DESIGN.md tokens
3. Set up shadcn/ui component library
4. Build layout shell (Header, Footer, Navigation)
5. Configure React Router with lazy routes
6. Add providers (Theme, Toaster)
7. Verify Linting passes

**Estimated timeline:** 5 weeks to production-ready deliverable.