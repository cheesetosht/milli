import type { CyclePhase } from './cycle-utils';
import type { Condition, Symptom } from './stores/user';

export interface Insight {
  title: string;
  body: string;
  why: string;
}

export interface PillarInsight {
  status: string;
  recommendations: { text: string; why: string }[];
  playbook: string[];
}

// Phase-specific daily insights used on home screen and aha reveal
const PHASE_INSIGHTS: Record<CyclePhase, Insight[]> = {
  menstrual: [
    {
      title: 'your body is in recovery mode right now.',
      body: "energy and iron are dropping. this isn't the time to push — it's the time to replenish. your body is doing important work.",
      why: 'menstruation depletes iron and drops estrogen/progesterone to their lowest. fatigue is biological, not laziness.',
    },
  ],
  follicular: [
    {
      title: 'this is your power window.',
      body: "your insulin sensitivity is at its highest right now — your body can process carbs more efficiently than any other time this month. if you're going to push a workout or try a new meal plan, this week is when your body is most responsive.",
      why: 'estrogen rises in follicular phase and improves insulin signaling. for PCOS, this window is especially valuable because insulin resistance is your baseline challenge.',
    },
  ],
  ovulation: [
    {
      title: "your estrogen just peaked — here's what that means.",
      body: "you might feel more social, more energetic, and also more bloated. that bloating isn't weight gain — it's a 2-3 day hormonal event. and your mood might feel like a rollercoaster — estrogen and testosterone are both peaking.",
      why: 'estradiol peaks 24-48 hours before ovulation, causing fluid retention and heightened emotional sensitivity. this resolves naturally as you enter luteal phase.',
    },
  ],
  luteal: [
    {
      title: 'your body is metabolizing caffeine 2x slower right now.',
      body: "that afternoon coffee? it's still in your system at midnight. this is likely amplifying both your sleep issues and anxiety.",
      why: 'progesterone peaks in deep luteal and slows liver enzyme CYP1A2, which processes caffeine. for women with PCOS, this effect is even more pronounced due to estrogen dominance.',
    },
    {
      title: 'your insulin sensitivity just dropped — same meals, different results.',
      body: "the same food that was fine last week will spike your blood sugar more now. your body needs more protein and complex carbs, and about 200 extra calories. this isn't a cheat — it's biology.",
      why: 'progesterone antagonizes insulin signaling. your resting metabolic rate increases 100-300 kcal in luteal phase. fighting this with restriction raises cortisol and worsens everything.',
    },
  ],
};

// PCOS-specific overlays
const PCOS_INSIGHTS: Partial<Record<CyclePhase, Insight>> = {
  luteal: {
    title: 'caloric restriction is especially risky for you right now.',
    body: "with PCOS, aggressive deficits in luteal phase raise cortisol, which raises blood sugar via gluconeogenesis — even while eating less. focus on glycemic load, not calories.",
    why: 'PCOS involves baseline insulin resistance. the luteal progesterone-insulin interaction compounds on top, making restriction counterproductive.',
  },
  follicular: {
    title: 'this is your best window for HIIT — cap it here.',
    body: "your cortisol recovery is fastest in follicular phase. HIIT in luteal phase can suppress ovulation and worsen your LH:FSH ratio. front-load intensity now.",
    why: 'the HPA axis and HPO axis compete. chronic cortisol from HIIT signals the brain that it\'s not safe to ovulate.',
  },
};

// Symptom-specific tips
const SYMPTOM_TIPS: Partial<Record<Symptom, string>> = {
  poor_sleep: 'magnesium glycinate 300-400mg before bed can help — it supports GABA, your natural sleep pathway.',
  anxiety: 'luteal-phase anxiety is neurobiological, not personal. allopregnanolone (a progesterone metabolite) fluctuations change your brain\'s GABA sensitivity.',
  bloating: 'bloating often follows your cycle\'s estrogen peaks. 30g+ of fiber daily supports your estrobolome and helps your body clear excess estrogen.',
  sugar_cravings: 'sugar cravings in luteal phase are progesterone-driven, not weakness. dark chocolate and pumpkin seeds can take the edge off.',
  hair_loss: 'hair thinning in PCOS often tracks with elevated DHT. spearmint tea (2 cups/day) has clinical evidence for reducing free testosterone.',
  low_energy: 'if you\'re sleeping 7+ hours but still exhausted, get your ferritin and vitamin D checked. both are depleted faster in menstruating women.',
  weight_plateau: 'PCOS weight resistance isn\'t about calories — it\'s about insulin. 45 minutes of brisk walking daily is as effective as metformin for mild IR.',
};

