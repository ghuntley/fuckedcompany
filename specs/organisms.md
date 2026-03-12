# Organisms

Complex components composed of molecules and atoms. Each organism represents a major section of the page.

All components live in `src/lib/components/organisms/`.

---

## SiteHeader

The top-of-page header containing logo, tagline, body count ticker, and navigation.

**File:** `SiteHeader.svelte`

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `bodyCount` | `number` | Total humans replaced (for ticker) |
| `currentPath` | `string` | Current route path (for nav highlighting) |

**Structure:**
```
┌──────────────────────────────────────────────┐
│                    FUCKED                     │  ← Logo
│                   COMPANY                     │
│    ☠ Official Lubricant of the AI Economy ☠   │  ← Tagline
│                                              │
│  ☠ 256,177 HUMANS REPLACED AND COUNTING ☠    │  ← BodyCountTicker (marquee)
│                                              │
│  Home | Dead Pool | Kill List | Cope Corner   │  ← NavBar
│        | Retraining | Leaderboard | About     │
└──────────────────────────────────────────────┘
```

**Styles:**
- Background: `var(--color-bg)` (black)
- Border-bottom: `var(--border-panel)` (2px solid cyan)
- Padding: `var(--space-4)` (16px)
- Text-align: center
- All content centered

**Contains:** `Logo`, `BodyCountTicker`, `NavBar`

---

## SignalFeed

A reverse-chronological list of AI layoff signals — the main homepage content.

**File:** `SignalFeed.svelte`

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `signals` | `Signal[]` | Array of signals to display |

**Structure:**
```
💀 LATEST SIGNALS 💀                  ← GeoHeading
═══════════════════                   ← RainbowHR
[RumorPost 1]
───────────────────
[RumorPost 2]
───────────────────
[RumorPost 3]
...
```

**Styles:**
- Each `RumorPost` separated by `RainbowHR`
- Heading uses `GeoHeading` (level 2)

**Contains:** `GeoHeading`, `RainbowHR`, `RumorPost` (×N)

---

## DeadPoolTable

A full-page table of all tracked roles — the dead pool game view.

**File:** `DeadPoolTable.svelte`

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `signals` | `Signal[]` | All signals |

**Structure:**
```
💀 THE DEAD POOL 💀                   ← GeoHeading

┌────────┬─────────┬──────────┬────────┬───────┬──────┐
│  ROLE  │ COMPANY │  STATUS  │ POINTS │ DEAD  │ DATE │  ← Header row
├────────┼─────────┼──────────┼────────┼───────┼──────┤
│ [RoleCard row]                                       │
│ [RoleCard row]                                       │
│ ...                                                  │
└────────┴─────────┴──────────┴────────┴───────┴──────┘
```

