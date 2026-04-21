# milli -- Complete UX Design Brief for Claude Design

## Your Role

You are designing the complete UX for **milli**, a mobile app (Expo / React Native) that serves as a hormonal intelligence companion for women, with a specific focus on PCOS. You are not designing a period tracker, a calorie counter, or a generic health chatbot. You are designing the first product that translates the complex clockwork of female hormonal biology into daily, actionable, personalized intelligence.

Think of milli as a translator between a woman's body and her daily life. The app's core promise: "Here's what's true for your body type right now."

---

## Design System Foundation

### Color Palette

Build the entire visual language from this palette. These are not suggestions -- use these exact hex values as the foundation.

- **Primary dark** `#402E2A` -- deep warm brown. Use for primary text, headers, high-contrast elements. This grounds the entire design in warmth and intelligence, not clinical sterility.
- **Primary accent** `#684551` -- muted plum. Use for active states, selected elements, key interactive components, the cycle phase indicator. This is the signature color -- sophisticated, feminine without being pink, grounded.
- **Warm rose** `#CEA0AE` -- soft dusty rose. Use for secondary UI elements, cards, soft backgrounds, gentle emphasis. Not bubblegum pink -- this is warm, mature, human.
- **Soft green** `#9CD08F` -- sage/spring green. Use for positive states, "on track" indicators, nature-connected accents. Represents vitality and growth, not clinical "success."
- **Light base** `#D5B0AC` -- warm blush neutral. Use for backgrounds, surface colors, breathing space. This replaces white -- the app should never feel cold or stark.

**Background treatment:** The app background should be a very light tint derived from `#D5B0AC` (perhaps 10-15% opacity over white) so screens feel warm without being heavy. Cards and elevated surfaces use white or near-white with warm undertones.

**What this palette does NOT include:** No clinical blue. No hot pink. No neon anything. No pure black (use `#402E2A` instead). No pure white for large surfaces (always warm it slightly).

### Typography Hierarchy

- **Display / Hero text:** Large, confident, warm. Used sparingly for onboarding statements and weekly synthesis headlines. Consider a rounded sans-serif or humanist sans-serif with personality (like Plus Jakarta Sans, DM Sans, or similar). Weight: Semi-bold to Bold. Size: 28-32pt.
- **Section headers:** Clear, authoritative but not aggressive. Weight: Semi-bold. Size: 20-24pt.
- **Body / Insight text:** Highly readable, conversational. This is where most of the app's intelligence is communicated. Weight: Regular. Size: 15-17pt. Line height must be generous (1.5x+) because users will read multi-sentence insights.
- **Supporting / Meta text:** Phase indicators, timestamps, labels. Weight: Medium. Size: 12-13pt. Color: `#684551` or `#402E2A` at reduced opacity.
- **Chat text:** Slightly smaller than body, optimized for conversational flow. Size: 15-16pt.

**Typography principle:** Every screen is a reading experience. The app communicates through language, not icons. Typography must invite reading, not create walls of text.

### Spacing and Layout Philosophy

- **Generous whitespace.** This app must breathe. It communicates complex biological information -- visual clutter is the enemy.
- **Card-based layout** for the 4 pillars and insights. Cards should have rounded corners (16-20px radius), subtle shadows or borders using palette colors, and enough internal padding (20-24px) that content never feels cramped.
- **Thumb-zone navigation.** Primary actions (chat button, pillar cards, tab navigation) must be in the lower two-thirds of the screen. The top third is for status/context information.
- **Single-column layout** throughout. No grids, no dashboards, no complex spatial arrangements. This is a mobile app used one-handed, often while tired or distracted.
- **Progressive scroll.** Long content flows vertically with clear section breaks, not paginated or tabbed into oblivion.

### Iconography

- **No medical iconography.** No stethoscopes, no pill icons, no heart rate monitors, no clinical crosses.
- **Organic, simple line icons.** Think: a leaf for nutrition, a gentle wave for movement, a moon for rest, a small circle/mandala for mind.
- **The cycle phase indicator** should be abstract and elegant -- not a uterus diagram. Consider a simple circular progress indicator or a gentle wave that shows position in the cycle.

### Animation and Motion

- **Transitions between screens:** Gentle horizontal slides or soft fades. Nothing bouncy or playful -- this is calm and grounded.
- **Card interactions:** Subtle scale (1.02x) on press, gentle elevation change.
- **Chat messages:** Smooth slide-up for new messages, typing indicator that feels organic (pulsing dots using `#684551`).
- **Phase transitions:** When the app detects a phase change, a very subtle background color warmth shift (barely perceptible) that makes the whole app feel alive.
- **Onboarding transitions:** Each step should feel like turning a page in a conversation, not clicking "next" on a form.

