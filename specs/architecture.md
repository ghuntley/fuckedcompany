# Architecture

## Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | SvelteKit | Modern SSG with file-based routing |
| Language | TypeScript | Type safety for content model |
| Styling | Plain CSS + custom properties | No Tailwind (era-inappropriate). No preprocessor. |
| Content | Markdown + YAML frontmatter | Files are the database |
| Markdown parsing | `gray-matter` | Frontmatter extraction |
| Markdown rendering | `marked` | Markdown → HTML |
| Adapter | `@sveltejs/adapter-static` | Fully prerendered static site |
| Feeds | Template literal XML | RSS 2.0 + Sitemap, no dependencies |

## Project Structure

```
/workspace/
├── specs/                              # Design system specifications
│   ├── overview.md
│   ├── design-tokens.md
│   ├── atoms.md
│   ├── molecules.md
│   ├── organisms.md
│   ├── pages.md
│   └── architecture.md
│
├── src/
│   ├── app.html                        # Root HTML template
│   │
│   ├── lib/
│   │   ├── styles/
│   │   │   ├── tokens.css              # CSS custom properties
│   │   │   ├── reset.css               # Minimal CSS reset
│   │   │   ├── global.css              # Body, links, tables, starfield
│   │   │   └── animations.css          # @keyframes: blink, glow, rainbow
│   │   │
│   │   ├── components/
│   │   │   ├── atoms/
│   │   │   │   ├── NeonLink.svelte
│   │   │   │   ├── GeoButton.svelte
│   │   │   │   ├── TextInput.svelte
│   │   │   │   ├── StatusBadge.svelte
│   │   │   │   ├── PointsDisplay.svelte
│   │   │   │   ├── RainbowHR.svelte
│   │   │   │   ├── Counter.svelte
│   │   │   │   ├── Badge88x31.svelte
│   │   │   │   ├── BlinkText.svelte
│   │   │   │   ├── MarqueeText.svelte
│   │   │   │   ├── GeoHeading.svelte
│   │   │   │   ├── UnderConstructionBanner.svelte
│   │   │   │   ├── Logo.svelte
│   │   │   │   └── SkullIcon.svelte
│   │   │   │
│   │   │   ├── molecules/
│   │   │   │   ├── RoleCard.svelte
│   │   │   │   ├── RumorPost.svelte
│   │   │   │   ├── ForumPost.svelte
│   │   │   │   ├── NavBar.svelte
│   │   │   │   ├── LeaderboardRow.svelte
│   │   │   │   ├── SearchBar.svelte
│   │   │   │   ├── ThreadPreview.svelte
│   │   │   │   ├── WebRing.svelte
│   │   │   │   ├── GuestbookCTA.svelte
│   │   │   │   └── MidiPlayer.svelte
│   │   │   │
│   │   │   └── organisms/
│   │   │       ├── SiteHeader.svelte
│   │   │       ├── SignalFeed.svelte
│   │   │       ├── DeadPoolTable.svelte
│   │   │       ├── LeaderboardTable.svelte
│   │   │       ├── CopeCornerList.svelte
│   │   │       ├── KillListArchive.svelte
│   │   │       ├── Sidebar.svelte
│   │   │       ├── SiteFooter.svelte
│   │   │       └── BodyCountTicker.svelte
│   │   │
│   │   ├── content.ts                  # Markdown loader / "database" layer
│   │   ├── types.ts                    # TypeScript interfaces
│   │   └── data/
│   │       └── leaderboard.ts          # Static leaderboard flavor data
│   │
│   ├── content/                        # Markdown content ("the database")
│   │   ├── signals/                    # AI layoff events (15 files)
│   │   │   ├── amazon-warehouse-2026.md
│   │   │   ├── block-everyone-2026.md
│   │   │   └── ...
│   │   ├── cope/                       # Rant posts (5 files)
│   │   │   ├── senior-dev-now-prompting.md
│   │   │   └── ...
│   │   ├── retraining/                 # Ironic job listings (5 files)
│   │   │   ├── chief-vibes-officer.md
│   │   │   └── ...
│   │   └── pages/
│   │       └── about.md                # About page content
│   │
│   └── routes/
│       ├── +layout.svelte              # Root layout (CSS, header, footer)
│       ├── +layout.ts                  # prerender = true
│       ├── +page.svelte                # Homepage
│       ├── +page.ts                    # Homepage data loader
│       │
│       ├── pool/
│       │   ├── +page.svelte            # Dead Pool table
│       │   ├── +page.ts
│       │   └── [slug]/
│       │       ├── +page.svelte        # Signal detail
│       │       └── +page.ts
│       │
│       ├── killist/
│       │   ├── +page.svelte            # Kill List archive
│       │   └── +page.ts
│       │
│       ├── cope/
│       │   ├── +page.svelte            # Cope Corner list
│       │   ├── +page.ts
│       │   └── [slug]/
│       │       ├── +page.svelte        # Cope post detail
│       │       └── +page.ts
│       │
│       ├── leaderboard/
│       │   ├── +page.svelte            # Hall of Prophets
│       │   └── +page.ts
│       │
│       ├── retraining/
│       │   ├── +page.svelte            # Retraining Board
│       │   └── +page.ts
│       │
│       ├── about/
│       │   ├── +page.svelte            # About page
│       │   └── +page.ts
│       │
│       ├── sitemap.xml/
│       │   └── +server.ts              # Sitemap XML endpoint
│       │
│       ├── rss.xml/
│       │   └── +server.ts              # RSS 2.0 feed endpoint
│       │
│       └── storybook/
│           ├── +layout.svelte          # Storybook layout (sidebar, noindex)
│           ├── +page.svelte            # Storybook overview
│           ├── tokens/
│           │   └── +page.svelte        # Token reference
│           ├── atoms/
│           │   └── +page.svelte        # Atom showcase
│           ├── molecules/
│           │   └── +page.svelte        # Molecule showcase
│           └── organisms/
│               └── +page.svelte        # Organism showcase
│
├── static/
│   └── favicon.ico                     # Skull favicon
│
├── svelte.config.js                    # SvelteKit config (adapter-static)
├── vite.config.ts                      # Vite config
├── tsconfig.json                       # TypeScript config
├── package.json
└── README.md
```

