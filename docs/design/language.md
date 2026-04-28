# milli — Design Language

## Project Brief

milli is an AI-powered health companion for women that synthesizes the interdependencies of female biology — cycle phase, nutrition, movement, rest, stress, mood — into contextual intelligence. Where existing products track single axes in isolation (calories without cycle awareness, cycles without stress context, sleep without hormonal phase), milli connects them.

The product has two surfaces: an **instrument layer** (dashboard, data, trends) and a **companion layer** (AI agent that converses, flags patterns, suggests actions). The instrument layer makes the body's complex clockwork legible. The companion layer makes it actionable — through natural conversation rather than manual logging, and through proactive awareness rather than reactive lookup.

The core promise is not control over the body — female hormonal systems resist that framing. The promise is **legibility**: you can see what's happening, understand why, and know what to do about it. You're no longer blindsided. The wave still comes, but you can see it forming.

milli is not a replacement for medical professionals. It is not a reproductive health tracker with a chat feature bolted on. It is not a calorie counter that asks for your gender. It is an intelligent system that respects the genuine complexity of female biology and makes that complexity navigable.

**Platform**: React Native (Expo), mobile-first.

### What milli says no to

- **Gamification and guilt mechanics.** No streaks, no shame, no "you missed your goal" notifications. Consistency matters, but the framing is never punitive.
- **Performative masculinity in neutral clothing.** No "crush your goals" energy. No ring-closing dopamine loops designed for static male biology applied to cyclical female biology.
- **Infantilizing femininity.** No pink-everything, no soft-focus reproductive framing, no treating women's health as a sensitivity to be handled gently. Women need results, awareness, and predictability — not softness.
- **Data as afterthought.** Charts and visualizations are not functional necessities to be tolerated. They are the product's intelligence made visible. They deserve the same design attention as any other surface.
- **Therapeutic hand-holding.** milli doesn't ask "how are you feeling today?" with a concerned emoji. It already knows something is off from the data and meets you there without making a scene.


## Audience & Context

### Primary: Curious but overwhelmed

Women who sense their body is trying to tell them something but can't decode the signal. They may have tried multiple apps — a cycle tracker here, a calorie counter there, a sleep app on the side — and found that none of them talk to each other. They're not ignorant; they're under-equipped. They've probably Googled "luteal phase food" or asked ChatGPT about PCOS and gotten generic advice that may or may not apply to their body.

They are **ready to learn** but need the learning to be embedded in action, not presented as a textbook. Education is the entry point — but it has to feel like gaining awareness, not attending a lecture.

**What they need from the design:**
- Complexity made approachable without being dumbed down
- Information that reveals itself progressively — not everything on screen one
- The feeling that the app *understands* what it's showing them, not just displaying data

### Secondary: Knowledgeable but under-tooled

Women who already understand their cycle phases, know about cortisol and insulin responses, have possibly been managing PCOS or other hormonal conditions for years. They don't need education — they need a system that finally keeps up with what they already know. They're frustrated because no tool matches their sophistication.

**What they need from the design:**
- Depth available immediately — no "beginner mode" patronizing
- Data density that rewards expertise
- The companion feeling like a peer, not a tutor

### How they encounter milli

Mobile-first, likely discovered through community (women's health conversations, social media, word of mouth from someone who finally found something that works). First interaction is probably skeptical — they've been let down by health apps before. The design must earn trust quickly, not through promises but through **demonstrated competence**: show them you understand their body's complexity in the first few screens.

### Emotional contract

The user is sharing intimate data — cycle details, mood, stress, gut health, body measurements. This requires:
- **Trust through restraint**: the app doesn't oversell, doesn't celebrate trivially, earns credibility by being specific and right
- **Safety through warmth**: not clinical sterility, but the comfort of a space designed with care — you feel comfortable sharing because the environment respects what you're sharing
- **Quiet awareness**: the app notices patterns without dramatizing them. It meets you where you are without making a scene about getting there


## DNA

### Core Tensions

The opposing forces milli holds in balance. The balance point between these opposites is where the language's character lives.

**1. Rigorous yet alive**
Data, structure, and editorial precision — expressed through organic shapes, warm tones, and natural rhythm. The grid exists, but it breathes. Charts are accurate, but they feel like living things. This is the master tension. It governs everything.

**2. Knowing yet gentle**
The app is often smarter than you about what's happening in your body. It could be clinical about that. Instead, it leads with awareness and lets you come to the conclusion. It highlights "your luteal phase started" without adding "so stop doing HIIT." The intelligence is visible, the prescription is soft.

**3. Feminine yet ungendered**
Warmth, organic form, sensory richness — all feminine qualities expressed through material choices, never through stereotypical signifiers. A man looking at this app wouldn't think "this isn't for me" because of pink. He'd think "this isn't for me" because of what it *does*. The femininity is structural, not decorative.

**4. Intimate yet capable**
This is your journal, your body, your private data — the app respects that intimacy. But it's also a sharp, competent system that processes complex interdependencies. A doctor who remembers your name and your last conversation, not just your chart. Warmth and competence in the same breath.

### Space Philosophy

Space in milli is **breathing room with purpose**. Not minimal-for-minimal's-sake emptiness (cold). Not dense information packing (overwhelming for the curious-but-overwhelmed user). The Plume approach: a considered space where every element has earned its place.

Space *increases* around important moments — a key metric, a phase transition, an insight from the companion. Space *decreases* when information is related and should be read as a group (nutrient breakdown, weekly trend). The rhythm of open-and-dense is how the app communicates hierarchy without shouting.

**The amount of space around something tells you how much attention it deserves.**

### Hierarchy Logic

**The body leads, the mind follows.**

- **Primary — State:** Where you are right now. Cycle phase, today's energy, the single most important thing. The golden hour moment — warm, present, immediate. Large, confident typography. Breathing room.
- **Secondary — Pattern:** What the data reveals over time. Trends, correlations, the companion's insights. The editorial voice — serif, structured, information-rich. Moderate density.
- **Tertiary — Action:** What to do about it. Suggestions, goals, log entries. The coach — clear, specific, uncluttered. Compact but never crowded.

The eye moves: **feel first, understand second, act third.**

### Proportional Signature

milli's proportions favor **generous vertical rhythm with contained horizontal width**. Content cards don't stretch edge-to-edge — they sit within the warm ground with visible margin, like objects placed on a surface rather than painted on a wall. Journal on a table, not app on a screen.

- **Type scale jumps are dramatic** — the difference between a primary number (today's score, cycle day) and body text is unmissable, not incremental. The important number commands the space.
- **Cards have generous internal padding** — content breathes within its container. Nothing touches the edges.
- **Vertical spacing is rhythmic, not uniform** — related items cluster, unrelated items separate. The spacing pattern itself communicates grouping.
- **Warm shadow on cream, not borders** — borders are too rigid for "rigorous yet alive." Elevation is expressed through soft shadow on the warm ground.
