# Pages & Routes

All routes are prerendered to static HTML at build time via `adapter-static`.

## Route Map

### Public Routes (9)

| Route | Title | Content Source | Layout |
|-------|-------|----------------|--------|
| `/` | Home | `signals/*.md` | 2-column table: SignalFeed + Sidebar |
| `/pool` | Dead Pool | `signals/*.md` | Full-width: DeadPoolTable |
| `/pool/[slug]` | Signal Detail | `signals/{slug}.md` | Full-width: single signal post |
| `/killist` | Kill List | `signals/*.md` (AUTOMATED) | Full-width: KillListArchive |
| `/cope` | Cope Corner | `cope/*.md` | Full-width: CopeCornerList |
| `/cope/[slug]` | Cope Post | `cope/{slug}.md` | Full-width: single cope post |
| `/leaderboard` | Hall of Prophets | `data/leaderboard.ts` | Full-width: LeaderboardTable |
| `/retraining` | Retraining Board | `retraining/*.md` | Full-width: job listings table |
| `/about` | About | `pages/about.md` | Full-width: static content |

### XML Endpoints (2)

| Route | Content-Type | Source |
|-------|-------------|--------|
| `/sitemap.xml` | `application/xml` | All public routes dynamically enumerated |
| `/rss.xml` | `application/rss+xml` | All signals as RSS 2.0 items |

### Storybook Routes (5, unindexed)

| Route | Description |
|-------|-------------|
| `/storybook` | Overview — component count summary, links to sections |
| `/storybook/tokens` | Design token reference — colors, type, spacing, borders, effects |
| `/storybook/atoms` | All 14 atoms rendered with all prop variants |
| `/storybook/molecules` | All 10 molecules rendered with mock data |
| `/storybook/organisms` | All 9 organisms rendered with mock data |

---

## Page Details

### `/` — Homepage

**Load function:** `getSignals()` (latest 10), `getBodyCount()`, top 5 leaderboard users

**Layout:** Table-based 2-column layout (GeoCities authentic)
```
┌─────────────────────────────────────────────────┐
│                  [SiteHeader]                    │
├──────────────────────────┬──────────────────────┤
│                          │                      │
│      Signal Feed         │      Sidebar         │
│      (latest 10)         │   (mini widgets)     │
│                          │                      │
│      [RumorPost]         │   Under Construction │
│      [RainbowHR]         │   Latest Signals     │
│      [RumorPost]         │   Top Prophets       │
│      [RainbowHR]         │   Body Count         │
│      ...                 │   Guestbook          │
│                          │   MIDI Player        │
│                          │   88x31 Badges       │
├──────────────────────────┴──────────────────────┤
│                  [SiteFooter]                    │
└─────────────────────────────────────────────────┘
```

Main column: ~470px. Sidebar: ~220px. Gap: ~10px.

### `/pool` — Dead Pool

**Load function:** `getSignals()` (all signals)

**Content:**
- `GeoHeading`: "💀 THE DEAD POOL 💀"
- Subtitle: "PREDICT THE NEXT HUMAN CASUALTY OF THE AI REVOLUTION"
- `DeadPoolTable` with all signals
- Total tracked roles count at top

### `/pool/[slug]` — Signal Detail

**Load function:** `getSignalBySlug(params.slug)`

**Prerender entries:** All signal slugs via `entries()` function

**Content:**
- Breadcrumb: `Home > Dead Pool > {role}`
- `GeoHeading`: Signal title
- `StatusBadge` + `PointsDisplay` + date
- Company info block
- Full rendered markdown body
- Body count display
- `RainbowHR`
- "BACK TO THE DEAD POOL" link

### `/killist` — Kill List

**Load function:** `getSignalsByStatus('AUTOMATED')`, `getBodyCount()`

**Content:**
- `GeoHeading`: "☠ THE KILL LIST ☠"
- Total body count (blinking red)
- `KillListArchive` table
- "THESE ROLES ARE GONE. AUTOMATED. REPLACED. FUCKED."

### `/cope` — Cope Corner

**Load function:** `getCopePosts()`

**Content:**
- `GeoHeading`: "😤 COPE CORNER 😤"
- Subtitle: "VENT HERE. NO JUDGMENT. CAPS ENCOURAGED."
- `CopeCornerList` — list of ThreadPreviews
- Each links to `/cope/[slug]`

