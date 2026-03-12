# FuckedCompany.com — Overview

## Project Name

**FuckedCompany.com** — AI Human Dead Pool

## Tagline

> ☠ Official Lubricant of the AI Economy ☠

## Concept

A spiritual successor to Philip "Pud" Kaplan's FuckedCompany.com (2000–2007), rebuilt for the AI age. Where the original tracked dot-com companies circling the drain during the 2000 bubble, this version tracks **humans getting replaced by AI** — a dead pool for jobs, roles, and entire career paths being automated into oblivion.

Users browse a feed of AI-driven layoffs, explore a dead pool of at-risk roles, read an archive of confirmed kills, and cope together in a forum of gallows humor. The "fucked company" is humanity itself.

## Inspiration

- **FuckedCompany.com (2000–2007)**: Philip Kaplan's dot-com dead pool. Anonymous employee whistleblowing. Prediction game with points. "Happy Fun Slander Corner." Sarcastic, bitter, SCREAMING CAPITALS. 48,000 registered users. $60K/month revenue. Sued by Fast Company for parodying their logo. Replaced it with something deliberately uglier.
- **GeoCities (1994–2009)**: The aesthetic. Tiled starfield backgrounds, neon text on black, Comic Sans, animated GIFs, `<marquee>` tags, hit counters, 88x31 web badges, "Under Construction" banners, webrings, guestbook links, fake MIDI players. Maximum visual chaos as self-expression. The garish ugliness mirrors the garish ugliness of mass automation.

## Design Philosophy

**GeoCities maximalism.** The site looks like a 1997 personal homepage that somehow has foreknowledge of the 2026 AI apocalypse. The deliberately crude, chaotic, neon-on-black aesthetic is not ironic — it's a design statement:

- The slick AI companies automating away your job have $50M branding budgets and minimalist design systems
- This site has Comic Sans, purple table borders, and a `<marquee>` tag counting the dead
- The ugliness is the point. The chaos is the point. Built by a human, for humans, about the end of human work

## Tone & Voice

- Sarcastic, bitter, gallows humor
- SCREAMING CAPITALS for emphasis
- Anonymous venting encouraged
- Schadenfreude as a coping mechanism
- Dark humor about career death
- "slangy prose that mixes short sentences, SCREAMING CAPITALS, relentless sarcasm" (as the original was described)

## Content Model

All content is authored as **Markdown files with YAML frontmatter**. No database. No backend. No authentication. No login. The markdown files ARE the database, parsed at build time into a fully static site.

## Core Sections

| Section | Description | Content Source |
|---------|-------------|----------------|
| **Signal Feed** | Latest AI layoff rumors and confirmed kills | `src/content/signals/*.md` |
| **Dead Pool** | All tracked roles with status, points, predictions | `src/content/signals/*.md` |
| **Kill List** | Archive of confirmed AI replacements (AUTOMATED status) | `src/content/signals/*.md` (filtered) |
| **Cope Corner** | Forum-style rant posts — vent about AI taking your job | `src/content/cope/*.md` |
| **Leaderboard** | "Hall of Prophets" — top predictors ranked | `src/lib/data/leaderboard.ts` (static flavor) |
| **Retraining Board** | Ironic fake job listings for the AI economy | `src/content/retraining/*.md` |
| **About** | Site history, FAQ, how points work, ASCII art | `src/content/pages/about.md` |

## Technical Stack

- **Framework**: SvelteKit (static site generation)
- **Language**: TypeScript
- **Styling**: Plain CSS with CSS custom properties (no Tailwind — era-inappropriate)
- **Content**: Markdown with YAML frontmatter, parsed with `gray-matter` + `marked`
- **Adapter**: `@sveltejs/adapter-static` (fully prerendered)
- **Feeds**: RSS 2.0 (`/rss.xml`), Sitemap (`/sitemap.xml`)

## Built-in Storybook

The site includes a component showcase at `/storybook` (unindexed, not linked from navigation). This is a custom SvelteKit route — not the external Storybook tool — that renders every design token, atom, molecule, and organism with all prop variants. It dogfoods the GeoCities design tokens for its own styling.
