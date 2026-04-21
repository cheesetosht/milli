export type CyclePhase = 'menstrual' | 'follicular' | 'ovulation' | 'luteal';

export interface PhaseInfo {
  phase: CyclePhase;
  day: number;
  label: string;
  daysUntilNext: number;
  nextPhase: CyclePhase;
}

export function getCurrentPhase(lastPeriodDate: string, cycleLength: number): PhaseInfo {
  const start = new Date(lastPeriodDate);
  const today = new Date();
  const diffMs = today.getTime() - start.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const day = (diffDays % cycleLength) + 1;

  // Phase boundaries scale with cycle length
  const menstrualEnd = 5;
  const follicularEnd = Math.round(cycleLength * 0.45); // ~day 13 for 28-day
  const ovulationEnd = follicularEnd + 2;               // ~day 15
  // rest is luteal

  if (day <= menstrualEnd) {
    return {
      phase: 'menstrual',
      day,
      label: `day ${day} — menstrual`,
      daysUntilNext: menstrualEnd - day + 1,
      nextPhase: 'follicular',
    };
  }
  if (day <= follicularEnd) {
    return {
      phase: 'follicular',
      day,
      label: `day ${day} — follicular`,
      daysUntilNext: follicularEnd - day + 1,
      nextPhase: 'ovulation',
    };
  }
  if (day <= ovulationEnd) {
    return {
      phase: 'ovulation',
      day,
      label: `day ${day} — ovulation`,
      daysUntilNext: ovulationEnd - day + 1,
      nextPhase: 'luteal',
    };
  }
  return {
    phase: 'luteal',
    day,
    label: `day ${day} — luteal`,
    daysUntilNext: cycleLength - day + 1,
    nextPhase: 'menstrual',
  };
}

export function getPhaseColor(phase: CyclePhase): string {
  const map: Record<CyclePhase, string> = {
    menstrual: '#CEA0AE',
    follicular: '#9CD08F',
    ovulation: '#D5B0AC',
    luteal: '#684551',
  };
  return map[phase];
}

export const PHASE_DESCRIPTIONS: Record<CyclePhase, {
  hormones: string[];
  summary: string;
  nextPreview: string;
}> = {
  menstrual: {
    hormones: [
      'estrogen and progesterone are at their lowest',
      'iron is being depleted — fatigue is biological',
      'prostaglandins drive cramps and inflammation',
    ],
    summary: 'your body is in recovery mode. honor the need for rest — this is when your body resets for the next cycle.',
    nextPreview: 'follicular phase is coming — energy and mood will start climbing as estrogen rises.',
  },
  follicular: {
    hormones: [
      'estrogen is rising steadily',
      'insulin sensitivity improves — your body handles carbs better',
      'muscle protein synthesis increases — your strongest training window',
      'serotonin rises with estrogen — mood and creativity peak',
    ],
    summary: "this is your power window. your body is building energy, and you're biologically primed to push harder, learn faster, and take on challenges.",
    nextPreview: 'ovulation is approaching — peak energy and social drive, but watch for emotional sensitivity.',
  },
  ovulation: {
    hormones: [
      'estrogen peaks — highest point in the cycle',
      'testosterone spikes briefly — confidence and libido rise',
      'LH surge triggers egg release',
      'joint laxity increases — injury risk is higher',
    ],
    summary: 'peak energy and social drive. your body is at its most powerful but also more sensitive — emotionally and physically.',
    nextPreview: 'luteal phase begins — energy will gradually decline. start tapering intensity.',
  },
  luteal: {
    hormones: [
      'progesterone peaks — raises body temperature by 0.3-0.5°C',
      'insulin sensitivity drops — same meals spike blood sugar more',
      'caffeine metabolism slows via CYP1A2 enzyme',
      'serotonin drops — which is why everything feels harder',
      'your body needs 100-300 more kcal — metabolic rate increases',
    ],
    summary: "your body is doing important work preparing for the next cycle. the dips in mood and energy aren't weakness — they're chemistry. work with it, not against it.",
    nextPreview: 'menstrual phase is coming — energy will dip further, then reset. prepare with rest and iron-rich foods.',
  },
};
