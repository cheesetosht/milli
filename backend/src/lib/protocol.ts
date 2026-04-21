// Evidence-based protocol rules for milli's system prompt
// Sourced from peer-reviewed research, Stacy Sims, Lara Briden, Jolene Brighten

export const PHASE_RULES = {
  menstrual: {
    nutrition: [
      'Focus on iron-rich foods (red meat, lentils, spinach) — menstruation depletes iron stores',
      'Anti-inflammatory foods (turmeric, ginger, fatty fish) reduce prostaglandin-driven cramps',
      'Warm, nourishing meals over cold/raw — gut motility slows',
      'Dark chocolate is genuinely helpful — magnesium + mood support',
    ],
    movement: [
      'Gentle movement only: walks, stretching, yoga',
      'Skip HIIT entirely — cortisol cost outweighs benefit',
      'Rest days are productive days — the body is recovering',
    ],
    rest: [
      'Sleep need increases to 8-9 hours',
      'Hormones are at their lowest — fatigue is biological',
    ],
    mind: [
      'Low estrogen = lower serotonin. Social energy is genuinely depleted',
      'Good time for introspection, journaling, planning',
    ],
  },
  follicular: {
    nutrition: [
      'Higher carb tolerance — estrogen improves insulin sensitivity',
      'Lighter meals, more raw foods tolerated well',
      'Post-workout carbs are most effective this phase',
      'Fermented foods support estrobolome health',
    ],
    movement: [
      'Best window for progressive overload and heavy compound lifts',
      'Estrogen is anabolic — muscle protein synthesis peaks',
      'HIIT is well tolerated (cap at 2x/week for PCOS women)',
      'Track PRs — they peak around ovulation',
    ],
    rest: [
      'Sleep quality naturally improves with rising estrogen',
      '7.5-8 hours is sufficient',
      'Morning sunlight exposure sets circadian clock',
    ],
    mind: [
      'Creativity and confidence rise with estrogen',
      'Great time for important meetings, decisions, learning',
      'Social battery is full',
    ],
  },
  ovulation: {
    nutrition: [
      'Fiber-rich meals support estrogen clearance (cruciferous veg for DIM)',
      'Stay hydrated — fluid retention is a 2-3 day hormonal event, not weight gain',
      'Lean protein at every meal',
      'Reduce alcohol — it impairs estrogen metabolism via the estrobolome',
    ],
    movement: [
      'Peak power output — great for strength tests',
      'Warm up thoroughly — ACL injury risk is highest (estrogen increases joint laxity)',
      'Begin tapering intensity toward luteal',
    ],
    rest: [
      'Energy peaks but maintain sleep hygiene',
      'Sleep debt compounds into luteal — don\'t sacrifice rest',
    ],
    mind: [
      'Peak social energy but emotional sensitivity is high',
      'Empathy increases but so does sensitivity to rejection',
      'Emotional reactions may be amplified — pause before responding',
    ],
  },
  luteal: {
    nutrition: [
      'Insulin sensitivity drops — same meals spike blood sugar more than 2 weeks ago',
      'Increase protein to ~30% of meals to stabilize blood sugar',
      'Body needs 100-300 extra kcal — this is metabolic, not emotional eating',
      'Reduce caffeine after 12pm — CYP1A2 enzyme is slower, caffeine lingers until midnight',
      'Complex carbs > simple carbs (sweet potato, oats, brown rice)',
      'Sugar cravings are progesterone-driven, not weakness',
      'For PCOS: caloric restriction worsens symptoms via cortisol → gluconeogenesis loop',
    ],
    movement: [
      'No HIIT — cortisol spike takes longer to clear, can suppress ovulation in PCOS women',
      '45-min brisk walks daily — GLUT4 upregulation improves insulin sensitivity without cortisol cost',
      'Yoga, pilates, swimming — parasympathetic-activating movement supports progesterone',
      'Walking after meals blunts postprandial blood sugar spikes',
    ],
    rest: [
      'Sleep gets harder — progesterone raises core temp by 0.3-0.5°C, disrupting sleep onset',
      'In bed by 10:30pm — melatonin window shifts earlier',
      'No alcohol — blocks conversion of progesterone to allopregnanolone (natural GABA sleep aid)',
      'Magnesium glycinate 300-400mg before bed — supports GABA pathway',
      'Cool the bedroom slightly to compensate for elevated core temperature',
    ],
    mind: [
      'Anxiety is neurobiological: progesterone withdrawal reduces GABA sensitivity',
      'Mood dips are hormonal, not personal. Allopregnanolone-GABA dynamics cause this.',
      'Proactively reduce stressors — caffeine amplifies the cortisol-anxiety loop',
      'Avoid major decisions in late luteal if possible — cognitive flexibility drops',
      'B6 + magnesium support serotonin production',
    ],
  },
} as const;

export const PCOS_RULES = [
  'NEVER suggest aggressive caloric deficits for PCOS women. Sustained restriction (500+ kcal/day deficit) elevates cortisol, worsens insulin resistance via gluconeogenesis, and can delay periods.',
  'Walking 45 min/day is as effective as metformin for mild-moderate PCOS insulin resistance (GLUT4 mechanism).',
  'Cap HIIT at 2x/week maximum, placed in follicular phase only. The cortisol spike from HIIT takes longer to clear in PCOS and can suppress ovulation.',
  'Inositol (myo + d-chiro, 40:1 ratio, 2g twice daily) matches metformin in RCTs for insulin, testosterone, and ovulation.',
  'Magnesium deficiency approaches 80% in PCOS women. 300-400mg magnesium glycinate at night improves insulin, sleep, and testosterone levels.',
  'Spearmint tea (2 cups/day) reduces free testosterone via 5-alpha reductase inhibition — clinical trial evidence.',
  'Vitamin D deficiency in 67-85% of PCOS women. Optimal is 60-80 ng/mL. 3000-5000 IU/day with K2.',
  'Sleep under 7 hours measurably raises androgens within 2-3 days via DHEA-S upregulation.',
  'Thyroid-PCOS overlap is massive — subclinical hypothyroidism is 2-3x more common. Recommend full panel: TSH, free T3, free T4, TPO antibodies.',
  'The "pregnenolone steal": chronic stress shunts the progesterone precursor toward cortisol. Stress management is clinical, not lifestyle.',
];

export const SUPPLEMENT_PROTOCOL = {
  pcos_baseline: [
    { name: 'Myo-inositol + D-chiro-inositol (40:1)', dose: '2g twice daily', why: 'Patches insulin signaling pathway defect in PCOS. Equivalent to metformin in RCTs.' },
    { name: 'Magnesium glycinate', dose: '300-400mg before bed', why: 'Addresses near-universal deficiency in PCOS. Improves insulin, sleep, testosterone.' },
    { name: 'Vitamin D3 + K2', dose: '3000-5000 IU/day', why: 'Deficient in 67-85% of PCOS women. Improves ovulation, insulin sensitivity, inflammation.' },
    { name: 'Omega-3 (EPA/DHA)', dose: '1-2g/day', why: 'Anti-inflammatory. Reduces androgens and improves lipid profile in PCOS.' },
  ],
  luteal_support: [
    { name: 'Vitamin B6', dose: '50mg/day', why: 'Supports serotonin production which drops in luteal. Helps with PMS mood symptoms.' },
    { name: 'Spearmint tea', dose: '2 cups/day', why: 'Anti-androgenic via 5-alpha reductase inhibition. Reduces hirsutism and acne.' },
  ],
};
