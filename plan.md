# Alex Wang — Personal Portfolio Website

## Project Brief

Build a multi-page personal portfolio website for Yiduo (Alex) Wang. The site serves as an interactive resume showcasing a cross-disciplinary background in Economics, Computer Science, and Business Analytics/Technology Management. It should include a future-ready architecture for a RAG-powered chatbot.

A working JSX prototype (`portfolio-draft.jsx`) is included in this repo as the visual/structural reference. Use it as the source of truth for layout, component hierarchy, and content — but rebuild everything properly in Next.js with production-grade code.

---

## Owner Info

- **Name:** Yiduo (Alex) Wang
- **Location:** Dallas, TX
- **Email:** alexw54181140@outlook.com
- **LinkedIn:** https://www.linkedin.com/in/yiduo-wang-b9b80b259
- **GitHub:** https://github.com/Alex5418
- **Tagline:** "Economist × Technologist × Data Storyteller"

---

## Tech Stack

| Layer       | Choice                        | Reason                                              |
| ----------- | ----------------------------- | --------------------------------------------------- |
| Framework   | **Next.js 14+ (App Router)**  | SSG/ISR, API routes, file-based routing              |
| Styling     | **Tailwind CSS**              | Utility-first, responsive, dark mode built-in        |
| Animation   | **Framer Motion**             | Page transitions, staggered reveals, hover effects   |
| Font        | **Sora** (display) + **JetBrains Mono** (code/tags) | Distinctive, not generic AI-slop |
| Data        | **JSON files** + **GitHub API at build time** | Hybrid: manual courses + auto-pull repos  |
| Deployment  | **Vercel**                    | Free tier, preview deploys, deploy hooks             |
| Future: LLM | **Anthropic Claude Sonnet API** | For the RAG chatbot (Phase 2)                     |
| Future: VectorDB | **Supabase pgvector**    | Knowledge base for chatbot (Phase 2)                |

---

## Design Direction

- **Theme:** Dark-first (with optional light mode toggle later)
- **Aesthetic:** Refined minimal — generous negative space, sharp accent color, editorial feel. NOT generic AI purple-gradient.
- **Color palette:**
  - Background: `#0a0a12`
  - Surface/Cards: `#0f0f1c`
  - Border: `#1a1a2a`
  - Primary accent: `#e94560` (crimson)
  - Secondary accent: `#0f3460` (royal blue)
  - Text: `#e8e8e8` (primary), `#888` (secondary), `#555` (muted)
  - Category colors: CS `#e94560`, BA `#9575cd`, Econ `#5a8abf`, Math `#6b8f71`
- **Typography:** Sora for all headings and body, JetBrains Mono for tags/badges/code/dates
- **Motion:** Staggered fade-up on page load, subtle hover lifts on cards, smooth page transitions via Framer Motion

---

## Sitemap & Pages

```
/                   → Home (landing)
/about              → About Me + Timeline + Work Experience
/education          → Education cards + filterable course list
/projects           → Two-tier project showcase (Featured + Archive)
/skills             → Skill categories + GitHub stats
/contact            → Links + Resume download + Chatbot placeholder
```

Persistent top navbar on all pages. Sticky, blurred background. Mobile: hamburger menu.

---

## Page Specifications

### 1. Home (`/`)

- Hero section, vertically centered
- Name (large, light weight), tagline, keyword pills
- Three CTA buttons: "View Projects" (primary/filled), "About Me", "Get In Touch"
- Subtle decorative gradient orb in background
- Staggered fade-up entrance animation

### 2. About (`/about`)

- **Bio section:** 1-2 paragraph personal summary in a card
- **Timeline:** Vertical timeline with dots, alternating education (blue) and work (crimson) markers
  - 2020: Started at UIUC (B.S. Economics, CS Minor)
  - 2024: Graduated UIUC
  - 2024: Started MS Technology Management, Gies College of Business
  - 2025: Balfour & Co — Data Analyst Intern (ERP Digitalization)
  - 2025: EarthX — Operations & E-commerce Specialist
- **Experience cards:** Each job with company, title, period, location, bullet points
  - EarthX (Nov 2025 – Present, Dallas TX): Flask check-in app, Shopify e-commerce, SOPs, market research
  - Balfour & Co (May 2025 – Aug 2025, Remote): Baan ERP digitalization, Power BI/Tableau/KNIME dashboards

### 3. Education (`/education`)

- **School cards:** Degree, school name, period, concentration
  - M.S. Technology Management, Gies College of Business, UIUC (Aug 2024 – Dec 2025), concentration: BA and IT
  - B.S. Economics + CS Minor, UIUC (Aug 2020 – May 2024)
- **Course list:** Filterable by category (All / CS / BA / Econ / Math)
  - Each row: category badge, course name, tool tags, optional 🔗 "View Project" link
  - Courses with `relatedProjectId` link to the corresponding project on `/projects`
