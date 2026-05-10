import { StyleSheet } from "react-native-unistyles";
import { breakpoints } from "./breakpoints";
import { lightTheme } from "./themes";

StyleSheet.configure({
  themes: { light: lightTheme },
  breakpoints,
  settings: { initialTheme: "light" },
});
