import { palette, radii, shadows, spacing, typography } from "./tokens";

export const lightTheme = {
  colors: {
    surface: palette.cream[1],
    surfaceRaised: palette.cream[0],
    surfaceSunken: palette.cream[2],
    text: palette.ink[900],
    textMuted: palette.ink[500],
    textSubtle: palette.ink[400],
    border: palette.ink[300],
    sage: palette.sage,
    amber: palette.amber,
    lilac: palette.lilac,
    rose: palette.rose,
  },
  typography,
  spacing,
  radii,
  shadows,
} as const;

export type AppTheme = typeof lightTheme;