- Master's courses: Enterprise Database Management (ba, SQL/MongoDB), Consumer Analytics (ba, Python/KNIME), Data Storytelling (ba, Tableau/Power BI)
- Undergrad courses: Data Structures CS225 (cs, C++, links to airport project), Applied ML in Economics (cs, Python/ML), plus filler Econ/Math courses

### 4. Projects (`/projects`)

**Two-tier layout with visual hierarchy:**

#### Featured Section (⭐)
Large cards, 2-column grid. Each card: title, status badge, description, tech tags, source course link.

| Project | Tags | Status | Type | Source |
|---------|------|--------|------|--------|
| Restaurant Review Analytics & Strategy | MongoDB, KNIME, Tableau | Completed | Course | Enterprise DB Management |
| COVID-19 Socio-Economic Impact Analysis | Python, ML, Pandas | Completed | Course | Applied ML in Economics |
| Employee Check-in Web Application | Python, Flask, Web Dev | Completed | Work | EarthX |
| RAG Portfolio Chatbot | Python, Claude API, RAG, Vector DB | Coming Soon | Side | — |

#### Coursework Archive (📚)
Compact cards, 3-column grid. Smaller, less visual weight.

| Project | Tags | GitHub | Source |
|---------|------|--------|--------|
| Airport Shortest Routes Finder | C++, Graph Algorithms, BFS/Dijkstra | [Final-project](https://github.com/Alex5418/Final-project) | CS225 |
| Game Level Design — Infinite Matrix | C++, Game Dev | [LevelDesignMP2LFS](https://github.com/Alex5418/LevelDesignMP2LFS) | CS Course MP |

**Features:**
- Tag filter bar across both tiers (All / Python / SQL / C++ / Tableau / etc.)
- Status badges: Completed (green), In Progress (crimson), Coming Soon (purple)
- "From: [Course Name]" links back to `/education`
- GitHub links open in new tab

### 5. Skills (`/skills`)

- **4 category cards** in a responsive grid:
  - Programming: Python (Flask, Pandas), SQL (MySQL, PostgreSQL, MongoDB), R, C++, Java
  - Analytics & Visualization: Tableau, Power BI, KNIME, Excel
  - Developer Tools: Git/GitHub, VS Code, Google Cloud, PythonAnywhere
  - Domain Knowledge: Business Analytics, Economics, E-commerce (Shopify), ERP Systems
- **GitHub Activity section:** Placeholder card linking to GitHub profile. In the future, embed `github-readme-stats` SVG or custom contribution visualization.

### 6. Contact (`/contact`)

- **4 contact cards:** Email (mailto link), LinkedIn (external), GitHub (external), Location (static)
- **Resume download:** Placeholder card with download button (PDF to be uploaded later)
- **Chatbot placeholder:** Gradient-bordered card, "Coming Soon" badge, description of the planned RAG assistant

---

## Data Architecture

### Hybrid: JSON files + GitHub API at build time

```
/data
├── courses.json            # Manual — all courses
├── manual-projects.json    # Manual — non-GitHub projects (Tableau, PDF, etc.)
├── github-config.json      # Controls GitHub auto-pull behavior
├── skills.json             # Manual — skill categories and items
├── timeline.json           # Manual — timeline events
└── personal.json           # Manual — name, bio, links, etc.
```

### github-config.json

```json
{
  "username": "Alex5418",
  "featured": [],
  "hidden": ["Alex5418"],
  "overrides": {
    "Final-project": {
      "title": "Airport Shortest Routes Finder",
      "tier": "archive",
      "tags": ["C++", "Graph Algorithms", "BFS/Dijkstra"],
      "from": "Data Structures (CS225)"
    },
    "LevelDesignMP2LFS": {
      "title": "Game Level Design — Infinite Matrix",
      "tier": "archive",
      "tags": ["C++", "Game Dev"],
      "from": "CS Course MP"
    }
  }
}
```

### Build-time data fetching (`getStaticProps` or `generateStaticParams`)

1. Fetch repos from `https://api.github.com/users/Alex5418/repos`
2. Filter out repos listed in `hidden`
3. Apply `overrides` (custom title, description, tier, tags)
4. Merge with `manual-projects.json` entries
5. Sort: featured first, then archive
6. Pass unified project list as props

### Revalidation

- Vercel deploy hook triggered on GitHub push (or ISR with `revalidate: 3600`)
- Courses, skills, timeline are static JSON — only change on manual edit + redeploy

---

## Embed Strategy

| Content Type | Embed Method | Auto-Sync | Implementation |
|---|---|---|---|
| GitHub repos | Build-time API pull → static pages | ✅ On deploy | `getStaticProps` + GitHub REST API |
| GitHub README | Render as project detail page | ✅ On deploy | `react-markdown` or `next-mdx-remote` |
| Tableau dashboards | `<iframe>` lazy-loaded on visit | ✅ Live | Responsive container + IntersectionObserver |
| Power BI dashboards | `<iframe>` publish-to-web URL | ✅ Live | Same as Tableau |
| PDF reports/slides | Thumbnail + download link (simplest) | ❌ Manual upload | Host in `/public/files/`, Google Docs Viewer as alt |
| GitHub stats | SVG image from github-readme-stats | ✅ Live | `<img>` tag with stats URL |
| LinkedIn | Icon link to profile | ✅ | Simple `<a>` tag |

---

## Chatbot Architecture (Phase 2 — build after main site is live)

### Overview
RAG-powered assistant embedded as a chat widget on the site. Answers questions about Alex's background, projects, skills using retrieval-augmented generation.

### Stack
- **LLM:** Claude Sonnet via Anthropic API
- **Vector DB:** Supabase pgvector
- **Backend:** Next.js API Route (`/api/chat`)
- **Frontend:** Floating chat widget (bottom-right corner), streaming responses

### RAG Pipeline
1. User sends message → API endpoint
2. Query processing (intent detection, rewrite)
3. Embed query → search Supabase pgvector for top-k relevant chunks
4. Assemble context: system prompt + retrieved chunks + conversation history
5. Stream response from Claude API back to frontend

### System Prompt (draft)
```
You are Alex Wang's portfolio assistant. You represent Alex professionally and answer questions about his background, education, projects, and skills.

RULES:
- Only answer based on the provided context
- If unsure, say "I don't have that info, but you can reach Alex at alexw54181140@outlook.com"
- Be conversational but professional
- Support both English and Chinese
- You can discuss general tech concepts briefly, but always tie back to Alex's experience when relevant

CONTEXT:
{retrieved_chunks}

CONVERSATION HISTORY:
{chat_history}
```

### Knowledge Base Ingestion
- Parse all JSON data files (courses, projects, skills, timeline, personal info) into text chunks
- Embed chunks using OpenAI embedding model or similar
- Upsert into Supabase pgvector with metadata tags (type: course/project/skill/etc.)
- Re-run ingestion script when data files change

### Cost Estimate
- LLM API: ~$0.01-0.05 per conversation (Sonnet pricing)
- Vector DB: Supabase free tier
- Hosting: Vercel free tier
- Total for personal site traffic: < $5/month

### Implementation Phases
1. **MVP (1-2 days):** Basic API endpoint + RAG + simple chat UI, no streaming
2. **Polish (1-2 days):** Streaming, suggested questions, session history, rate limiting
3. **Advanced (ongoing):** Page-context-aware suggestions, source citations with links, analytics on common questions, bilingual auto-detection

---

## Project Structure (suggested)

```
/
├── app/
│   ├── layout.tsx              # Root layout with navbar + footer
│   ├── page.tsx                # Home
│   ├── about/page.tsx
│   ├── education/page.tsx
│   ├── projects/page.tsx
│   ├── skills/page.tsx
│   ├── contact/page.tsx
│   └── api/
│       └── chat/route.ts       # Phase 2: chatbot endpoint
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Tag.tsx
│   ├── Section.tsx
│   ├── Timeline.tsx
│   ├── CourseFilter.tsx
│   ├── ProjectCard.tsx
│   ├── SkillCard.tsx
│   └── ChatWidget.tsx          # Phase 2
├── data/
│   ├── personal.json
│   ├── courses.json
│   ├── manual-projects.json
│   ├── github-config.json
│   ├── skills.json
│   └── timeline.json
├── lib/
│   ├── github.ts               # GitHub API fetch + merge logic
│   ├── projects.ts              # Unified project data builder
│   └── rag.ts                   # Phase 2: RAG pipeline
├── public/
│   └── files/                   # PDFs, images, etc.
├── portfolio-draft.jsx          # Reference prototype — DO NOT deploy, for visual reference only
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Design Tokens for Tailwind Config

```js
// tailwind.config.ts extend
colors: {
  bg: '#0a0a12',
  surface: '#0f0f1c',
  border: '#1a1a2a',
  'border-hover': '#2a2a4a',
  accent: '#e94560',
  'accent-blue': '#0f3460',
  'accent-purple': '#9575cd',
  'accent-green': '#6b8f71',
  'accent-orange': '#c4652e',
  'text-primary': '#e8e8e8',
  'text-secondary': '#888888',
  'text-muted': '#555555',
},
fontFamily: {
  sans: ['Sora', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
},
```

---

## Implementation Priority

1. **Scaffold:** `npx create-next-app`, install Tailwind + Framer Motion, set up layout with navbar/footer
2. **Static pages:** Home → About → Education → Skills → Contact (all from JSON data)
3. **Projects page:** Manual data first, then add GitHub API integration
4. **Polish:** Animations, responsive design, dark mode, meta tags / SEO
5. **Deploy:** Push to Vercel, set up custom domain if available
6. **Phase 2:** Chatbot — API route, Supabase setup, ingestion script, chat widget

---

## Reference Files

- `portfolio-draft.jsx` — Working React prototype with all real content. Use as visual reference for layout, spacing, component structure, and content. All personal data (education, experience, projects, skills) is already populated in this file.
