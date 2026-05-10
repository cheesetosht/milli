export const breakpoints = {
  xs: 0,
  sm: 380,
  md: 768,
  lg: 1024,
} as const;

export type AppBreakpoints = typeof breakpoints;