export function getAhaInsight(
  phase: CyclePhase,
  day: number,
  conditions: Condition[],
  symptoms: Symptom[],
): { phaseLabel: string; insight: Insight; tip: string | null } {
  const hasPcos = conditions.includes('pcos');

  // Pick the most relevant insight
  let insight: Insight;
  if (hasPcos && PCOS_INSIGHTS[phase]) {
    insight = PCOS_INSIGHTS[phase]!;
  } else {
    const options = PHASE_INSIGHTS[phase];
    insight = options[Math.floor(Math.random() * options.length)];
  }

  // Pick a symptom tip that's most relevant to their current phase
  const phaseTipPriority: Record<CyclePhase, Symptom[]> = {
    menstrual: ['low_energy', 'painful_periods', 'bloating'],
    follicular: ['weight_plateau', 'low_energy', 'acne'],
    ovulation: ['bloating', 'mood_swings', 'anxiety'],
    luteal: ['poor_sleep', 'anxiety', 'sugar_cravings', 'bloating'],
  };

  let tip: string | null = null;
  for (const s of phaseTipPriority[phase]) {
    if (symptoms.includes(s) && SYMPTOM_TIPS[s]) {
      tip = SYMPTOM_TIPS[s]!;
      break;
    }
  }

  return {
    phaseLabel: `day ${day} — ${phase}`,
    insight,
    tip,
  };
}