### `/cope/[slug]` — Cope Post Detail

**Load function:** `getCopeBySlug(params.slug)`

**Prerender entries:** All cope post slugs

**Content:**
- Breadcrumb: `Home > Cope Corner > {title}`
- Author + date
- Full rendered markdown body
- Tags displayed
- `RainbowHR`
- "BACK TO COPE CORNER" link

### `/leaderboard` — Hall of Prophets

**Load function:** Import from `data/leaderboard.ts`

**Content:**
- `GeoHeading`: "🏆 HALL OF PROPHETS 🏆"
- Subtitle: "THE SEERS WHO PREDICTED THE AI CULLING"
- `LeaderboardTable` with all users
- Note: "This leaderboard is maintained by the prophecy council. Points are awarded for accurate predictions of AI-driven job displacement."

### `/retraining` — Retraining Board

**Load function:** `getRetrainingJobs()`

**Content:**
- `GeoHeading`: "📚 RETRAINING BOARD 📚"
- Subtitle: "YOUR OLD JOB IS DEAD. HERE ARE YOUR OPTIONS."
- Table with columns: Title, Company, Location, Salary, Date
- Each job title links to... nothing (decorative, these jobs don't exist)
- Below table: rendered markdown body for each job (ironic descriptions)

### `/about` — About

**Load function:** About page markdown content

**Content:**
- `GeoHeading`: "ABOUT FUCKEDCOMPANY.COM"
- History: connection to original FuckedCompany.com
- How points work
- FAQ
- ASCII art
- Credits / colophon
- "Made with 💀 and SvelteKit"

---

## `/sitemap.xml`

**Implementation:** `src/routes/sitemap.xml/+server.ts`

Generates a standard XML sitemap containing all public routes:
- Static routes with hardcoded paths
- Dynamic signal routes from `getSignals()` → `/pool/{slug}`
- Dynamic cope routes from `getCopePosts()` → `/cope/{slug}`
- Excludes all `/storybook/*` routes
- Excludes `/rss.xml`
- Each URL includes `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`

## `/rss.xml`

**Implementation:** `src/routes/rss.xml/+server.ts`

Generates RSS 2.0 XML feed:
- Channel: title, link, description, language, lastBuildDate
- Items from `getSignals()`: title, link, description (HTML body), pubDate, guid
- Autodiscoverable via `<link>` tag in root layout

---

## Storybook Routes

### Storybook Behavior
- Own `+layout.svelte` — does NOT use the main site SiteHeader/SiteFooter
- Has a left sidebar with component navigation
- `<meta name="robots" content="noindex, nofollow">` on all storybook pages
- NOT linked from the main NavBar
- NOT included in sitemap.xml
- Uses the same GeoCities design tokens (dogfooding the design system)

### `/storybook` — Overview
- Project name, tagline
- Component inventory: "14 Atoms | 10 Molecules | 9 Organisms"
- Links to each section (tokens, atoms, molecules, organisms)

### `/storybook/tokens` — Token Reference
- Color swatches: every `--color-*` token as a labeled box (swatch + hex + name)
- Typography scale: each `--font-size-*` rendered at that size
- Font families: sample text in Comic Sans, Impact, Times New Roman, Courier New
- Spacing scale: visual boxes showing each `--space-*` value
- Border demos: each border style on a sample box
- Effect demos: glow, blink animation, rainbow HR

### `/storybook/atoms` — Atom Showcase
Each atom rendered with all meaningful prop variants:
- `StatusBadge` × 5 statuses
- `GeoButton` normal, hover preview, disabled
- `NeonLink` default
- `Badge88x31` with different text/color variants
- `GeoHeading` levels 1–6
- etc.

### `/storybook/molecules` — Molecule Showcase
Each molecule with mock data:
- `RoleCard` with sample Signal
- `NavBar` showing current-page highlighting
- `WebRing`, `MidiPlayer`, `GuestbookCTA`
- etc.

### `/storybook/organisms` — Organism Showcase
Full organisms with mock data:
- `SiteHeader` with body count
- `DeadPoolTable` with 3–5 rows
- `SignalFeed` with 3 signals
- `Sidebar` fully populated
- `SiteFooter` complete
