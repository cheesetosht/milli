# milli — Onboarding Design

## Philosophy

The onboarding IS the product demo. With pay-from-day-one ($4/month, no trial, no refunds), every screen must deliver value — either teaching the user something about her body or reflecting something back that makes her feel understood. By the time the paywall appears, the user should think: "I already learned things. The paid product must be even better."

The flow structure: **educate while collecting → reveal personalized insight → paywall → account creation.**

Educational micro-moments come from milli's voice (the companion), not from generic app copy. This means the user is already in relationship with the intelligence before she pays — the onboarding subtly introduces the companion without a "meet your AI!" moment.

---

## Flow Overview

~18 screens, ~3 minutes. Every screen is one question or one moment. Tappable selections, no typing.

```
HOOK (2 screens)
  → CYCLE DATA (4 screens, each teaches)
  → HEALTHKIT BRIDGE (2 screens)
  → ABOUT YOU (5 screens, skippable, each teaches)
  → THE REVEAL (2 screens — personalized insight)
  → PAYWALL (1 screen)
  → ACCOUNT CREATION (1 screen)
  → DASHBOARD
```

---

## Screen-by-Screen Design

### HOOK

**Screen 1 — The Truth**

> Your body changes every week.
> Your energy, your metabolism, your sleep needs, your mood — they all shift with your cycle.
> Most tools treat every day the same.

Visual: warm cream background, serif typography, generous spacing. The text appears with the gentle reveal animation (fade + slight upward drift, staggered by line). No images, no illustrations — just the words doing the work.

Interaction: Tap to continue, or auto-advance after reading time (~3s).

---

**Screen 2 — The Promise**

> milli learns how YOUR body works —
> and gives you a protocol that adapts with it.
>
> Not just stats. Not just tracking.
> A system that understands the system you're living in.

Below the text, a subtle organic wash showing the four pillar colors (sage, amber, lilac, warm rose) bleeding into each other — the visual metaphor for interdependency.

Button: **"Let's start"** (warm, not aggressive)

---

### CYCLE DATA

**Screen 3 — Current Cycle Status**

> Are you currently on your period?

Selections (pill-shaped, tappable):
- Yes, I am right now
- No, not right now
- I'm not sure / irregular

*If "Yes":* → Screen 4 asks when it started
*If "No":* → Screen 4 asks when the last one started
*If "Not sure / irregular":* → Screen 4 adapts (see below)

---

**Screen 4 — Cycle Timing**

*If currently on period:*
> When did this period start?

*If not on period:*
> Roughly when did your last period start?

*If irregular/unsure:*
> That's okay — even a rough guess helps.
> When do you think your last period was?

Input: Date picker with "I really don't know" option at bottom.

**After answering — milli's first micro-teach appears:**

*If she selected a date ~20 days ago:*
> That puts you around day 20. Right now your body has likely just ovulated and is shifting gears — progesterone is rising, which changes how you metabolize food, how deeply you sleep, and what kind of movement serves you best.

*If she's on her period:*
> Day 3 of your period — your estrogen and progesterone are both at their lowest right now. That tired, inward feeling isn't weakness. It's biology asking for recovery.

*If she said "I really don't know":*
> No problem. milli will learn your rhythm as you log. Most patterns clarify within 2-3 cycles. For now, I'll work with what we learn together.

This is the first moment the user feels "this thing already knows something about me." The language is specific, grounded, and slightly surprising.

---

**Screen 5 — Cycle Length**

> How long is your cycle usually?
> (From the first day of one period to the first day of the next)

Input: Horizontal slider, 21-40 days, with "It varies a lot" option.

**Micro-teach after answering:**

*If 28-30 days:*
> A 28-day cycle is often called "textbook" — but even within that range, your phases aren't equal. Your follicular phase (before ovulation) can vary by days, while your luteal phase (after) tends to be more consistent. That variability is one of the things milli tracks.

