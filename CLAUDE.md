# Roava Digital — Project Context

You are working on Roava Digital, a specialist marketing agency for Roanoke-area roofing, gutter, siding, and exterior contractors. This file is your persistent reference. Read it at the start of every session.

---

## What Roava Is

A lead-generation agency that builds conversion-focused websites and runs local SEO for roofing and exterior contractors in the Roanoke MSA (Roanoke City, Roanoke County, Salem, Vinton, Botetourt, Bedford, NRV). Positioning: the marketing operator who runs the playbook himself, not the agency that sells the playbook.

Founder: DeShea Witcher. 15 years B2B marketing. Currently VP of Marketing at an enterprise software company.

**Audience for the marketing site:** roofing and exterior contractor owners. 35 to 65 years old. Often tradesmen background. Skeptical of marketing speak. Care about phone calls and booked jobs.

**Currently serving:** Blue Ridge NanoGuard (live client, real case study in progress).

---

## Tech Stack (locked)

- **Framework:** Astro 4.x with TypeScript
- **Deployment:** Vercel
- **Image handling:** astro:assets with WebP optimization
- **Fonts:** @fontsource for Montserrat (display), Inter (body), JetBrains Mono (data callouts)
- **Styling:** vanilla CSS with custom properties for tokens. No Tailwind unless explicitly approved.
- **Schema:** JSON-LD inline in pages
- **Sitemap:** @astrojs/sitemap
- **Forms:** Vercel serverless functions for contact, no third-party form service

---

## Design System

### Color Tokens

```css
:root {
  /* Brand */
  --color-brand-teal: #034753;
  --color-brand-teal-hover: #023540;
  --color-brand-teal-active: #012830;
  --color-brand-gold: #C09F40;
  --color-brand-gold-hover: #A88838;
  --color-brand-gold-tint: #F5EDD8;

  /* Surfaces */
  --color-surface-cream: #FAF7F1;
  --color-surface-white: #FFFFFF;
  --color-surface-teal-tint: #E8EFF1;

  /* Text */
  --color-text-primary: #0A1E22;
  --color-text-secondary: #4A5A5E;
  --color-text-tertiary: #7A8588;
  --color-text-inverse: #FAF7F1;

  /* Borders */
  --color-border-subtle: #E8E1D2;
  --color-border-default: #D9CFB8;
  --color-border-strong: #1F3338;

  /* Semantic */
  --color-success: #15803D;
  --color-error: #C53030;
  --color-warning: #B7791F;
  --color-info: #0E5D6B;
}
```

### Typography

```css
:root {
  /* Families */
  --font-display: 'Montserrat', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  /* Scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1.125rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.5rem;
  --text-4xl: 3.5rem;
  --text-5xl: 4.5rem;

  /* Weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 800;
  --weight-black: 900;

  /* Line height */
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
}
```

**Use rules:**
- H1: Montserrat Black, 56-72px, line-height 1.1, letter-spacing -1
- H2: Montserrat ExtraBold, 32-40px, line-height 1.2
- H3: Montserrat Bold, 20-24px, line-height 1.3
- Body: Inter Regular, 18px, line-height 1.625
- Mono: JetBrains Mono for numbers, data, code, pricing callouts