---

## Screen-by-Screen Design Specifications

### Screen 1: Splash / Welcome

**Purpose:** First impression. Set the emotional tone. This is not a medical app. This is a companion who understands.

**Layout:**
- Centered content, vertically balanced
- milli wordmark/logo at center. The name "milli" should be lowercase, warm, approachable. Consider letter-spacing that gives it room to breathe. Color: `#402E2A` on the warm background.
- Below the wordmark: a single line of text that communicates the promise. Not a tagline -- a statement.
- A single CTA button at the bottom: "Let's begin"

**Copy:**
- Wordmark: `milli`
- Subline: `your body has a language. let's learn to listen.`
- CTA: `let's begin`

**Design notes:**
- No illustrations of women, no abstract body shapes, no medical imagery.
- The background should be the warm base color (`#D5B0AC` at ~15% on white). The whole screen should feel like opening a journal, not launching a medical app.
- Consider a very subtle, slow-moving gradient or gentle particle effect using palette colors to give the screen a sense of life without being distracting.

---

### Screen 2-7: Onboarding Flow

**Critical design principle:** This is NOT a form. This is the beginning of a relationship. Each screen is a moment in a conversation. The app is listening, not interrogating.

**Emotional arc of the onboarding:**
1. Warmth and welcome (we see you)
2. Gentle curiosity (tell us about yourself)
3. Empathetic acknowledgment (your symptoms are real, and they make sense)
4. Quiet confidence (we already understand something about you)
5. The reveal -- the "aha" moment (here's something true about your body right now)

**Universal onboarding elements:**
- A thin, warm progress indicator at the top -- not a numbered stepper. A continuous line that fills gradually with `#684551`. No "Step 2 of 6" -- this is a conversation, not a process.
- A "back" gesture (swipe or subtle back arrow) but no prominent back button. Forward momentum is the design intent.
- Each screen transition should feel like the app is gently continuing a thought, not loading a new form.

---

#### Onboarding Screen 1: Name + Connection

**Purpose:** Break the ice. Make it personal immediately.

**Layout:**
- Upper portion: conversational text, left-aligned, large display typography
- Lower portion: single text input field, warm-styled, with a soft border in `#CEA0AE`
- Bottom: continue button

**Copy:**
- Header: `hi, i'm milli.`
- Body: `i'm here to help you understand your body -- not just track it. let's start with the basics.`
- Input label: `what should i call you?`
- Input placeholder: `your name`
- CTA: `nice to meet you, [name]` (button text updates dynamically as user types)

**Interaction notes:**
- The CTA button should remain disabled/muted until the user types a name, then it transitions to active state with a gentle animation.
- When the user types their name and the CTA updates to include it, this is the first moment of personalization -- it should feel small but warm.

---

#### Onboarding Screen 2: Age + Condition

**Purpose:** Understand baseline. The condition question is asked with care, not clinical bluntness.

**Layout:**
- Conversational text addressing the user by name
- Age: a simple number input or scroll picker, not a dropdown. Styled warmly.
- Condition: 3-4 tappable options, pill-shaped, using `#CEA0AE` for unselected and `#684551` for selected

**Copy:**
- Header: `[name], tell me a little about where you are.`
- Age label: `how old are you?`
- Condition intro: `do any of these apply to you?`
- Options: `PCOS / PCOD`, `endometriosis`, `thyroid condition`, `not sure, but something feels off`, `none of these`
- Small supporting text below options: `no judgment here. this helps me understand what your body might be navigating.`
- CTA: `continue`

**Design notes:**
- The "not sure, but something feels off" option is critically important. Many women suspect something but don't have a diagnosis. This option validates that feeling. Style it the same as the clinical options -- it's equally valid.
- Multiple selections should be allowed.

---

#### Onboarding Screen 3: Cycle Information

**Purpose:** Understand where she is right now. This determines the immediate personalization.

**Layout:**
- Conversational framing
- Last period date: a friendly date picker (not a calendar grid -- more like a "how many days ago" slider or a simple date selector)
- Cycle length: a horizontal slider or simple number input with common range highlighted (24-35 days), with an option for "it's irregular / I don't know"

**Copy:**
- Header: `let's understand your rhythm.`
- Body: `your cycle isn't just your period -- it shapes your energy, mood, metabolism, and sleep across the entire month.`
- Last period label: `when did your last period start?`
- Helper text: `a rough estimate is fine.`
- Cycle length label: `how long is your cycle usually?`
- Irregular option: `it's unpredictable` (this is a tappable toggle)
- Helper text for irregular: `that's actually really common, especially with PCOS. we'll work with what your body tells us.`
- CTA: `continue`

**Design notes:**
- If the user selected PCOS on the previous screen and then taps "it's unpredictable" here, the helper text response ("that's actually really common, especially with PCOS") creates a moment of feeling understood. This is intentional.
- The "I don't know" option should never make the user feel inadequate. The copy should normalize uncertainty.

---

#### Onboarding Screen 4: Symptoms

**Purpose:** This is the emotional peak of onboarding. Many women have never been asked these questions in a way that felt like someone actually wanted to listen. The symptom selection should feel like relief -- "finally, someone is asking the right questions."

**Layout:**
- Empathetic header text
- A grid or flowing layout of tappable symptom chips/pills
- Each chip is a warm, rounded rectangle. Unselected: light background (`#D5B0AC` at 30%), warm border. Selected: filled with `#684551`, white text.
- Allow multiple selections. No limit.
- A small counter or acknowledgment that appears as more symptoms are selected

**Symptoms list (these exact items):**
- `low energy`
- `mood swings`
- `anxiety`
- `brain fog`
- `bloating`
- `acne`
- `hair loss`
- `weight plateau`
- `poor sleep`
- `irregular periods`
- `painful periods`
- `sugar cravings`
- `irritability before periods`

**Copy:**
- Header: `what's been showing up for you?`
- Body: `these are real symptoms with real biological causes. selecting them helps me connect the dots for you.`
- As user selects 3+: a gentle text appears below: `i hear you. these are connected in ways that will start making sense.`
- As user selects 5+: text updates to: `you're dealing with a lot. that takes strength. let's figure this out together.`
- CTA: `continue`

**Design notes:**
- The dynamic acknowledgment text is crucial. It's the app's first act of empathy -- not just collecting data, but responding to what the user is sharing.
- The symptom chips should have enough spacing that selecting one doesn't feel cramped or form-like.
- Consider a very subtle haptic feedback on each selection (note for developers).

---

#### Onboarding Screen 5: Primary Goal

**Purpose:** Understand her motivation. This shapes the protocol weighting.

**Layout:**
- Larger tappable cards (not chips -- these are bigger decisions). Each card has a short title and a one-line description.
- Single selection.
- Cards are stacked vertically with generous spacing.

**Goal options (as cards):**
1. Title: `understand my body` / Description: `i want to know why i feel the way i do`
2. Title: `manage my weight` / Description: `i want cycle-aware guidance, not generic calorie counting`
3. Title: `improve my energy` / Description: `i'm tired of being tired`
4. Title: `balance my hormones` / Description: `i want to work with my cycle, not against it`
5. Title: `feel less anxious` / Description: `i want to understand what's driving my mood`

**Copy:**
- Header: `what matters most to you right now?`
- Body: `we'll focus here first, but we'll always look at the full picture.`
- CTA: `continue`

**Design notes:**
- The selected card should elevate slightly and get a border or fill in `#684551`.
- The descriptions are as important as the titles -- they validate specific frustrations.

---

#### Onboarding Screen 6: Optional Body Measurements

**Purpose:** Collect waist, hip, weight if willing. These improve protocol accuracy but are not required.

**Layout:**
- Gentle, no-pressure framing
- 3 input fields, warmly styled, with unit labels
- A prominent "skip" option that doesn't feel like failure

**Copy:**
- Header: `one more thing (totally optional).`
- Body: `if you're comfortable, these measurements help me give you more precise guidance. you can always add them later.`
- Fields: `weight (kg)`, `waist (inches)`, `hip (inches)`
- Skip CTA: `skip for now` (styled as a secondary text button, not hidden)
- Continue CTA: `save and continue`

---

#### Onboarding Screen 7: The "Aha" Moment -- First Personalized Insight

**Purpose:** THIS IS THE MOST IMPORTANT SCREEN IN THE ENTIRE APP. This is where milli proves it's different. After collecting data, the app immediately demonstrates intelligence by showing one specific, personalized insight based on the user's current cycle phase and condition.

This screen is the bridge between "another health app" and "this app understands me." Retention lives or dies here.

**Layout:**
- The screen should feel like a reveal. A moment of pause after the onboarding flow.
- A brief transition -- perhaps a 1.5 second screen with "let me think about what you've shared..." with a subtle animation (the milli wordmark gently pulsing, or a warm gradient shifting) -- before the insight appears.
- The insight is presented as a single, beautifully typeset card on a warm background.
- Large, clear text. No clutter. Just the insight and a small explanation.
- Below the insight card: a button to enter the main app.

**Insight logic (provide these as examples for different scenarios -- the actual insight is computed from the onboarding data):**

*Example 1 -- Day 22, luteal phase, PCOS, selected "poor sleep" + "anxiety":*
- Phase indicator: `day 22 -- deep luteal`
- Insight: `your body is metabolizing caffeine 2x slower right now. that afternoon coffee? it's still in your system at midnight. this is likely amplifying both your sleep issues and anxiety.`
- Micro-explanation: `progesterone peaks in deep luteal and slows liver enzyme CYP1A2, which processes caffeine. for women with PCOS, this effect is even more pronounced.`

*Example 2 -- Day 8, follicular phase, PCOS, selected "weight plateau" + "low energy":*
- Phase indicator: `day 8 -- mid follicular`
- Insight: `this is actually your power window. your insulin sensitivity is at its highest right now -- your body can process carbs more efficiently than any other time this month. if you're going to push a workout or try a new meal plan, this week is when your body is most responsive.`
- Micro-explanation: `estrogen rises in follicular phase and improves insulin signaling. for PCOS, this window is especially valuable because insulin resistance is your baseline challenge.`

*Example 3 -- Day 14, ovulation, selected "mood swings" + "bloating":*
- Phase indicator: `day 14 -- ovulation`
- Insight: `your estrogen just peaked, and your body is retaining more water than usual. that bloating isn't weight gain -- it's a 2-3 day hormonal event. and your mood swings? estrogen and testosterone are both peaking, which can feel like emotional whiplash.`
- Micro-explanation: `estradiol peaks 24-48 hours before ovulation, causing fluid retention and heightened emotional sensitivity. this resolves naturally as you enter luteal phase.`

**Copy:**
- Transition screen text: `processing what you've shared...`
- Above insight card: `here's something true about your body right now.`
- Below insight card, CTA: `explore milli` or `let's go`
- Small text near CTA: `this is just the beginning. milli learns more every day.`

**Design notes:**
- This screen must feel like a gift, not a sales pitch. The insight should surprise the user with its specificity.
- The phase indicator at the top of the insight card should use the cycle phase visualization style that persists throughout the app (establishing visual continuity).
- Consider a very subtle entrance animation for the insight card -- a gentle fade-up from below, not a slide or bounce.
- The micro-explanation text should be in a smaller, slightly muted style -- it's there for users who want to go deeper, but the main insight is the star.

---

### Screen 8: Home Screen -- The 4 Pillars

**Purpose:** The daily command center. One glance tells you: what phase you're in, how your four pillars are doing, and what to pay attention to today. This is NOT a dashboard with charts and numbers. It's a living status view.

**Layout (top to bottom):**

**1. Top section -- Greeting + Phase Awareness**
- Warm, personalized greeting with time-awareness: "good morning, [name]" / "evening, [name]"
- Current cycle phase indicator prominently displayed. This is a horizontal element showing:
  - Phase name: `follicular`, `ovulation`, `luteal`, `menstrual`
  - Cycle day: `day 8`
  - A simple visual -- a gentle arc or wave showing position in the full cycle. Uses `#684551` for the current position marker.
- Below the phase indicator: one sentence of phase context. Example: `your body is building energy right now. lean into it.`

**2. Daily Insight Card**
- A prominent card below the phase section. This is milli's daily headline -- the single most important thing to know today.
- Background: white with warm tint, or light `#CEA0AE` tint
- Example content: `your insulin sensitivity peaks today. it's a good day for that workout you've been putting off.`
- Tappable to expand into a detailed explanation.

**3. The Four Pillar Cards**
- Four cards arranged in a 2x2 grid or stacked vertically (test both layouts -- 2x2 may be more scannable, vertical scroll may be more readable).
- Each card represents one pillar: **Nutrition**, **Movement**, **Rest**, **Mind**

**Individual pillar card anatomy:**
- **Icon** (top-left): Simple, organic line icon. Nutrition = leaf. Movement = gentle wave/path. Rest = moon. Mind = small circle/ripple.
- **Pillar name** (top, after icon)
- **Current status line** (1-2 sentences): The key insight for this pillar right now. NOT a metric. A human-readable status.
  - Nutrition example: `protein-heavy meals today -- your body needs it in luteal phase`
  - Movement example: `skip HIIT today. a 45-minute walk will serve you better right now`
  - Rest example: `aim for bed by 10:30 -- your melatonin window is earlier this phase`
  - Mind example: `progesterone is peaking, which can amplify anxiety. that feeling is chemical, not personal.`
- **Warmth indicator** (bottom): A subtle visual signal showing how this pillar is doing, based on recent logs. NOT a progress bar. Consider:
  - A small row of 3-5 gentle dots that fill with `#9CD08F` (good), `#CEA0AE` (neutral), or stay empty (no data yet). This is NOT a score -- it's a gentle pulse-check.
  - Or a simple text label: `on track`, `needs attention`, `no data yet` -- styled in appropriate palette colors.
- **Tappable**: Entire card is tappable to go to pillar detail view.

**4. Bottom -- Chat FAB (Floating Action Button)**
- Fixed position, bottom-right, within thumb zone
- Circular button, `#684551` background, with a simple chat/conversation icon in white
- Subtle shadow for elevation
- A small, unobtrusive badge or pulse animation if milli has something to say (proactive insight)

**What the home screen must NOT have:**
- No calorie numbers
- No step counts
- No charts or graphs
- No "log your meal" buttons
- No empty states saying "no data yet" for pillars. The protocol always has something to say based on phase + condition.

**Copy tone:** Everything on this screen should feel like a knowledgeable friend checking in, not a dashboard reporting metrics.

---

### Screen 9: Pillar Detail View (Nutrition as Example)

**Purpose:** Deep dive into one pillar. Shows the current protocol recommendations, explains why, and surfaces relevant recent patterns.

**Layout (top to bottom, scrollable):**

**1. Header**
- Pillar name: `nutrition`
- Current phase context: `luteal phase -- day 22`
- Back navigation (top-left arrow)

**2. "Right Now" Section**
- Header: `what your body needs right now`
- 2-3 specific recommendations, each as a card:
  - Card 1: `increase protein to ~30% of meals`
    - Why: `insulin sensitivity drops in luteal phase. protein stabilizes blood sugar and reduces cravings.`
  - Card 2: `reduce caffeine after 12pm`
    - Why: `your liver is processing caffeine slower right now. afternoon caffeine will stay in your system until midnight.`
  - Card 3: `add magnesium-rich foods (spinach, dark chocolate, pumpkin seeds)`
    - Why: `magnesium supports progesterone production and can ease the sleep disruption common in this phase.`

**3. "This Phase" General Guidance**
- Header: `luteal phase nutrition playbook`
- A concise list of phase-specific guidelines, styled as a clean bulleted list with warm typography:
  - `complex carbs > simple carbs (sweet potato, oats, brown rice)`
  - `don't restrict calories -- your body needs 100-300 more kcal this phase`
  - `anti-inflammatory foods help (turmeric, fatty fish, berries)`
  - `sugar cravings are real -- they're progesterone-driven, not weakness`

**4. "Your Patterns" Section (appears after user has some log history)**
- Header: `what i've noticed`
- Example: `you've mentioned sugar cravings 3 times this luteal phase. this is consistent with progesterone-driven glucose shifts. the magnesium recommendation above can help.`
- If no patterns yet: `as you share more with me, i'll start connecting dots here. for now, these recommendations are based on your phase and condition.`

**Design notes:**
- The "why" explanation beneath each recommendation is indented or styled in a lighter weight/color -- present but not competing with the recommendation itself.
- The overall feel should be: "a doctor who actually knows you wrote you a personal note." Not a generic article.
- "Sugar cravings are real -- they're progesterone-driven, not weakness" -- this type of empathetic, de-shaming language is essential throughout the pillar detail views.

---

### Screen 10: Chat Interface

**Purpose:** The primary input mechanism. Users talk to milli naturally, and milli extracts structured health data silently while responding conversationally. The user never feels like they're "logging" -- they feel like they're talking to someone who understands.

**Layout:**

**1. Chat header**
- Simple: `milli` in `#402E2A`, left-aligned
- Current phase shown subtly: `day 22 -- luteal` in small text, right-aligned, `#684551`
- Close/minimize button (X or down-arrow to return to home)

**2. Message area**
- Standard chat layout: user messages right-aligned, milli messages left-aligned
- User messages: `#684551` background, white text, rounded bubble (more rounded on the user's side)
- Milli messages: white/very light warm background, `#402E2A` text, rounded bubble
- Generous spacing between messages
- Milli's typing indicator: three pulsing dots in `#CEA0AE`

**3. Input area**
- A text input field at the bottom with warm styling
- Placeholder text that rotates or contextualizes: `how are you feeling?` / `what did you eat today?` / `anything on your mind?`
- Send button: small, circular, `#684551`

**Example conversation (design this exact exchange):**

**User:** `had a rough night. barely slept, woke up anxious. had chai and toast for breakfast, skipping workout today.`

**Milli:** `i'm sorry about the rough night. anxiety and poor sleep often travel together in luteal phase -- progesterone can disrupt your sleep architecture right now, and that feeds the anxiety loop.`

`skipping the workout is actually a smart call today. your cortisol is probably already elevated from the poor sleep. rest > pushing through right now.`

`one thing about the chai -- you're in a phase where caffeine lingers longer in your system. if tonight's sleep matters (and it does), consider switching to herbal after this cup.`

`the toast is fine, but try to pair your next meal with protein and fat -- it'll stabilize the blood sugar dip that's probably contributing to the anxiety.`

*(Note: in this exchange, milli has silently logged: sleep quality = poor, mood = anxious, breakfast = chai + toast, exercise = skipped. The user never sees a "logged!" confirmation. The data extraction is invisible.)*

**User:** `ok thanks. had dal rice with salad for lunch. feeling a bit better.`

**Milli:** `that's a great luteal phase lunch -- dal gives you protein and the rice gives your body the complex carbs it's craving right now. the fiber from the salad helps with the insulin response too.`

`glad you're feeling better. the anxiety often eases as the day goes on when you're in this phase -- morning cortisol peaks are sharper in luteal.`

**Design notes:**
- Milli's messages should never be a single block of text. Break into 2-3 shorter paragraphs for readability.
- Milli always acknowledges the emotional content FIRST, then provides the biological insight, then the practical suggestion. This order is non-negotiable.
- The chat should feel warm and conversational. No bullet points in chat. No headers. No structured formatting. Just natural language.
- Consider a subtle background color shift in the chat based on time of day (warmer in evening) to reinforce the companion feeling.

---

### Screen 11: Cycle Phase Overview

**Purpose:** A dedicated view of the user's cycle, showing where they are and what each phase means for them specifically. This is NOT a calendar. It's an educational, personalized cycle map.

**Layout:**

**1. Visual Cycle Representation**
- A circular or horizontal wave visualization showing the four phases: menstrual, follicular, ovulation, luteal
- Current position clearly marked with the `#684551` accent
- Each phase is labeled and colored with subtle palette variations:
  - Menstrual: `#CEA0AE`
  - Follicular: `#9CD08F`
  - Ovulation: `#D5B0AC`
  - Luteal: `#684551`
- Predicted dates shown for upcoming phases (with "estimated" label for irregular cycles)

**2. Current Phase Detail Card**
- Phase name, day range, and current day
- 3-4 bullet points about what's happening hormonally RIGHT NOW, written in plain language:
  - `progesterone is at its peak`
  - `your metabolism speeds up slightly -- you genuinely need more food`
  - `serotonin drops, which is why everything feels harder`
  - `your body temperature is higher, which can disrupt sleep`

**3. "What This Means for You" Section**
- Phase-specific implications across the 4 pillars, brief:
  - Nutrition: `eat more, especially protein and complex carbs`
  - Movement: `lower intensity. walks, yoga, pilates.`
  - Rest: `you need more. aim for 8+ hours. melatonin window shifts earlier.`
  - Mind: `mood dips are chemical, not personal. be gentle with yourself.`

**4. Upcoming Phase Preview**
- A brief card showing what the next phase will bring:
  - `in ~6 days: menstrual phase`
  - `what to expect: energy drops further, then resets. this is your body's recovery period.`

**Design notes:**
- This screen should be educational without being textbook-like. It teaches the user about her own body through the lens of what's happening right now.
- The cycle visualization should be simple and elegant -- not a detailed medical diagram.
- For users with irregular cycles (especially PCOS), show ranges instead of exact dates and include language that normalizes irregularity.

---

### Screen 12: Weekly Synthesis Report

**Purpose:** The weekly "connecting dots" moment. This is where milli proves its intelligence by finding patterns across the user's logs, symptoms, cycle phase, and the four pillars. Should feel insightful and validating -- "I knew something was off, and now I understand why."

**Layout (scrollable, single page):**

**1. Header**
- `your week with milli`
- Date range: `apr 14 -- apr 20`
- Phase context: `you spent this week in mid-to-late luteal phase`

**2. Key Takeaway (hero section)**
- A single, highlighted insight card with warm background (`#CEA0AE` at 20%)
- Large text, the ONE thing milli wants the user to know:
  - Example: `your sleep quality dropped every night after you had caffeine past 2pm. in luteal phase, this effect is amplified. next cycle, we'll flag this window.`

**3. Pillar Summaries**
- Four compact sections, one per pillar:
  
  **Nutrition:**
  - `you logged 12 meals this week. protein was consistent. sugar cravings appeared 3 times (all in the last 4 days -- typical late luteal).`
  - Suggestion: `next luteal phase, preemptively stock dark chocolate and pumpkin seeds to manage the cravings before they hit.`

  **Movement:**
  - `3 workouts logged. you wisely skipped HIIT on day 22. walked twice.`
  - Suggestion: `your movement pattern this week was well-matched to your phase. let's maintain this awareness next cycle.`

  **Rest:**
  - `sleep was poor on 3 of 7 nights. all 3 followed afternoon caffeine.`
  - Suggestion: `see key takeaway above. this is the pattern to break.`

  **Mind:**
  - `you mentioned anxiety 4 times this week, all in the last 5 days.`
  - Suggestion: `this timing aligns with the progesterone-serotonin interaction in late luteal. it's hormonal, not situational. magnesium and B6 before bed can help.`

**4. Looking Ahead**
- `next week: you'll likely enter menstrual phase around day 28. energy will dip, then reset. i'll adjust your protocol accordingly.`
- `one thing to prepare: keep iron-rich foods available. your body will need replenishment.`

**5. A Closing Note**
- Warm, brief: `you showed up for yourself this week. that matters more than getting everything perfect.`

**Design notes:**
- This is a READING experience. Typography, spacing, and hierarchy must support comfortable reading of 300-500 words.
- The key takeaway section should be visually distinct -- the user should be able to glance at just this and get value.
- The tone should be analytical but warm. Like a doctor who also happens to be your thoughtful older sister.
- Do not use charts or graphs. Use words. This app's intelligence is expressed through language.

---

### Screen 13: Protocol View

**Purpose:** The user's personalized health protocol. This is the "prescription from a doctor who actually knows you." It's organized by what to do NOW (this phase) versus what applies generally.

**Layout:**

**1. Header**
- `your protocol`
- `updated for: luteal phase -- day 22`
- Subtle indicator that this is personalized: `based on your PCOS profile, cycle phase, and recent patterns`

**2. "Right Now" Section (phase-specific)**
- Header: `this phase`
- Sub-sections for each protocol category:

  **Supplements:**
  - `magnesium glycinate -- 400mg before bed` / why: `supports progesterone, improves sleep quality in luteal`
  - `inositol -- 2g twice daily` / why: `improves insulin sensitivity, especially important for PCOS`
  - `vitamin B6 -- 50mg` / why: `supports serotonin production, which dips in this phase`

  **Diet:**
  - `increase daily calories by 200-300 kcal`
  - `protein at every meal (30%+ of plate)`
  - `no caffeine after 12pm`
  - `anti-inflammatory foods: turmeric milk, fatty fish, berries`

  **Movement:**
  - `no HIIT or high-intensity training`
  - `walking: 30-45 minutes daily`
  - `yoga or pilates: 2-3 sessions`
  - `strength training: light to moderate, not to failure`

  **Sleep:**
  - `in bed by 10:30pm (melatonin window is earlier this phase)`
  - `no screens 30 min before bed`
  - `room temperature: slightly cooler than usual (your core temp is elevated)`

**3. "Always" Section (general PCOS protocol)**
- Header: `your baseline`
- These don't change with phase:
  - `maintain anti-inflammatory diet foundation`
  - `prioritize blood sugar stability (protein + fat + fiber at every meal)`
  - `daily movement minimum: 30-minute walk`
  - `sleep target: 7.5-8.5 hours`
  - `stress management: non-negotiable, not optional`

**Design notes:**
- Each recommendation should have a tappable "why" that expands to show the explanation. The recommendations themselves should be clean and scannable, with the depth available on demand.
- Use small icons or color-coding to distinguish supplement, diet, movement, and sleep items.
- The "right now" section must feel dynamic -- it changes with each phase. The "always" section feels stable and foundational.
- Consider a subtle visual treatment that makes the "right now" section feel more urgent/alive (slightly bolder, or a gentle accent border) versus the "always" section which feels grounding and stable.

---

### Screen 14: Settings / Profile

**Purpose:** Account management, body measurements update, condition management, notification preferences. This should be functional but not clinical.

**Layout:**

**Sections:**

1. **Profile**
   - Name, age (editable)
   - Condition(s) (editable -- same warm selection UI as onboarding)
   - Body measurements (editable, still optional, same no-pressure framing)

2. **Cycle Settings**
   - Average cycle length (editable)
   - Last period date (editable)
   - "My cycle is irregular" toggle

3. **Notifications**
   - Morning insight (toggle + time picker): `get your daily insight at...`
   - Phase change alerts: `let me know when my phase changes`
   - Weekly synthesis: `send my weekly report on...`

4. **Data & Privacy**
   - `your data stays yours.` followed by brief privacy explanation
   - Export data option
   - Delete account

5. **About**
   - App version
   - `milli is not a replacement for medical advice. always consult your doctor for health decisions.` (required disclaimer, styled warmly, not hidden)

---

## Interaction Patterns

### Navigation
- **Bottom tab bar** with 4 items: Home (4 pillars), Cycle, Protocol, Profile
- Tab bar uses `#402E2A` for active icon/text, `#CEA0AE` for inactive
- The Chat FAB floats ABOVE the tab bar, always accessible
- Tab bar background: white with subtle warm tint

### Gestures
- Swipe left/right on home screen to navigate between days (see yesterday's status, tomorrow's preview)
- Pull-to-refresh on home screen to update daily insight
- Long-press on a pillar card for a quick summary popup

### State Changes
- When a new cycle phase begins, the home screen should have a subtle transition moment -- perhaps the phase indicator animates, or a brief "welcome to follicular phase" card appears at the top

---

## Anti-Patterns -- What to Explicitly AVOID

- **No gamification.** No streaks, badges, points, levels, or leaderboards. This is not a habit tracker.
- **No calorie numbers** displayed anywhere except deep in the protocol detail view, and even then as ranges, not targets.
- **No weight tracking graphs.** Weight is a data input, not a thing to obsess over.
- **No "log" buttons on the home screen.** Logging happens through chat. The home screen is for receiving intelligence, not inputting data.
- **No empty states.** Every pillar, every screen should have useful content from day 1 based on protocol knowledge + cycle phase + condition. "Log more to see insights" is forbidden.
- **No pink as a primary color.** The palette above is the palette. Period.
- **No medical iconography.** No stethoscopes, pills, syringes, heartbeat lines, or anatomical diagrams.
- **No infantilizing language.** No "you go girl," no "queen," no sparkle emojis. The tone is warm, intelligent, grounded.
- **No calendar grid for period tracking.** milli is not Flo.
- **No food photo logging UI.** Input happens through natural language chat.
- **No dashboard with charts.** Intelligence is communicated through words, not data visualizations.

---

## User Personas to Design For

Keep these four women in mind as you design. Every screen should work for the most overwhelmed (Nadaa) and the most skeptical (Isha).

**Nadaa (21):** Has every symptom. Uses no tools. Trusts AI. The app must not overwhelm her. She needs simplicity and gentle guidance. She should never feel like she's behind or doing it wrong.

**Niveditha (24):** Confused about her body. Uses ChatGPT but gets generic responses. She needs the app to make her feel UNDERSTOOD, not just tracked. The "aha" moment is designed for her.

**Shravika (25):** Uses Flo + ChatGPT. Finds Flo expensive, ChatGPT has no memory. She needs milli to feel smarter and more contextual than both. The weekly synthesis is designed for her.

**Isha (30):** Diagnosed PCOS, uses 3 tools. The hardest to convert. She needs to see something she can't get elsewhere. The protocol view with phase-specific PCOS adjustments is designed for her.

---

## Final Design Deliverables

Generate the following:

1. **Each screen listed above** at wireframe-to-mid-fidelity level, with:
   - Component layout and hierarchy
   - Actual copy (not lorem ipsum -- use the copy provided and extrapolate for anything not specified)
   - Color application from the defined palette
   - Typography hierarchy applied
   - Spacing and proportion relationships

2. **Interaction annotations** on each screen noting:
   - What happens on tap/press
   - Transition to next screen
   - Any animation or motion behavior
   - State changes (selected/unselected, expanded/collapsed)

3. **The emotional arc** of the onboarding visualized -- annotate how the user's emotional state should shift from screen to screen

4. **A component inventory** listing reusable elements:
   - Pillar card component (with states)
   - Insight card component
   - Symptom/goal selection chip
   - Chat bubble components (user + milli)
   - Phase indicator component
   - Protocol recommendation card

5. **Three states of the home screen:**
   - Day 1 (just completed onboarding, no logs yet -- but still populated with protocol insights)
   - Day 14 (two weeks in, has some patterns, mid-cycle)
   - Day 60 (established user, rich patterns, deep personalization)

Remember: this app's soul is in its LANGUAGE. The words matter more than the pixels. Design for reading, understanding, and feeling heard. Every screen should make the user feel like someone finally understands what she's going through -- and has real answers, not platitudes.