*If shorter (21-26):*
> A shorter cycle means your phases are compressed — transitions between hormonal states happen faster. This means your body's needs shift more frequently than someone with a longer cycle. milli accounts for that.

*If longer (32-40):*
> A longer cycle often means an extended follicular phase — more time before ovulation. This is common and normal, but it means the "general advice" timed to a 28-day cycle is often wrong for you.

*If "It varies a lot":*
> Variable cycles are more common than people think — and they're one of the things milli is built for. When your cycle length shifts, it changes when your body needs what. I'll adapt as your pattern reveals itself.

---

**Screen 6 — Period Duration**

> How many days does your period usually last?

Input: Tappable options — 2-3 days / 4-5 days / 6-7 days / 7+ days / It varies

**Micro-teach:**

*If 6-7+ days:*
> Longer periods can affect your iron levels and energy in the days that follow. This is one of the interdependencies most trackers miss — your period's length affects how your follicular phase begins.

*If 2-3 days:*
> Short periods aren't always a concern, but they can sometimes signal low estrogen or thin endometrial lining. milli won't diagnose — but it will notice if patterns suggest something worth discussing with your doctor.

---

### HEALTHKIT BRIDGE

**Screen 7 — Wearable Check**

> Do you track your health with any device?

Selections:
- Apple Watch
- Whoop
- Oura Ring
- Fitbit
- Other wearable
- I don't use one

*If any wearable selected → Screen 8*
*If "I don't use one" → Skip to Screen 9*

---

**Screen 8 — HealthKit Priming**

*If Apple Watch or any iOS-connected device:*

> Connecting Apple Health lets milli read your sleep, movement, heart rate, and cycle data automatically — so you don't have to log everything manually.
>
> Your data stays on your device. milli reads it, never stores raw health records on our servers.

Button: **"Connect Apple Health"** → triggers HealthKit permission dialog

Secondary: "Maybe later" (no penalty, no guilt)

*If Whoop:*

> Connecting Whoop gives milli your recovery score, HRV, sleep quality, and strain — context that makes insights much sharper.

Button: **"Connect Whoop"** → OAuth flow

Secondary: "Maybe later"

---

### ABOUT YOU

**Screen 9 — What Brought You Here**

> What's the main thing you want to understand better?

Selections (multi-select, tappable pills):
- Why my energy crashes at certain times
- My mood swings feel unpredictable
- I can't lose weight despite trying
- My periods are painful or irregular
- I want to optimize my fitness
- Brain fog and focus issues
- Sleep problems
- I have PCOS/PCOD
- I'm just curious about my body
- Something else

**Micro-teach after selection:**

*If energy crashes + mood swings selected:*
> Energy and mood are deeply connected to your cycle phase — and to each other. When estrogen drops, serotonin drops with it. When progesterone rises, GABA increases, which can feel like calm or fog depending on context. These aren't separate problems. milli tracks them as one system.

*If PCOS/PCOD selected:*
> PCOS changes the rules. Insulin resistance, androgen levels, and irregular ovulation all interact in ways that make generic health advice not just unhelpful but counterproductive. milli adjusts its protocol for PCOS-specific patterns.

*If weight loss selected:*
> Weight and hormones have a bidirectional relationship — your cycle affects metabolism, and your metabolic health affects your cycle. A calorie deficit that works in your follicular phase can spike cortisol in your luteal phase and stall progress. milli factors this in.

---

**Screen 10 — Known Conditions** *(skippable)*

> Do you have any diagnosed conditions?
> This helps milli interpret your patterns more accurately.

Selections (multi-select):
- PCOS / PCOD
- Endometriosis
- Thyroid condition
- Insulin resistance / pre-diabetes
- Anxiety or depression
- None of these
- Prefer not to say

Small text below: *Skip anything you're not ready to share. You can add this anytime.*

---

**Screen 11 — Birth Control** *(skippable)*

> Are you currently on any form of birth control?

Selections:
- Hormonal pill
- IUD (hormonal)
- IUD (copper/non-hormonal)
- Implant or injection
- None
- Prefer not to say