### Spacing

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;
}
```

Section vertical padding: 96px desktop, 64px mobile.
Max content width: 1200px. Reading-width prose: 720px.

---

## Design Style

The site is editorial-minimal with operator energy. Think 37signals confidence meets agency case study site, with restraint as the design principle. The aesthetic should make a Roanoke roofer think "this guy runs a real business" without making him feel out of place. Premium without being precious. Modern without being fashionable.

### Composition rules

- Strict 12-column grid on desktop, single column mobile. No asymmetric or fancy layouts.
- Generous whitespace. The site should feel uncrowded even on a 320px screen.
- Alternating section backgrounds: cream, white, cream, white. One or two teal-background feature sections for emphasis (typically CTASection, optionally ProofBar).
- Single hero visual. No carousels, no parallax, no scroll-triggered animations.
- No card-everywhere layouts. Cards exist for specific patterns (PricingCard, Card component for distinct items). Body content sits on the section background directly.

### Typography behavior

- Hero H1: Montserrat Black, 72px desktop / 56px mobile, line-height 1.1, letter-spacing -1. Confident and large.
- Section H2: Montserrat ExtraBold, 40px desktop / 32px mobile, with significant vertical space above.
- H3: Montserrat Bold, 24px.
- Body: Inter Regular, 18px, line-height 1.625. Reading-width capped at 720px for prose.
- Mono (JetBrains Mono): used for numbers, stats, pricing displays, code snippets, and callouts containing data. This monospace treatment is the operator-energy tell. Use it deliberately, not as decoration.

### Color usage rules

- **Teal is the workhorse.** Headings, body text on light backgrounds, primary buttons, links, footer background. Use freely.
- **Gold is reserved.** Use only for: primary CTAs, key data points, chevron logo, hover states, accent rules, "RECOMMENDED" badges. If everything is gold, nothing is gold.
- **Cream is the primary section background.** Provides warmth and prevents the site from feeling sterile-white.
- **White is the contrast section background.** Use to break up consecutive cream sections.
- **Teal-tint** is for subtle callout backgrounds and highlight cards only.
- **Full teal background** is for emphasis sections only (CTASection, occasionally ProofBar). On teal, use cream text and the inverse logo variant.

### Photography and visuals

- Real photography only. Roanoke-area roofing photos, real GBP screenshots, real Search Console data, real DeShea headshot, real client work photos.
- Zero stock photography. Zero generic illustrations. Zero "happy customer in front of a house" clichés.
- Hero images: full-bleed where layout allows. No framed hero photos.
- Screenshots: real product screenshots with no fake data. Place on cream cards with subtle border and light shadow.
- All images optimized via astro:assets, WebP with PNG fallback, lazy-loaded except hero.

### Numbers as visual elements

- Treat important numbers as design features. Big, monospace, often paired with short label text.
- Examples: "$15K average job. One a quarter pays the year." or "8-12 reviews/month within 90 days."
- Stat callouts: cream cards with thick (4-6px) gold left border, monospace number, sentence-case label below.
- Pull-quote treatment for the strongest data points: large monospace number above a single-line caption.

### Patterns to AVOID

- Gradient backgrounds (dates the design).
- Glassmorphism, frosted cards, blur effects (tech-bro aesthetic).
- Animated counters, scroll-triggered animations, parallax (gimmicky).
- Stock illustration libraries (cheap-feeling).
- Multiple accent colors beyond teal and gold (dilutes the brand).
- "Trusted by these companies" logo clouds (Roava does not have enough clients yet).
- Card-on-card layouts where every section is a card (lazy design).
- Hardhat photography, construction-industry kitsch, "battle-tested" language pairings (undermines the agency positioning).
- Carousels (already banned in component patterns).

### Reference sites for visual direction

- basecamp.com: restraint and confidence
- linear.app marketing pages: operator energy with clean grid
- stripe.com/atlas: editorial mixed with data
- pitch.com marketing pages: confident modern with restrained accent color

---

## Voice Rules (CRITICAL — applies to all generated content)

- **Casual-professional.** Sentences under 20 words wherever possible.
- **Paragraphs 1-3 sentences.** No paragraph over 4 sentences. Split or convert to bullets if needed.
- **Plain language.** 7th-grader reading level.
- **Numbers-grounded.** Every abstract claim gets anchored to a number, name, or scenario.
- **No em dashes (—) anywhere.** Use periods, colons, sentence breaks. En dashes (–) sparingly, only for numeric ranges.
- **No hedging, no corporate filler.**
- **First and second person freely.** "You'll run into this," "I've seen contractors do this."
- **Take positions.** Say when something is overhyped, brittle, or harder than vendors claim.
- **Specific scenarios.** "A Roanoke roofer with 6 trucks doing $1.2M annual revenue" rather than "imagine a contractor."
- **Sentence fragments for emphasis.** When it fits. Like this.
- **Test every sentence:** would a Roanoke roofer nod, or roll their eyes?

---

## Banned Words and Phrases

Scan every output. Replace each hit. Non-negotiable.

### Banned verbs
delve, underscore, showcase, embark, unveil, unlock, unleash, leverage, harness, foster, navigate (metaphorical), streamline, transcend, weave, encompass, strive, augment, facilitate, align (filler), enhance, boast, empower, elevate, optimize (unless technically specific), transform, resonate

### Banned adjectives
crucial, pivotal, intricate, comprehensive, meticulous, robust (unless real system robustness), seamless, dynamic, innovative, transformative, invaluable, exemplary, thought-provoking, vibrant, ever-evolving, cutting-edge, multifaceted, nuanced (filler), unparalleled, profound, remarkable, holistic, captivating, majestic, fascinating

### Banned nouns
realm, landscape, tapestry, journey (metaphorical), insights (standalone), testament, synergy, paradigm, ecosystem (unless literal), game-changer, kaleidoscope

### Banned adverbs and transitions
meticulously, notably, particularly (filler), additionally (filler), furthermore, moreover, accordingly, undoubtedly, certainly, seamlessly, strategically, effectively, efficiently, comprehensively

### Banned phrases
- "It's important to note that"
- "It's worth noting"
- "A testament to"
- "Plays a crucial role"
- "In today's fast-paced world"
- "In the ever-evolving landscape of"
- "In the realm of"
- "Navigating the complexities of"
- "A rich tapestry of"
- "At the heart of"
- "When it comes to"
- "Deep dive"
- "Shed light on"
- "Pave the way"
- "Unlock the potential"
- "Harness the power"
- "At the forefront of"
- "In conclusion" (as section opener)
- "In summary" (as section opener)
- "Ultimately" (as standalone closer)
- "As we've explored"
- "Moving forward" (filler transition)
- "The future of X is bright"
- "By embracing X, we can"

### Roofing-niche specific tells to avoid
- "Weatherize"
- "Battle the elements"
- "Your dream home"
- "Peace of mind" (as standalone claim)
- "Quality craftsmanship" (without specifics)
- "Family-owned and operated" (when implied as differentiator alone)

### Banned structural patterns
- NEVER open a section with a rhetorical question.
- NEVER use "Not just X — it's Y" or "It's not about X, it's about Y" structures.
- NEVER use the rule of three for adjectives ("clear, concise, and compelling").
- NEVER use "From X to Y" range clichés.
- NEVER soften every opinion immediately.
- NEVER use sycophantic transitions ("Great point," "Absolutely," "Certainly").
- NEVER restate the heading verbatim as the first sentence of that section.
- NEVER end every section with a pivot sentence teeing up the next section.

### Self-check before delivering content
1. Regex scan for every banned word above. Replace each hit.
2. Em dash count must be 0.
3. No banned phrase appears anywhere.
4. No banned structural pattern present.

---

## AEO/GEO Requirements (every page)

Every page is built to be readable by humans AND extractable by Google AI Overviews, Perplexity, ChatGPT, and Claude.

- **Atomic answers after every H2.** First 1-2 sentences after each H2 directly answer the question implied by the heading. Self-contained, quotable out of context.
- **Direct-answer lead paragraph** on every page. The first prose paragraph after the H1 (it may follow a short hook subhead) is a self-contained, quotable answer to the question the page targets. 40-80 words, plain prose, NO box/border/background and NO "Quick answer:" label. On `.astro` pages use `<p class="hero-lead">`; in blog markdown it is just the post's opening paragraph. Do NOT reintroduce the old boxed blockquote treatment.
- **FAQ section** on every substantive page. 4-6 question/answer pairs. Questions as H3s phrased the way real users type them. Answers 40-80 words, direct and self-contained.
- **Named entity consistency.** Full names on first mention. "Roava Digital" then "Roava." "Google Business Profile" then "GBP." "Roanoke, Virginia" then "Roanoke."
- **Definitions where useful.** Format: bold term, then 1-sentence plain-English definition.
- **Comparison tables** for any X vs Y or decision moment.
- **Schema markup placeholder block** at end of every page.

---

## Schema Markup (required on every page)

Every page MUST include relevant JSON-LD schema. Standard set:

- **Organization schema** (site-wide, in Layout component)
- **LocalBusiness schema** (homepage and location pages)
- **WebSite schema** with SearchAction (Layout component)
- **Service schema** (each service page)
- **FAQPage schema** (any page with FAQ section)
- **BreadcrumbList schema** (every page except home)
- **Person schema** for DeShea (About page, founder section)
- **Article schema** for blog posts

---

## Site Architecture

```
/                                  Home
/services/
  /roofing-seo
  /gutter-marketing
  /siding-marketing
  /window-installer-marketing
  /exterior-coating-marketing
  /local-seo
  /web-design
  /google-ads
