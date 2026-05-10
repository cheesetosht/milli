export const palette = {
  cream: { 0: "#F8F2E8", 1: "#F5EFE6", 2: "#EFE7D8" },
  ink: {
    900: "#2A211B",
    700: "#4A3F36",
    500: "#6E6357",
    400: "#8B7F71",
    300: "#B0A698",
  },
  sage: { light: "#E2EBDC", medium: "#7E9A6E", deep: "#3F5A33" },
  amber: { light: "#F4E6C5", medium: "#C99A4A", deep: "#7A4F18" },
  lilac: { light: "#E5DFEC", medium: "#9789B0", deep: "#4D3F66" },
  rose: { light: "#EFD9D5", medium: "#B97C7C", deep: "#6E2F31" },
} as const;

export const typography = {
  family: {
    serif: "GTSectraDisplay-Regular",
    serifItalic: "GTSectraDisplay-Italic",
    sans: "Inter-Regular",
    sansMedium: "Inter-Medium",
    sansSemiBold: "Inter-SemiBold",
  },
  scale: {
    display: { size: 48, lineHeight: 52, letterSpacing: -1 },
    headline: { size: 28, lineHeight: 34, letterSpacing: -0.4 },
    title: { size: 20, lineHeight: 26, letterSpacing: -0.2 },
    body: { size: 16, lineHeight: 24, letterSpacing: 0 },
    label: { size: 14, lineHeight: 20, letterSpacing: 0.1 },
    caption: { size: 12, lineHeight: 16, letterSpacing: 0.2 },
  },
} as const;

export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  "3xl": 48,
  "4xl": 64,
} as const;

export const radii = {
  none: 0,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
} as const;

export const shadows = {
  card: {
    shadowColor: "#3D2C1A",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  raised: {
    shadowColor: "#3D2C1A",
    shadowOpacity: 0.1,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
} as const;