## Content Pipeline

```
src/content/signals/*.md
        │
        ▼
import.meta.glob('?raw', { eager: true })
        │
        ▼
gray-matter(rawString)  →  { data: frontmatter, content: markdownBody }
        │
        ▼
marked(markdownBody)    →  renderedHTML
        │
        ▼
src/lib/content.ts exports typed getters:
  getSignals(): Signal[]
  getSignalBySlug(slug): Signal | undefined
  getSignalsByStatus(status): Signal[]
  getCopePosts(): CopePost[]
  getCopeBySlug(slug): CopePost | undefined
  getRetrainingJobs(): RetrainingJob[]
  getBodyCount(): number
  getCompanies(): { name: string; count: number }[]
        │
        ▼
+page.ts load functions import and call getters
        │
        ▼
+page.svelte receives data as props, renders components
```

## Type Definitions (`src/lib/types.ts`)

```typescript
export type SignalStatus = 'AUTOMATED' | 'DOWNSIZED' | 'ON_NOTICE' | 'RUMOR';

export interface Signal {
  title: string;
  slug: string;
  company: string;
  role: string;
  status: SignalStatus;
  body_count: number;
  date: string;
  points: number;
  tags: string[];
  body: string;     // Rendered HTML from markdown
}

export interface CopePost {
  title: string;
  slug: string;
  author: string;
  date: string;
  tags: string[];
  body: string;     // Rendered HTML
}

export interface RetrainingJob {
  title: string;
  slug: string;
  company: string;
  location: string;
  salary: string;
  date: string;
  tags: string[];
  body: string;     // Rendered HTML
}

export interface LeaderboardUser {
  rank: number;
  username: string;
  points: number;
  accuracy: number;
  predictions: number;
}
```

## Rendering Strategy

- **Global prerender:** `export const prerender = true` in root `+layout.ts`
- **Static adapter:** `@sveltejs/adapter-static` with no fallback page
- **Dynamic routes:** `[slug]` routes use `entries()` functions to enumerate all valid slugs at build time
- **XML endpoints:** `+server.ts` files with `prerender = true` generate static `.xml` files

## CSS Architecture

**Import chain** (in `+layout.svelte`):
```
tokens.css → reset.css → global.css → animations.css
```

- **tokens.css:** Only `:root { --var: value; }` declarations. No selectors.
- **reset.css:** Minimal: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`
- **global.css:** Body styles (starfield bg, Comic Sans, green text), `a` tag colors, `table` defaults, `<hr>`, scrollbar styling.
- **animations.css:** `@keyframes blink`, `@keyframes glow-pulse`, `@keyframes rainbow`.

Component styles are scoped within each `.svelte` file using `<style>` blocks.

## Conventions

- **No Tailwind.** Plain CSS only. Custom properties for theming.
- **No preprocessor.** No SCSS, no PostCSS. Raw CSS.
- **No external component library.** Everything custom-built.
- **No images.** All visual effects are CSS-only. Emojis for icons.
- **No JavaScript frameworks inside markdown.** Content is plain markdown, rendered to HTML.
- **Components use slots** for content projection where appropriate.
- **Props are typed** with TypeScript interfaces.
- **File naming:** PascalCase for components (`SiteHeader.svelte`), kebab-case for content (`amazon-warehouse-2026.md`), camelCase for modules (`content.ts`).