/locations/
  /roanoke
  /salem
  /vinton
  /botetourt-county
  /bedford-county
/case-studies/
  /blue-ridge-nanoguard
/about
/pricing
/contact
/free-audit
/blog/[slug]
/legal/privacy
/legal/terms
```

301 redirects (in vercel.json):
- `/services/ppc-paid-media/` → `/services/google-ads`
- `/services/seo-optimization/` → `/services/roofing-seo`
- `/services/website-design-and-development-services/` → `/services/web-design`

All other old URLs (28 industry-news posts, 12 Nov 2025 AI posts, all other generalist service pages) return 410 Gone.

---

## Component Patterns

### Layout components
- `BaseLayout.astro` — HTML shell, fonts, global CSS, base meta, schema
- `MarketingLayout.astro` — extends Base, adds nav and footer
- `BlogLayout.astro` — extends Marketing, adds article-specific meta

### Section components
- `Hero.astro` — H1, subhead, primary CTA, secondary CTA, optional visual
- `Section.astro` — wrapper with consistent vertical padding and max-width
- `Card.astro` — generic card with optional icon, title, body, link
- `CTASection.astro` — final-CTA pattern with high-contrast background
- `FAQ.astro` — accepts array of `{question, answer}` props, renders with proper schema

### UI primitives
- `Button.astro` — primary (teal bg, gold hover), secondary (gold bg), ghost
- `Callout.astro` — labeled blockquote (Pro Tip, Reality Check, Insider Tip, From the Trenches)
- `PricingCard.astro` — name, price, description, feature list, CTA
- `Testimonial.astro` — quote, attribution, optional avatar

### Conventions
- All buttons are real `<button>` or `<a>` elements with proper roles
- All images have descriptive alt text. No "image of X" prefix.
- All links have descriptive anchor text. No "click here" or "learn more" alone.
- All focus states visible (3px gold outline at 2px offset).
- All sections use semantic HTML: `<section>`, `<article>`, `<header>`, `<footer>`.

---

## SEO Defaults (every page)

- `<title>` tag: 50-60 chars, primary keyword first, ends with "| Roava Digital"
- Meta description: 140-160 chars, includes primary keyword and a CTA
- Canonical URL set on every page
- Open Graph: og:title, og:description, og:image, og:url, og:type
- Twitter Card: summary_large_image
- Sitemap auto-generated via @astrojs/sitemap
- robots.txt allowing all, sitemap referenced
- Heading hierarchy strict: exactly one H1 per page, no H2 before H1

---

## Performance Targets

- **Lighthouse mobile (production build):** Performance 95+, Accessibility 100, Best Practices 100, SEO 100
- **Core Web Vitals:** LCP < 1.5s, CLS < 0.05, INP < 100ms
- **Bundle size:** Initial JS payload < 50KB
- **Image strategy:** All images via astro:assets, WebP with PNG fallback, lazy-loaded except hero
- **Font strategy:** Preload Montserrat 800, font-display: swap on everything else

---

## Conventions

- **File naming:** kebab-case for files and folders
- **Component naming:** PascalCase
- **CSS class naming:** BEM-light, scoped via Astro
- **Content collections:** use for blog and case studies with TypeScript schemas
- **Git commits:** conventional commits format (`feat:`, `fix:`, `chore:`, `content:`)
- **Branch strategy:** trunk-based, deploy from main, preview deploys per PR

---

## What NOT to Do

- **NEVER** name the specific enterprise company DeShea works for in customer-facing copy. Refer only as "an enterprise software company" or similar generic framing. This is a personal/professional boundary that must be respected across all generated content.
- **NEVER** mention Astro, Vercel, or any specific tech stack in customer-facing copy. Contractor audiences don't know what these are. Translate technical wins into customer-readable benefits: "fast load times," "mobile-optimized," "secure hosting."
- **NEVER** use em dashes anywhere. Code comments, content, commit messages, alt text. Nowhere.
- **NEVER** add stock photography or generic illustration libraries.
- **NEVER** add carousels, auto-rotating sliders, or hero videos.
- **NEVER** fabricate testimonials, stats, client names, ROI numbers, or case study results.
- **NEVER** add features, animations, or design flourishes not directly requested.
- **NEVER** install JavaScript libraries without explicit approval.
- **NEVER** use the words "weatherize," "dream home," or "your home's curb appeal."
- **NEVER** generate filler content to hit a word count.
- **STOP and ask before:** changing brand colors, modifying design tokens, installing unexpected dependencies, deleting files.

---

## Sourcing Rules (for content)

- Only cite statistics, studies, or sources verified via web search.
- If a number or claim is uncertain, mark `[verify before publishing]`.
- Never fabricate client names, ROI numbers, vendor pricing, or platform release dates.
- Never invent Reddit quotes, usernames, threads, or community posts.
- Use Blue Ridge NanoGuard as a current-client reference but never invent results numbers.
- Use real Roanoke geographic specifics (storm patterns, neighborhoods) but never invent specific addresses, client names, or revenue figures.

---

## Output Discipline

After each significant change, output:
- ✅ [what was completed]
- ⚠️ [what needs DeShea's input]
- 🔍 [what should be verified before launch]

Keep these tight. DeShea wants the work and the flags, not a victory lap.
