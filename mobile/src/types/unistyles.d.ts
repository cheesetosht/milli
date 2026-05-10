import type { AppBreakpoints } from "../theme/breakpoints";
import type { AppTheme } from "../theme/themes";

declare module "react-native-unistyles" {
  export interface UnistylesThemes {
    light: AppTheme;
  }
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}