**Micro-teach:**

*If hormonal method selected:*
> Hormonal birth control changes how your cycle works — it suppresses ovulation and flattens the natural hormonal curve. milli adjusts its interpretation accordingly. Your patterns will look different from someone cycling naturally, and that's expected.

*If copper IUD:*
> A copper IUD doesn't affect your hormones — your cycle runs naturally. But it can make periods heavier, which affects energy and iron levels in the days after. milli accounts for this.

---

**Screen 12 — Movement Style** *(skippable)*

> What does your movement look like these days?

Selections:
- Strength training
- Running / cardio
- Yoga / pilates
- Walking mostly
- Mixed / varies
- Not much right now
- Prefer not to say

**Micro-teach:**

*If strength training:*
> How your body responds to lifting changes across your cycle. Estrogen supports muscle recovery and strength — your follicular phase is often your strongest window. milli will time suggestions to match.

*If "Not much right now":*
> That's a perfectly valid starting point. milli won't push you into a routine — it'll help you find windows where movement feels natural rather than forced.

---

**Screen 13 — What Feels Unpredictable**

> What feels hardest to predict about your body?

Selections (single-select, each one is a common frustration phrased as an experience):
- My energy — great some days, gone the next
- My mood — shifts I can't explain
- My weight — effort that doesn't match results
- My periods — timing, pain, or flow surprises me
- My sleep — can't fall asleep or can't wake up
- My cravings — sudden and intense
- Honestly, all of it