**Styles:**
- `<table>` with `width: 100%`, `border-collapse: separate`, `border-spacing: 0`
- Border: `var(--border-table)` (2px ridge purple)
- Header row: background `var(--color-bg-table-header)` (#330066), text `var(--color-text-warning)` (yellow), bold, uppercase
- Alternating row backgrounds: `var(--color-bg-table-row)` / `var(--color-bg-table-row-alt)`
- Cell padding: `var(--space-2) var(--space-3)` (8px 12px)

**Contains:** `GeoHeading`, `RoleCard` (×N)

---

## LeaderboardTable

The "Hall of Prophets" — a ranked table of top predictors.

**File:** `LeaderboardTable.svelte`

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `users` | `LeaderboardUser[]` | Leaderboard users |

**Structure:**
Same table structure as DeadPoolTable but with columns: Rank, Username, Points, Accuracy, Predictions.

**Styles:**
- Same table styling as DeadPoolTable
- Top 3 rows: special glow effects
  - #1: gold text-shadow glow, yellow rank number
  - #2: silver text-shadow
  - #3: bronze/orange text-shadow
- Header: "🏆 HALL OF PROPHETS 🏆" via `GeoHeading`

**Contains:** `GeoHeading`, `LeaderboardRow` (×N)

---

## CopeCornerList

The Cope Corner forum thread listing — a list of rant posts to browse.

**File:** `CopeCornerList.svelte`

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `posts` | `CopePost[]` | Array of cope posts |

**Structure:**
```
😤 COPE CORNER 😤                     ← GeoHeading
"VENT HERE. NO JUDGMENT. CAPS ENCOURAGED."  ← Subtitle
═══════════════════                   ← RainbowHR
[ThreadPreview 1]
[ThreadPreview 2]
[ThreadPreview 3]
...
```

**Styles:**
- Subtitle: `var(--color-text-hot)` (pink), `var(--font-family-fun)`, `var(--font-size-sm)`, italic

**Contains:** `GeoHeading`, `RainbowHR`, `ThreadPreview` (×N)

---

## KillListArchive

The confirmed kills archive — only AUTOMATED status signals.

**File:** `KillListArchive.svelte`

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `signals` | `Signal[]` | Signals with status AUTOMATED |
| `totalBodyCount` | `number` | Sum of all body_count |

**Structure:**
```
☠ THE KILL LIST ☠                     ← GeoHeading
TOTAL CONFIRMED KILLS: 256,177        ← Body count display
═══════════════════                   ← RainbowHR

Table: Role | Company | Body Count | Date Confirmed
[rows...]
```

**Styles:**
- Total kills: `var(--color-status-automated)` (red), `var(--font-family-mono)`, blinking via `BlinkText`
- Table: same styling as DeadPoolTable
- All role names prefixed with ☠

**Contains:** `GeoHeading`, `BlinkText`, `RainbowHR`, table rows

---

## Sidebar

The right-column sidebar with mini-widgets — latest signals, mini leaderboard, body count, badges, guestbook, MIDI player.

**File:** `Sidebar.svelte`

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `signals` | `Signal[]` | Latest 5 signals for mini-feed |
| `users` | `LeaderboardUser[]` | Top 5 users for mini-leaderboard |
| `bodyCount` | `number` | Total body count |

**Structure:**
```
┌──────────────────────┐
│ 🚧 UNDER CONSTR. 🚧  │  ← UnderConstructionBanner
├──────────────────────┤
│ 💀 LATEST SIGNALS    │
│ • Signal 1 (link)    │
│ • Signal 2 (link)    │
│ • Signal 3 (link)    │
│ • Signal 4 (link)    │
│ • Signal 5 (link)    │
├──────────────────────┤
│ 🏆 TOP PROPHETS      │
│ 1. user1 — 4,200pts  │
│ 2. user2 — 3,800pts  │
│ 3. user3 — 3,100pts  │
│ ...                  │
├──────────────────────┤
│   TOTAL BODY COUNT   │
│      256,177 ☠       │  ← big number, blinking
├──────────────────────┤
│ ✉️ SIGN MY GUESTBOOK │  ← GuestbookCTA
├──────────────────────┤
│ 🔊 funeral_march.mid │  ← MidiPlayer
├──────────────────────┤
│ [88x31] [88x31]      │  ← Badge88x31 collection
│ [88x31] [88x31]      │
└──────────────────────┘
```

**Styles:**
- Border: `var(--border-panel)` (cyan)
- Background: `var(--color-bg-panel)` (#0A0A2A)
- Width: ~220px (sidebar column in table layout)
- Each section separated by `RainbowHR`
- Padding: `var(--space-3)` (12px)

**Contains:** `UnderConstructionBanner`, `NeonLink`, `GuestbookCTA`, `MidiPlayer`, `Badge88x31`, `BlinkText`, `SkullIcon`, `RainbowHR`

---

## SiteFooter

The bottom-of-page footer with badges, webring, credits, hit counter, and ASCII art.

**File:** `SiteFooter.svelte`

**Props:** None

**Structure:**
```
═══════════════════════════════════════  ← RainbowHR

[88x31 Netscape] [88x31 HTML] [88x31 RSS] [88x31 Notepad]

← PREV | ☠ HUMAN DEAD POOL WEBRING ☠ | NEXT →

© 2026 FUCKEDCOMPANY.COM
R.I.P. HUMAN LABOR, 2024–????          ← BlinkText, red
Made with 💀 and SvelteKit

Best viewed in NETSCAPE NAVIGATOR 4.0 at 800x600

YOU ARE VISITOR #048,291               ← Hit counter

    ___
   /   \
  | x x |                             ← ASCII art skull
  |  ^  |
   \___/
```

**Styles:**
- Background: `var(--color-bg)` (black)
- Border-top: `var(--border-panel)` (cyan)
- Text-align: center
- Copyright: `var(--color-text)` (green), `var(--font-size-xs)`
- R.I.P.: `var(--color-status-automated)` (red), blinking
- Netscape text: `var(--color-text-muted)` (gray), `var(--font-family-fun)`, `var(--font-size-xs)`
- Visitor counter: `var(--font-family-mono)`, `var(--color-text-warning)` (yellow)
- ASCII art: `var(--font-family-mono)`, `var(--color-text-muted)`, `white-space: pre`
- Padding: `var(--space-6)` (32px)

**Contains:** `RainbowHR`, `Badge88x31` (×4+), `WebRing`, `BlinkText`, ASCII art

---

## BodyCountTicker

A `<marquee>` scrolling ticker displaying the total humans replaced by AI.

**File:** `BodyCountTicker.svelte`

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `count` | `number` | Total body count |

**Rendering:**
```
☠ {count} HUMANS REPLACED BY AI AND COUNTING ☠ 💀 YOUR JOB COULD BE NEXT 💀 ☠ {count} HUMANS REPLACED BY AI AND COUNTING ☠
```

(Repeated for seamless scrolling)

**Styles:**
- Font: `var(--font-family-heading)` (Impact), `var(--font-size-md)` (16px)
- Color: `var(--color-text-warning)` (yellow)
- Text-shadow: `var(--glow-red)` (red glow)
- Uses `MarqueeText` wrapper with speed 4
- Padding: `var(--space-2) 0` (8px)
