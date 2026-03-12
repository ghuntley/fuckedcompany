# Molecules

Composed from atoms and raw HTML. Each molecule represents a distinct UI pattern used across the site.

All components live in `src/lib/components/molecules/`.

---

## RoleCard

A table row representing a single role/company in the dead pool. The core repeating unit of the Dead Pool table.

**File:** `RoleCard.svelte`

**Consumes:** `Signal` type

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `signal` | `Signal` | Signal data object |

**Rendering (as `<tr>`):**
| Cell | Content | Atom Used |
|------|---------|-----------|
| Role | Role name as NeonLink to `/pool/{slug}` | `NeonLink` |
| Company | Company name (plain text, cyan) | — |
| Status | Status value | `StatusBadge` |
| Points | Point value | `PointsDisplay` |
| Body Count | Number laid off | `Counter` |
| Date | Date string | plain text, muted |

**Styles:**
- Renders as `<tr>` (used inside a `<table>`)
- Hover: row background lightens slightly
- Alternating bg handled by parent table (via `:nth-child`)

---

## RumorPost

A signal feed item — a single AI layoff event rendered as a standalone post.

**File:** `RumorPost.svelte`

**Consumes:** `Signal` type

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `signal` | `Signal` | Signal data object |

**Rendering:**
```
💀 {company} — {role}                    [{status badge}]
{title as NeonLink to /pool/{slug}}
{body excerpt, first ~200 chars of rendered HTML}
Posted: {date}  |  Body Count: {body_count}  |  Points: {points}
```

**Styles:**
- Border-bottom: `var(--border-panel)` (cyan)
- Padding: `var(--space-4)` (16px)
- Company name: `var(--color-text-hot)` (hot pink), bold
- Body text: `var(--color-text)` (neon green)
- Meta line: `var(--color-text-muted)` (gray), `var(--font-size-xs)`

---

## ForumPost

A single post in the Cope Corner — a rant/vent entry with author and body.

**File:** `ForumPost.svelte`

**Consumes:** `CopePost` type

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `post` | `CopePost` | Cope post data |
| `index` | `number` | For alternating background |

**Rendering:**
```
{author} — {date}
{rendered markdown body}
```

**Styles:**
- Background: alternates between `var(--color-bg-table-row)` and `var(--color-bg-table-row-alt)` based on index
- Author: `var(--color-text-heading)` (cyan), `var(--font-family-mono)`
- Date: `var(--color-text-muted)`, `var(--font-size-xs)`
- Body: `var(--color-text)` (neon green)
- Padding: `var(--space-4)`
- Border-bottom: `RainbowHR`

---

## NavBar

Pipe-separated neon navigation links — the classic GeoCities/early web navigation pattern.

**File:** `NavBar.svelte`

**Props:** None (routes are hardcoded)

**Rendering:**
```
Home | Dead Pool | Kill List | Cope Corner | Retraining | Leaderboard | About
```

**Styles:**
- Background: `var(--color-bg-panel)` (#0A0A2A)
- Padding: `var(--space-2) var(--space-4)` (8px 16px)
- Text-align: center
- Links: `NeonLink` components
- Separators: ` | ` in `var(--color-text-muted)` (gray)
- Current page: highlighted in `var(--color-text-hot)` (hot pink), not underlined
- Font: `var(--font-family-fun)` (Comic Sans), `var(--font-size-sm)`

---

## LeaderboardRow

A table row for the leaderboard / "Hall of Prophets."

**File:** `LeaderboardRow.svelte`

**Consumes:** `LeaderboardUser` type

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `user` | `LeaderboardUser` | User data |

**Rendering (as `<tr>`):**
| Cell | Content |
|------|---------|
| Rank | `#{rank}` in gold/silver/bronze for top 3, white for rest |
| Username | Username in cyan |
| Points | `PointsDisplay` |
| Accuracy | `{accuracy}%` |
| Predictions | Count |

**Styles:**
- Top 3 ranks: #1 gold text-shadow, #2 silver, #3 bronze
- Alternating row bg via parent

---

## SearchBar

A decorative search bar — no backend, purely aesthetic. Alerts "SEARCH IS FUCKED" on submit.

**File:** `SearchBar.svelte`

**Props:** None

**Rendering:**
```
[TextInput placeholder="search the dead..."] [GeoButton "SEARCH"]
```

**Styles:**
- Inline layout: input + button side by side
- Input width: ~200px
- Overall: centered or left-aligned depending on context

---

## ThreadPreview

A list item for the Cope Corner thread list — shows title, author, date.

**File:** `ThreadPreview.svelte`

**Consumes:** `CopePost` type

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `post` | `CopePost` | Cope post data |

**Rendering:**
```
💀 {title as NeonLink to /cope/{slug}}
   by {author} — {date}     [{tag}, {tag}]
```

**Styles:**
- Padding: `var(--space-3)` (12px)
- Border-bottom: `1px solid var(--color-border-table)` (purple)
- Title: `NeonLink`, `var(--font-size-base)`
- Author/date: `var(--color-text-muted)`, `var(--font-size-xs)`
- Tags: `var(--color-text-hot)` (pink), `var(--font-size-xs)`

---

## WebRing

Classic webring navigation — a centered row of prev/next links with ring name.

**File:** `WebRing.svelte`

**Props:** None

**Rendering:**
```
[← PREV]  ☠ HUMAN DEAD POOL WEBRING ☠  [NEXT →]
```

**Styles:**
- Text-align: center
- Ring name: `var(--color-text-warning)` (yellow), bold, `var(--font-family-fun)` (Comic Sans)
- Links: `NeonLink` (prev/next go to `#` — decorative)
- Border: `var(--border-panel)` (cyan) top and bottom
- Padding: `var(--space-2)` (8px)

---

## GuestbookCTA

A "Sign My Guestbook!" link/button — essential GeoCities element.

**File:** `GuestbookCTA.svelte`

**Props:** None

**Rendering:**
```
✉️ SIGN MY GUESTBOOK ✉️
```

**Styles:**
- Text-align: center
- Font: `var(--font-family-fun)` (Comic Sans), `var(--font-size-md)`, bold
- Color: `var(--color-text-warning)` (yellow)
- Wrapped in `NeonLink` (href="#" — decorative)
- Hover: glow effect

---

## MidiPlayer

A fake MIDI player banner — purely decorative, no actual audio. An essential GeoCities artifact.

**File:** `MidiPlayer.svelte`

**Props:** None

**Rendering:**
```
🔊 NOW PLAYING: funeral_march.mid [STOP]
```

**Styles:**
- Background: `var(--color-bg-panel)` (#0A0A2A)
- Border: `var(--border-glow)` (1px solid cyan)
- Padding: `var(--space-2)` (8px)
- Font: `var(--font-family-mono)`, `var(--font-size-xs)`
- "STOP" as a small `GeoButton` (does nothing)
- Color: `var(--color-text-muted)` (gray)