// Pillar-specific protocol data by phase
export function getPillarData(phase: CyclePhase, hasPcos: boolean): Record<string, PillarInsight> {
  const nutrition: Record<CyclePhase, PillarInsight> = {
    menstrual: {
      status: 'focus on iron-rich foods and warm, nourishing meals',
      recommendations: [
        { text: 'increase iron intake (red meat, lentils, spinach)', why: 'menstruation depletes iron stores, affecting energy and cognitive function.' },
        { text: 'anti-inflammatory foods (turmeric, ginger, fatty fish)', why: 'prostaglandins driving cramps respond to anti-inflammatory nutrients.' },
      ],
      playbook: ['warm foods over cold', 'gentle on the gut — avoid heavy/fried', 'dark chocolate is genuinely helpful (magnesium + mood)'],
    },
    follicular: {
      status: 'your metabolism is primed — lean into variety',
      recommendations: [
        { text: 'higher carb tolerance — enjoy whole grains, fruits', why: 'estrogen improves insulin sensitivity, so carbs are processed more efficiently now.' },
        { text: 'lighter meals, more raw foods tolerated well', why: 'gut motility is faster in follicular phase due to lower progesterone.' },
      ],
      playbook: ['experiment with new foods', 'post-workout carbs are most effective now', 'fermented foods support estrobolome health'],
    },
    ovulation: {
      status: 'peak metabolism — fuel your energy',
      recommendations: [
        { text: 'fiber-rich meals to support estrogen clearance', why: 'estrogen peaks at ovulation. fiber + cruciferous veg support liver detox.' },
        { text: 'stay hydrated — fluid retention is normal', why: 'estradiol causes water retention. hydration paradoxically reduces bloating.' },
      ],
      playbook: ['cruciferous vegetables (broccoli, cauliflower) for DIM', 'lean protein at every meal', 'reduce alcohol — it impairs estrogen metabolism'],
    },
    luteal: {
      status: hasPcos ? 'insulin sensitivity is dropping — adjust your meals' : 'your body needs more fuel right now',
      recommendations: [
        { text: 'increase protein to ~30% of meals', why: 'insulin sensitivity drops in luteal. protein stabilizes blood sugar and reduces cravings.' },
        { text: 'reduce caffeine after 12pm', why: 'your liver is processing caffeine slower. afternoon caffeine stays in your system until midnight.' },
        { text: 'add magnesium-rich foods (spinach, dark chocolate, pumpkin seeds)', why: 'magnesium supports progesterone production and eases sleep disruption.' },
      ],
      playbook: ['complex carbs > simple carbs', "don't restrict calories — you need 100-300 more kcal", 'anti-inflammatory foods help', 'sugar cravings are real — they\'re progesterone-driven, not weakness'],
    },
  };

  const movement: Record<CyclePhase, PillarInsight> = {
    menstrual: {
      status: 'gentle movement only — walks, stretching, yoga',
      recommendations: [
        { text: '20-30 min walks', why: 'low-impact movement reduces cramp severity via endorphin release without cortisol spike.' },
      ],
      playbook: ['skip HIIT', 'yoga and stretching', 'listen to your body — rest days are productive days'],
    },
    follicular: {
      status: 'your strongest training window — push it',
      recommendations: [
        { text: 'progressive overload, heavy compound lifts', why: 'estrogen is anabolic — it increases muscle protein synthesis and reduces perception of effort.' },
        { text: hasPcos ? 'HIIT: max 2x this week' : 'HIIT is well tolerated now', why: hasPcos ? 'PCOS cortisol recovery is slower. cap intensity to protect ovulation.' : 'cortisol clears quickly in follicular. your body recovers fast.' },
      ],
      playbook: ['track your PRs — they peak around ovulation', 'front-load heavy training days', 'post-workout nutrition matters most now'],
    },
    ovulation: {
      status: 'peak power — but injury risk rises',
      recommendations: [
        { text: 'maintain intensity but warm up thoroughly', why: 'estrogen peaks increase joint laxity. ACL injury risk is highest around ovulation.' },
      ],
      playbook: ['great day for strength tests', 'extra warm-up for knees and ankles', 'begin tapering intensity toward luteal'],
    },
    luteal: {
      status: hasPcos ? 'lower intensity — protect your cortisol' : 'moderate movement, listen to your body',
      recommendations: [
        { text: '45-min brisk walks daily', why: 'zone 2 cardio improves insulin sensitivity without cortisol cost. GLUT4 transporter upregulation is the mechanism.' },
        { text: 'yoga, pilates, swimming', why: 'parasympathetic-activating movement supports progesterone production.' },
      ],
      playbook: ['no HIIT in late luteal', 'walking after meals blunts blood sugar spikes', 'strength training: light to moderate, not to failure'],
    },
  };

  const rest: Record<CyclePhase, PillarInsight> = {
    menstrual: {
      status: 'sleep need increases — honor it',
      recommendations: [
        { text: 'aim for 8-9 hours', why: 'hormones are at their lowest. your body is recovering and rebuilding the uterine lining.' },
      ],
      playbook: ['naps are productive', 'reduce stimulation before bed', 'warmth helps (hot water bottle, warm tea)'],
    },
    follicular: {
      status: 'sleep quality naturally improves',
      recommendations: [
        { text: 'maintain 7.5-8 hours', why: 'rising estrogen supports serotonin, which converts to melatonin. sleep architecture is best this phase.' },
      ],
      playbook: ['consistent wake time matters more than bedtime', 'morning sunlight exposure sets your circadian clock'],
    },
    ovulation: {
      status: 'energy peaks — but maintain sleep hygiene',
      recommendations: [
        { text: "don't sacrifice sleep for energy", why: "you feel great but your body still needs recovery. sleep debt compounds into luteal." },
      ],
      playbook: ['7.5-8 hours minimum', 'avoid late-night screens — melatonin production is sensitive now'],
    },
    luteal: {
      status: 'sleep gets harder — progesterone is a double-edged sword',
      recommendations: [
        { text: 'in bed by 10:30pm', why: 'melatonin window shifts earlier in luteal. your core temperature rises, disrupting sleep onset.' },
        { text: 'cool your bedroom slightly', why: 'progesterone raises basal body temperature by 0.3-0.5°C. cooler room compensates.' },
        { text: 'no alcohol', why: 'alcohol blocks conversion of progesterone to allopregnanolone — your natural GABA sleep aid.' },
      ],
      playbook: ['magnesium glycinate before bed', 'no caffeine after noon', 'room temp: slightly cooler than usual'],
    },
  };

  const mind: Record<CyclePhase, PillarInsight> = {
    menstrual: {
      status: 'introspection phase — go inward',
      recommendations: [
        { text: 'reduce social obligations if possible', why: 'low estrogen means lower serotonin. social energy is genuinely depleted, not imagined.' },
      ],
      playbook: ['journaling, reflection, planning', 'be gentle with your expectations', 'this too passes — follicular energy is coming'],
    },
    follicular: {
      status: 'creativity and confidence rise',
      recommendations: [
        { text: 'schedule important meetings and decisions here', why: 'estrogen supports verbal fluency, memory, and cognitive flexibility.' },
      ],
      playbook: ['great time for learning new things', 'social battery is full', 'use this clarity for planning the month ahead'],
    },
    ovulation: {
      status: 'peak social energy — but emotional sensitivity is high',
      recommendations: [
        { text: 'be aware of emotional reactivity', why: 'testosterone and estrogen are both peaking. empathy increases but so does sensitivity to rejection.' },
      ],
      playbook: ['great for social events and communication', 'higher libido is normal', 'emotional reactions may be amplified — pause before responding'],
    },
    luteal: {
      status: hasPcos ? 'anxiety is chemical right now — not personal' : 'mood dips are hormonal — be gentle with yourself',
      recommendations: [
        { text: 'proactively reduce stressors this week', why: 'progesterone withdrawal reduces GABA sensitivity. your brain is literally more anxious right now.' },
        { text: 'avoid major decisions in late luteal if possible', why: 'cognitive flexibility drops. things feel more catastrophic than they are.' },
      ],
      playbook: ['reduce caffeine (amplifies cortisol-anxiety loop)', 'B6 + magnesium support serotonin production', 'movement helps but not intense — walks, yoga'],
    },
  };

  return {
    nutrition: nutrition[phase],
    movement: movement[phase],
    rest: rest[phase],
    mind: mind[phase],
  };
}
