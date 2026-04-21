export const colors = {
  primary: '#402E2A',       // deep warm brown — text, headers
  accent: '#684551',        // muted plum — active states, selections, cycle indicator
  rose: '#CEA0AE',          // dusty rose — secondary UI, soft backgrounds
  green: '#9CD08F',         // sage green — positive states, "on track"
  base: '#D5B0AC',          // warm blush — backgrounds, surfaces
  background: '#F5EFEE',    // warm white (base at ~12% on white)
  card: '#FFFAF9',          // near-white with warm tint — cards, elevated surfaces
  white: '#FFFAF9',
} as const;

export const typography = {
  display: {
    fontSize: 30,
    fontWeight: '700' as const,
    color: colors.primary,
    fontFamily: 'PlusJakartaSans_700Bold',
  },
  header: {
    fontSize: 22,
    fontWeight: '600' as const,
    color: colors.primary,
    fontFamily: 'PlusJakartaSans_600SemiBold',
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    color: colors.primary,
    lineHeight: 24,
    fontFamily: 'PlusJakartaSans_400Regular',
  },
  bodyMedium: {
    fontSize: 16,
    fontWeight: '500' as const,
    color: colors.primary,
    lineHeight: 24,
    fontFamily: 'PlusJakartaSans_500Medium',
  },
  small: {
    fontSize: 13,
    fontWeight: '500' as const,
    color: colors.accent,
    fontFamily: 'PlusJakartaSans_500Medium',
  },
  chat: {
    fontSize: 15,
    fontWeight: '400' as const,
    lineHeight: 22,
    fontFamily: 'PlusJakartaSans_400Regular',
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 999,
} as const;
