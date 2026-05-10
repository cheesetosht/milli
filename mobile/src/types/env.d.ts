declare namespace NodeJS {
  interface ProcessEnv {
    EXPO_PUBLIC_POSTHOG_KEY?: string;
    EXPO_PUBLIC_POSTHOG_HOST?: string;
    EXPO_PUBLIC_LINKRUNNER_TOKEN?: string;
    EXPO_PUBLIC_REVENUECAT_IOS_KEY?: string;
    EXPO_PUBLIC_REVENUECAT_ANDROID_KEY?: string;
  }
}
