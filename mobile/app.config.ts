import type { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "milli",
  slug: "milli",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  scheme: "milli",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#F5EFE6",
  },
  ios: {
    supportsTablet: false,
    bundleIdentifier: "com.milli.app",
  },
  android: {
    package: "com.milli.app",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#F5EFE6",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
  },
  plugins: [
    "expo-router",
    "expo-font",
    [
      "expo-build-properties",
      {
        ios: { useFrameworks: "static" },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
};

export default config;
