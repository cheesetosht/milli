# milli — Design System

## Typography Behavior

### The dual voice: serif + sans-serif

milli speaks in two typographic registers, and the switch between them is meaningful.

**Serif** is the *editorial voice* — authority, warmth, considered knowledge. Used for:
- State-level information (cycle phase names, section headers that name what's happening)
- The companion's insights and observations
- Affirmation-style goal framing ("I will... so that I can become...")
- Large display numbers (cycle day, health scores, key metrics)

**Sans-serif** is the *functional voice* — clear, modern, unobtrusive. Used for:
- Body text, descriptions, explanations
- UI labels, navigation, buttons
- Data labels on charts
- Timestamps, metadata, secondary information

A card might have a serif headline ("Luteal Phase, Day 3") with sans-serif body text explaining what that means. The shift in typeface mirrors the shift from *feeling* to *understanding* in the hierarchy logic.

### Scale behavior

- Primary numbers are dramatically large — the first thing your eye lands on
- Section headers are confident but not shouting — medium-large serif
- Body text is comfortable reading size — never cramped
- The scale *compresses* inside dense contexts (nutrient tables, weekly grids) and *expands* in state moments (dashboard hero, phase transition)

### The highlight mechanic

Key words within sentences can be underlined or background-highlighted in a soft accent color. This is how the companion marks what matters within a longer observation. Not bold (too aggressive), not italic alone (too subtle) — a gentle color underline that says "this is the part to notice." Borrowed from the affirmation reference.


## Color Relationships

### The ground: warm cream

Not white. Not beige. A warm off-white that feels like natural paper or linen. This is the base reality of every screen. Everything else sits *on* this warmth.

### The semantic palette — colors that mean something

Colors map to the four pillars and carry consistent meaning:

- **Sage/green** — Movement. The body in motion. Botanical, alive.
- **Amber/warm gold** — Nutrition. Nourishment, warmth, the golden hour palette. Honey, grain, sustenance.
- **Lilac/soft purple** — Rest & Mind. The reflective, inward-facing pillar. Calm without being sleepy.
- **Warm rose** — Cycle/Hormonal. Not Flo-pink. A dusty, mature rose that acknowledges the body without reducing it to reproduction. Dried flowers, not bubblegum.

These four always appear in the same roles. Over time, the user learns the color language unconsciously.

### The depth axis

Each semantic color exists on a light-to-dark spectrum:
- **Light** (tint on cream) — background fills, subtle categorization
- **Medium** (the color itself) — accents, highlights, chart elements
- **Deep** (dark warm version) — emphasis moments, deep-dive territory

milli can go darker for evening/rest content or richer for emphasis without introducing new colors.

### What's NOT in the palette

- Pure black — text uses warm very-dark brown/charcoal
- Pure white — the lightest tone is always warm
- Primary blue — too corporate, too tech
- Bright red — too alarming; urgency uses the deep end of warm rose
- Neon anything — nothing synthetic


## Compositional Logic

### Cards on a surface, not panels on a screen

Content lives in cards that sit on the warm cream ground with soft shadow — objects on a table.

- Generous internal padding (content never touches edges)
- Rounded corners (12-16px radius — enough to soften without looking like a toy)
- Subtle warm shadow (slightly above the surface, not floating)
- Optional tinted backgrounds (sage-tinted for movement, amber-tinted for nutrition)

### The journal metaphor governs layout

- Content scrolls vertically like pages in a journal
- Horizontal scrolling is used sparingly — only for time-based sequences (week view, phase timeline) where moving through time is literal
- Full-bleed elements are rare and intentional — reserved for phase transitions or the companion's focused insights

### Density zones

- **Hero zone** (top of screen): sparse, one big idea, maximum breathing room. State lives here.
- **Insight zone** (middle): moderate density, cards with mixed content types. Patterns live here.
- **Action zone** (bottom/contextual): compact, clear, functional. Actions live here.


## Visual Elements

### Lines

Lines are *quiet connectors*, not hard dividers.

- **Separator lines**: thin (0.5-1px), warm-toned (not grey), often replaced by spacing alone. Use only when spacing isn't enough.
- **Trend lines**: smooth curves, never jagged. Slight thickness (2-3px) with rounded caps. The body's data is cyclical and continuous.
- **Underline accents** (the highlight mechanic): semantic colors at medium opacity, sitting under the text baseline.
- **Connection lines** (linking related data or showing phase boundaries): dashed or dotted in warm tones — gentle suggestions of relationship.

### Shapes

Organic geometry — structured forms with softened edges.

- **Circles and rounded rectangles** are the primary containers. No sharp rectangles, no complex polygons.
- **The phase ring**: if using a circular cycle visualization, segments should be organic — like watercolor bleeding into sections, not hard-edged pie slices. Colored by phase using the warm rose spectrum.
- **Organic background shapes**: soft, amorphous warm shapes that add visual warmth without demanding attention. The golden hour light pattern. Decorative but never busy.
- **Pill shapes**: for tags, labels, phase indicators. Fully rounded ends, tinted semantic color background, small text.

### Graphs & Data Visualization

milli's most critical visual surface. Data is a first-class design experience.

**Trend charts**
Smooth curves on warm ground. Fill beneath the curve uses a gradient from semantic color to transparent cream. The area under the curve is a landscape, not a data fill. Grid lines are nearly invisible (5-10% opacity) or absent — let the curve speak.

**Cycle overlay**
A horizontal band behind charts showing phase colors as a faded watercolor wash. This contextualizes any metric against the cycle. Weight chart, sleep chart, energy chart — all share the same subtle phase backdrop so patterns become visible.

**Bar/column charts**
Bars have generous rounded tops and sit on warm ground. They feel like gentle hills, not rigid columns. Semantic color fills.

**Radial/ring charts**
For holistic scores (today's overall state). Organic segments with semantic colors. Center holds the score in large serif numerals. The ring tells the story; the number tells the headline.

**Scatter/correlation views**
For the knowledgeable user exploring patterns. Dots are warm, sized for touch, with soft glow on active selection. Connection trends shown as gentle gradient bands, not sharp regression lines.

**Phase timeline**
Horizontal scrollable strip showing the cycle as a flowing ribbon of color. Current day marked but not aggressively. Past days show small dots for logged data. The backbone visualization — always accessible, always contextualizing.

**Micro-visualizations**
Small, inline data moments within cards. A tiny sparkline for a week's trend. A small segmented bar for macronutrient ratio. Handwritten annotations in a journal margin — present but not dominant.

**Data viz principles:**
- Always smooth, never jagged
- Always warm-toned, never grey-scale
- Always contextualized against cycle phase when relevant
- Labels are minimal — shape tells the story, touch reveals details
- Animation feels like *revealing*, not *building* (no bars growing from zero — they appear as if uncovered)

### Icons

- Line-style, not filled. Warm stroke color (dark brown-charcoal, not black). 1.5-2px stroke weight.
- Slightly rounded joins and caps — matching organic-geometry principle
- Pillar icons (movement, nutrition, rest/mind, cycle) are distinct and immediately recognizable
- Lean abstract/symbolic: a leaf for nutrition rather than a fork, a wave for cycle rather than a calendar

### Dividers & Separators

- Prefer spacing over lines
- When a line is needed: thin, warm, short — doesn't span full width, leaving edges open. A suggested boundary, not a wall.
- Section transitions can use a subtle background warmth shift (slightly deeper cream) rather than a line — the Plume half-wall approach.

### Interactive States

- **Pressed/active**: element sinks slightly (subtle scale down + shadow reduction). Physical, not digital.
- **Selected**: soft semantic-color background tint. Not a hard border.
- **Companion speaking**: left-edge color bar in lilac, or subtle background warmth shift. Not a chat bubble. An annotation in the margin of your journal.


## Motion Meaning

Motion communicates *organic state change*, not achievement or gamification.

- **Screen transitions**: gentle cross-fade with slight upward drift. Not sliding panels. Content *arrives*, doesn't slam in.
- **Data appearing**: fade in with slight scale-up (95% to 100%), staggered by ~50ms. The effect is *uncovering*.
- **Phase transitions**: phase color washes in slowly (1-2s). The biggest motion moment — your body has shifted, the app acknowledges it.
- **Companion insights**: soft downward settle, like a note placed on a table. Quiet arrival.
- **Loading/refresh**: gentle breathing pulse in warm ground color. The app is *thinking*, not loading.
- **Celebration**: brief warm bloom of color — golden hour light expanding momentarily. Not confetti. Light.

**What motion never does:**
- Bounce or spring (too playful as default)
- Shake or vibrate for errors (too aggressive)
- Slide-from-right for forward navigation (too iOS-mechanical — milli feels like its own thing)


## Rule Breaks

Where milli deliberately violates its own grammar.

1. **The companion can break typographic rules.** An important insight can use a single line of larger serif text that interrupts normal hierarchy — a pull quote. "Pay attention, this one matters."

2. **Playful moments in the margin.** Occasionally, small illustrative touches appear. A tiny hand-drawn annotation, a warm doodle-style icon. Plume-cafe, I'm-Rich-cat energy. Easter eggs, not features. They appear when the user has done something worth noticing.

3. **Dark warmth for depth.** Certain deep-dive views (detailed cycle analysis, multi-week correlations) shift to a darker warm ground. This signals: you've gone deeper, the information is richer. The knowledgeable user's reward.