This replaces the free-text screen — same intent (what's your primary frustration?) but tappable and completable in one second. Each option is phrased as something the user recognizes in herself, not as a clinical category.

The selection feeds into the reveal: milli's first insight will reference the specific unpredictability she named and connect it to her cycle phase.

---

### THE REVEAL

**Screen 14 — Building Moment**

Brief pause. The screen shows:

> Processing what you've shared...

Then a subtle animation — the four pillar colors (sage, amber, lilac, warm rose) flowing into each other in an organic wash pattern. Not a loading bar. Not a spinner. A visual metaphor for synthesis.

Duration: 2-3 seconds. Enough to create anticipation without feeling like loading.

---

**Screen 15 — The Personalized Insight**

This is the most important screen in the entire onboarding. It must feel like milli already understands you.

The screen has two parts:

**Part 1 — Your Phase Right Now**

Large serif typography:

> Luteal Phase, Day 5
> *The week before your period*

Below, a mini phase timeline ribbon showing the full cycle with a marker on the current position. The current phase section is highlighted in warm rose.

**Part 2 — What That Means For You Today**

Smaller text, but still generous — this is editorial content, not fine print.

*Example for someone in luteal phase, day 5, who selected energy crashes + strength training + PCOS:*

> Right now, progesterone is peaking. With PCOS in the picture, your progesterone curve might be flatter than average — which means the usual luteal fatigue could hit differently.
>
> Your body is burning more calories at rest this week (~100-300 more than your follicular phase). That afternoon energy crash? Partly biology, partly your body asking for more fuel — not less.
>
> For your strength training: this isn't your peak power window. Lower weights, higher reps, and longer warm-ups will serve you better than pushing PRs right now.

**Part 3 — What Milli Will Do**

> This is day one. As I learn your specific patterns — your sleep, your nutrition, your symptoms — these insights get sharper. Your protocol adapts every week.

The tone is: specific, grounded, slightly surprising, and forward-looking. Never generic. Never could-apply-to-anyone.

**V1 content strategy — broader variants with modifiers:**

The reveal is built from composable blocks, not fully branched scripts:

- **4 base variants** (one per phase: menstrual, follicular, ovulatory, luteal) — each covers what's happening hormonally and what it means for energy, mood, and body. This is the core paragraph.
- **PCOS modifier** — an additional paragraph layered on if PCOS/PCOD was selected. Adjusts the hormonal narrative (e.g., flatter progesterone curve, insulin considerations).
- **Birth control modifier** — adjusts the framing if on hormonal BC (suppressed ovulation, flattened hormonal curve, different pattern expectations).
- **Frustration reference** — one sentence connecting the unpredictability they selected on Screen 13 to their current phase (e.g., "That energy unpredictability you mentioned? In your luteal phase, it's partly progesterone shifting how your body uses glucose.")
- **"Unknown cycle" fallback** — if the user couldn't provide dates, the reveal focuses on general cycle education and what milli will learn as she logs, rather than phase-specific advice.

This gives ~4 base × 3 condition states (none, PCOS, hormonal BC) × 7 frustration references = meaningful personalization from composable pieces, not dozens of unique scripts. The companion takes over specificity from day one.

---

### PAYWALL

**Screen 16 — The Ask**

Top of screen — a summary card:

> **What milli now knows about you:**
> Your cycle pattern, your phase today, your primary concerns, your movement style.
>
> **What milli does with this:**
> A dynamic protocol that adapts to your cycle, your symptoms, and your life — updated as your body teaches it more.

Then the price, stated plainly:

> **₹400/month**
>
> Full access to your adaptive protocol, daily insights, and your milli companion.

Button: **"Start with milli"**

Below the button, small but visible:
> No free trial. No fluff. You're paying for a system that takes your biology seriously.

This is the tone: confident, plain-spoken, no urgency. The lack of a discount or countdown IS the premium signal. milli doesn't need to convince you. The insight you just read either landed or it didn't.

**Annual option** (secondary, below):
> Or ₹3,200/year — save ₹1,600

---

### ACCOUNT CREATION

**Screen 17 — Create Account**

> Let's secure what you've shared.

Options:
- Continue with Apple
- Continue with Google
- Continue with email

Framing: "secure what you've shared" — the account creation protects the data they already invested. Sunk cost working in the right direction.

---

### TRANSITION TO APP

**Screen 18 — Welcome**

A single line from milli:

> I'll get sharper as I learn more about you.
> Your dashboard is ready. Ask me anything.

Transition: the warm cream background of onboarding cross-fades into the dashboard. No hard cut. The onboarding and the app are one continuous experience.

---

## Branching Logic Summary

| If user says... | Then... |
|---|---|
| "I'm not sure" about cycle status | Gentler questions, more "we'll learn together" language |
| "I really don't know" for dates | Skip phase calculation, first insight focuses on general cycle education instead of phase-specific advice |
| PCOS/PCOD selected anywhere | All subsequent micro-teaches and the reveal adjust for PCOS context |
| Hormonal birth control | Phase calculation adjusts, micro-teach explains the difference, reveal acknowledges modified hormonal patterns |
| No wearable | Skip HealthKit entirely, no mention of it |
| Skips conditions/birth control | No penalty, reveal works with available data, companion asks later through natural conversation |
| Free-text frustration provided | Reveal references it if possible; companion uses it in first week |

---

## Micro-Teach Content Principles

1. **Always specific, never generic.** "Progesterone is rising" not "hormones are changing."
2. **Always connects to experience.** "That tired feeling isn't weakness" not "progesterone causes fatigue."
3. **Always reveals an interdependency.** Each teach should connect two things the user thought were separate.
4. **Never prescriptive during onboarding.** Teach, don't instruct. "This affects X" not "You should do X." Prescription comes after payment, through the companion.
5. **Adapts to what was shared.** If she said PCOS, reference it. If she didn't mention it, don't.
6. **Short.** 2-3 sentences max. The onboarding teaches in doses, the app teaches in depth.

---

## Visual Design Notes (inheriting from system.md)

### Visual Register Logic

The visual approach follows the hierarchy logic from the DNA: **feel → understand → act.** Three registers, one governing rule: the visual intensity matches the emotional register of the moment.

**Feel moments** → Photography or rich organic visuals
Used on: hook screens, the reveal, transitions between major sections.
Warm, embodied, sensory — the golden hour register. Cropped, intimate photography of women's bodies (not faces, not fitness content). Backs, hands, shoulders in warm natural light. These moments should make the user feel something before she reads anything.

**Understand moments** → Abstract organic shapes in pillar colors
Used on: micro-teaches, data collection screens, phase education.
The watercolor wash, flowing gradients, the phase ribbon. These visualize the *system* — interdependencies, phases, connections. They support the information without competing with it. Organic blobs of sage, amber, lilac, warm rose that shift and blend as context changes.

**Delight moments** → Illustrative touches
Used on: section completions, the companion's personality showing through, small rewards.
Tiny hand-drawn-feeling details — an organic line that responds to a selection, a small doodle when a section completes. These are rare and earned. They appear and pass. The Plume cat-artifact, I'm-Rich-cat energy.

**The unifying thread:** warm color temperature, organic (never geometric) shapes, and the four-pillar color palette. A photograph and an illustration and an abstract shape all feel like they live in the same world because they share the same warmth and palette.

### Screen-Level Application

- **Screen 1 (Hook — The Truth):** Warm photography — a golden-hour-register image of a woman's body. Intimate, not performative. The text overlays with generous breathing room. The image sets the emotional ground; the words name it.
- **Screen 2 (Hook — The Promise):** The organic pillar-color wash beneath the text — sage, amber, lilac, rose bleeding into each other. Abstract, sensory, the visual metaphor for interdependency.
- **Screens 3-6 (Cycle Data):** Clean, text-forward. Micro-teaches accompanied by subtle organic shapes — a small warm-rose blob that appears when discussing the cycle, a sage-tinted shape for movement connections. These shapes are ambient, not illustrative.
- **Screen 7-8 (HealthKit):** Clean and functional. Device icons if needed, but the visual warmth comes from the cream ground and typography, not from added decoration.
- **Screens 9-13 (About You):** Pill selections tinted with semantic colors. As the user selects options, subtle organic shapes in the corresponding colors appear or shift in the background — the visual field responds to her choices. The screen is quietly alive.
- **Screen 14 (Building Moment):** The four pillar colors flow together in a full-screen organic animation. This is the richest visual moment before the reveal.
- **Screen 15 (The Reveal):** Warm photography returns — a different image from the hook, but the same register. The phase timeline ribbon is the hero data visualization. The background shifts slightly warmer. This screen should feel like arriving somewhere.
- **Screen 16 (Paywall):** No visual departure. Same cream, same typography. The paywall is part of the conversation, not a gate. The only visual emphasis is on the price and CTA button.
- **Screen 17 (Account Creation):** Clean, minimal. The investment is already made — this screen is functional.
- **Screen 18 (Welcome):** A small illustrative touch — a tiny hand-drawn element, a warm doodle, something that says "welcome" with personality. The delight register. Then cross-fade into the dashboard.

### Foundational Visual Rules

- **Background:** Warm cream throughout. No screen-to-screen color changes except the reveal (slightly warmer).
- **Typography:** Questions in sans-serif (functional voice). Micro-teaches in serif (editorial voice — milli speaking). Reveal headline in large serif.
- **Selections:** Pill-shaped, tinted with semantic color where relevant. Sage pills for movement options, amber for nutrition, lilac for rest/mind, warm rose for cycle.
- **Progress:** Subtle top-aligned bar, warm-toned, that fills with the organic wash gradient (sage → amber → lilac → rose as the user progresses). Not a step counter.
- **Transitions:** Gentle cross-fade with slight upward drift between screens. Micro-teaches fade in below the question after answering (the "uncovering" motion).
- **Photography direction:** Cropped, warm light, textured surfaces. Women's bodies in natural settings — stretching, resting, moving. Never stock-photo-smiling-at-camera. The golden hour reference is the north star.
- **No visual clutter:** Every image, shape, and illustration earns its place. If a screen works with just text on cream, it stays that way. Visuals are added for emotional resonance, not decoration.
