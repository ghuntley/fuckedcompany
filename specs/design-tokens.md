# Design Tokens

All tokens are delivered as CSS custom properties defined in `src/lib/styles/tokens.css` and applied globally via the root layout.

## Colors

### Backgrounds

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#000000` | Page body background (black void) |
| `--color-bg-panel` | `#0A0A2A` | Content panel background (near-black blue) |
| `--color-bg-panel-alt` | `#1A0A2E` | Alternate panel / section background (dark purple) |
| `--color-bg-table-header` | `#330066` | Table header row background (deep purple) |
| `--color-bg-table-row` | `#0D0D3B` | Table row background (dark blue) |
| `--color-bg-table-row-alt` | `#1A0A2E` | Alternating table row (dark purple) |
| `--color-bg-input` | `#111111` | Form input background |
| `--color-bg-button` | `#1A1A3E` | Button background (dark indigo) |
| `--color-bg-button-hover` | `#2A2A5E` | Button hover background |

### Text

| Token | Value | Usage |
|-------|-------|-------|
| `--color-text` | `#00FF00` | Primary body text (neon green) |
| `--color-text-secondary` | `#39FF14` | Secondary text (lime green) |
| `--color-text-hot` | `#FF00FF` | Emphasis / hot pink highlights |
| `--color-text-warning` | `#FFFF00` | Warning text (electric yellow) |
| `--color-text-heading` | `#00FFFF` | Headings (cyan) |
| `--color-text-muted` | `#888888` | Muted / secondary info (gray) |
| `--color-text-inverse` | `#FFFFFF` | Text on dark-on-dark elements |

### Links

| Token | Value | Usage |
|-------|-------|-------|
| `--color-link` | `#00FFFF` | Unvisited link (cyan) |
| `--color-link-visited` | `#FFFF00` | Visited link (yellow) |
| `--color-link-hover` | `#FF0000` | Link hover state (red) |

### Status Colors

| Token | Value | Status | Usage |
|-------|-------|--------|-------|
| `--color-status-automated` | `#FF0000` | AUTOMATED | Role fully replaced by AI — blinking |
| `--color-status-downsized` | `#FF6600` | DOWNSIZED | Major cuts, AI cited |
| `--color-status-on-notice` | `#FFD700` | ON NOTICE | At risk, automation announced |
| `--color-status-rumor` | `#888888` | RUMOR | Unconfirmed reports |
| `--color-status-safe` | `#00FF00` | SAFE | Safe... for now |

### Accents & Borders

| Token | Value | Usage |
|-------|-------|-------|
| `--color-accent-pink` | `#FF69B4` | Decorative pink accents |
| `--color-accent-orange` | `#FF6600` | Orange accents |
| `--color-accent-fire` | `#FF3300` | Fire / danger accents |
| `--color-border-glow` | `#00FFFF` | Cyan glow panel borders |
| `--color-border-table` | `#6600CC` | Purple table borders |

## Typography

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `--font-family-fun` | `"Comic Sans MS", "Comic Sans", cursive` | Body text — the canonical GeoCities font |
| `--font-family-heading` | `Impact, "Arial Black", sans-serif` | Headings — SCREAMING IMPACT |
| `--font-family-body` | `"Times New Roman", Times, serif` | Fallback body / long-form text |
| `--font-family-mono` | `"Courier New", Courier, monospace` | Counters, point displays, data |

### Font Sizes

| Token | Value | Usage |
|-------|-------|-------|
| `--font-size-xs` | `10px` | Fine print, timestamps |
| `--font-size-sm` | `12px` | Small text, badges |
| `--font-size-base` | `14px` | Default body text |
| `--font-size-md` | `16px` | Slightly larger body |
| `--font-size-lg` | `20px` | Subheadings |
| `--font-size-xl` | `28px` | Page titles |
| `--font-size-xxl` | `36px` | Hero / impact headlines |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `--font-weight-normal` | `400` | Regular text |
| `--font-weight-bold` | `700` | Bold / emphasis |

### Line Height

| Token | Value |
|-------|-------|
| `--line-height` | `1.5` |

## Spacing

4px base unit. Used for padding, margin, and gap values.

| Token | Value |
|-------|-------|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `24px` |
| `--space-6` | `32px` |
| `--space-7` | `48px` |

## Borders

| Token | Value | Usage |
|-------|-------|-------|
| `--border-table` | `2px ridge #6600CC` | Table borders — 3D ridge effect |
| `--border-panel` | `2px solid #00FFFF` | Content panel borders — cyan |
| `--border-glow` | `1px solid #00FFFF` | Subtle glow border |
| `--border-input` | `1px solid #00FFFF` | Form input borders |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `0px` | Everywhere. Sharp corners. Era-accurate. |

## Shadows & Glow Effects

No `box-shadow` for structural elements (era-accurate). Glow effects are achieved via `text-shadow` and selective `box-shadow` for neon glow only.

| Token | Value | Usage |
|-------|-------|-------|
| `--glow-cyan` | `0 0 10px #00FFFF, 0 0 20px #00FFFF` | Cyan neon glow (headings, borders) |
| `--glow-green` | `0 0 10px #00FF00, 0 0 20px #00FF00` | Green neon glow (points, counters) |
| `--glow-pink` | `0 0 10px #FF00FF, 0 0 20px #FF00FF` | Pink neon glow (emphasis) |
| `--glow-red` | `0 0 10px #FF0000, 0 0 20px #FF0000` | Red neon glow (danger/automated) |

## Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--layout-width` | `700px` | Fixed-width centered container |

No responsive breakpoints. Not invented yet in GeoCities canon. The site is 700px wide, centered, and that's it.

## Animations

Defined in `src/lib/styles/animations.css`:

| Animation | Keyframes | Usage |
|-----------|-----------|-------|
| `blink` | `50% { opacity: 0 }` | AUTOMATED status badge, critical alerts |
| `glow-pulse` | `0%/100% { text-shadow: glow } 50% { text-shadow: stronger glow }` | Pulsing neon text effect |
| `rainbow` | Cycles through hue-rotate | Rainbow text / border effects |

## Starfield Background

The page body uses a CSS-only starfield — no images. Implemented as multiple `radial-gradient` layers with tiny white dots at random-seeming positions on `#000000`, creating a deep space / night sky effect.
