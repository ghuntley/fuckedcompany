# Atoms

The smallest reusable components. Each is a single UI element with no internal dependencies on other components.

All components live in `src/lib/components/atoms/`.

---

## NeonLink

A styled `<a>` tag in classic GeoCities link colors.

**File:** `NeonLink.svelte`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | required | Link destination |
| `external` | `boolean` | `false` | Opens in new tab if true |

**Slot:** Link text content

**Styles:**
- Color: `var(--color-link)` (#00FFFF cyan)
- Visited: `var(--color-link-visited)` (#FFFF00 yellow)
- Hover: `var(--color-link-hover)` (#FF0000 red), optional glow via `var(--glow-cyan)`
- Always underlined (`text-decoration: underline`)
- Font inherits from parent

---

## GeoButton

A beveled 3D button reminiscent of Windows 95/GeoCities form buttons, but neon.

**File:** `GeoButton.svelte`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'button' \| 'submit'` | `'button'` | HTML button type |
| `disabled` | `boolean` | `false` | Disabled state |

**Slot:** Button label text

**Styles:**
- Background: `var(--color-bg-button)` (#1A1A3E)
- Text: `var(--color-text)` (#00FF00 neon green)
- Border: `2px outset #6600CC` (beveled 3D purple)
- Font: `var(--font-family-fun)` (Comic Sans), `var(--font-size-sm)`, bold
- Padding: `var(--space-1) var(--space-3)` (4px 12px)
- Hover: background `var(--color-bg-button-hover)`, text `var(--color-text-heading)` (cyan)
- Active: border `2px inset #6600CC` (pressed look)
- Disabled: opacity 0.5, cursor not-allowed
- `border-radius: var(--radius)` (0px)

---

## TextInput

A dark-themed form input with neon green text and cyan border.

**File:** `TextInput.svelte`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | required | Input name attribute |
| `placeholder` | `string` | `''` | Placeholder text |
| `type` | `string` | `'text'` | Input type |
| `value` | `string` | `''` | Bound value |

**Styles:**
- Background: `var(--color-bg-input)` (#111111)
- Text: `var(--color-text)` (#00FF00)
- Border: `var(--border-input)` (1px solid cyan)
- Font: `var(--font-family-fun)` (Comic Sans), `var(--font-size-sm)`
- Padding: `var(--space-1) var(--space-2)` (4px 8px)
- Focus: border color brightens, subtle cyan glow
- Placeholder color: `var(--color-text-muted)`

---

## StatusBadge

An ALL CAPS colored text label indicating the automation status of a role.

**File:** `StatusBadge.svelte`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'AUTOMATED' \| 'DOWNSIZED' \| 'ON_NOTICE' \| 'RUMOR' \| 'SAFE'` | required | Status value |

**Rendering:**
- `AUTOMATED` → red (#FF0000), bold, CSS `blink` animation
- `DOWNSIZED` → orange (#FF6600), bold
- `ON_NOTICE` → gold (#FFD700), bold
- `RUMOR` → gray (#888888), normal weight
- `SAFE` → green (#00FF00), bold

**Styles:**
- `text-transform: uppercase`
- `letter-spacing: 1px`
- Font: `var(--font-family-mono)`, `var(--font-size-sm)`
- Display: inline

---

## PointsDisplay

A bold monospace number with neon green glow, used for dead pool point values.

**File:** `PointsDisplay.svelte`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `points` | `number` | required | Point value to display |

**Styles:**
- Font: `var(--font-family-mono)`, `var(--font-size-base)`, bold
- Color: `var(--color-text)` (#00FF00)
- Text-shadow: `var(--glow-green)`
- Text-align: right

---

## RainbowHR

A horizontal rule rendered as a rainbow gradient bar — the canonical GeoCities section separator.

**File:** `RainbowHR.svelte`

**Props:** None

**Styles:**
- Height: 3px
- Background: `linear-gradient(to right, #FF0000, #FF6600, #FFFF00, #00FF00, #00FFFF, #0000FF, #8B00FF)`
- Border: none
- Margin: `var(--space-4) 0` (16px)
- Width: 100%

---

## Counter

An inline bracketed count display, e.g., `[42]`.

**File:** `Counter.svelte`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | required | Number to display |

**Rendering:** `[{count}]`

**Styles:**
- Font: `var(--font-family-mono)`, `var(--font-size-sm)`
- Color: `var(--color-text-secondary)` (#39FF14 lime)
- Display: inline

---

## Badge88x31

A CSS-only recreation of the classic 88x31 pixel web badge. No images — pure CSS + text.

**File:** `Badge88x31.svelte`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | required | Badge text (e.g., "NETSCAPE NOW!") |
| `href` | `string` | `'#'` | Link destination |
| `bgColor` | `string` | `'#333399'` | Background color |
| `textColor` | `string` | `'#FFFFFF'` | Text color |
| `borderColor` | `string` | `'#888888'` | Border color |

**Styles:**
- Width: 88px, Height: 31px (exact replica dimensions)
- Font: `var(--font-family-mono)`, 8px, bold
- Border: 1px solid `borderColor`
- Display: inline-flex, centered text
- Overflow: hidden
- Text-transform: uppercase
- `border-radius: 0`

---

## BlinkText

A wrapper component that applies the CSS `blink` animation to its slot content.

**File:** `BlinkText.svelte`

**Props:** None (slot only)

**Slot:** Any content to blink

**Styles:**
- `animation: blink 1s step-end infinite`

---

## MarqueeText

A wrapper around the native `<marquee>` HTML element with neon styling.

**File:** `MarqueeText.svelte`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `speed` | `number` | `6` | Scroll amount attribute |
| `direction` | `'left' \| 'right'` | `'left'` | Scroll direction |

**Slot:** Scrolling content

**Styles:**
- Font inherits from parent
- Color inherits from parent
- No additional padding (let parent control)

---

## GeoHeading

An Impact font heading with cyan neon glow text-shadow.

**File:** `GeoHeading.svelte`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `2` | HTML heading level |

**Slot:** Heading text content

**Styles:**
- Font: `var(--font-family-heading)` (Impact)
- Color: `var(--color-text-heading)` (#00FFFF cyan)
- Text-shadow: `var(--glow-cyan)` (neon glow)
- Text-transform: uppercase
- Letter-spacing: 2px
- Margin: `var(--space-4) 0` (16px)
- Sizes by level:
  - h1: `var(--font-size-xxl)` (36px)
  - h2: `var(--font-size-xl)` (28px)
  - h3: `var(--font-size-lg)` (20px)
  - h4: `var(--font-size-md)` (16px)
  - h5/h6: `var(--font-size-base)` (14px)

---

## UnderConstructionBanner

A yellow/black hazard stripe banner with construction emoji, because every GeoCities page has one.

**File:** `UnderConstructionBanner.svelte`

**Props:** None

**Rendering:** `🚧 UNDER CONSTRUCTION 🚧`

**Styles:**
- Background: repeating-linear-gradient 45deg yellow/black hazard stripes
- Text: black, bold, centered
- Font: `var(--font-family-heading)` (Impact), `var(--font-size-md)`
- Padding: `var(--space-2) var(--space-4)` (8px 16px)
- Border: 2px solid #FFD700
- Margin: `var(--space-4) 0`

---

## Logo

The "FUCKED COMPANY" wordmark — a deliberately ugly CSS-only text logo parodying Fast Company magazine.

**File:** `Logo.svelte`

**Props:** None

**Rendering:**
- Line 1: "FUCKED" in large bold serif (Georgia) — the crude parody
- Line 2: "COMPANY" in Impact, slightly smaller
- Line 3: Tagline "☠ Official Lubricant of the AI Economy ☠" in Comic Sans, hot pink, smaller

**Styles:**
- "FUCKED": `Georgia, serif`, `var(--font-size-xxl)` (36px), bold, `var(--color-text)` (neon green), `var(--glow-green)`
- "COMPANY": `var(--font-family-heading)` (Impact), `var(--font-size-xl)` (28px), `var(--color-text-heading)` (cyan), `var(--glow-cyan)`
- Tagline: `var(--font-family-fun)` (Comic Sans), `var(--font-size-sm)` (12px), `var(--color-text-hot)` (#FF00FF hot pink)
- Text-align: center
- Line-height: 1.1 for tight stacking

---

## SkullIcon

A skull emoji with optional neon glow effect.

**File:** `SkullIcon.svelte`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `variant` | `'skull' \| 'crossbones'` | `'skull'` | 💀 or ☠ |

**Rendering:**
- `skull` → 💀
- `crossbones` → ☠

**Styles:**
- sm: `var(--font-size-base)` (14px)
- md: `var(--font-size-lg)` (20px)
- lg: `var(--font-size-xxl)` (36px)
- Display: inline
- Optional text-shadow glow
