import { z } from "zod";

const schema = z.object({
  EXPO_PUBLIC_POSTHOG_KEY: z.string().min(1),
  EXPO_PUBLIC_POSTHOG_HOST: z.string().url(),
  EXPO_PUBLIC_LINKRUNNER_TOKEN: z.string().min(1),
  EXPO_PUBLIC_REVENUECAT_IOS_KEY: z.string().min(1),
  EXPO_PUBLIC_REVENUECAT_ANDROID_KEY: z.string().min(1),
});

const parsed = schema.safeParse({
  EXPO_PUBLIC_POSTHOG_KEY: process.env.EXPO_PUBLIC_POSTHOG_KEY,
  EXPO_PUBLIC_POSTHOG_HOST: process.env.EXPO_PUBLIC_POSTHOG_HOST,
  EXPO_PUBLIC_LINKRUNNER_TOKEN: process.env.EXPO_PUBLIC_LINKRUNNER_TOKEN,
  EXPO_PUBLIC_REVENUECAT_IOS_KEY: process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY,
  EXPO_PUBLIC_REVENUECAT_ANDROID_KEY:
    process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY,
});

if (!parsed.success && !__DEV__) {
  throw new Error(`Invalid environment variables: ${parsed.error.message}`);
}

export const env = parsed.success
  ? parsed.data
  : {
      EXPO_PUBLIC_POSTHOG_KEY: "",
      EXPO_PUBLIC_POSTHOG_HOST: "https://us.i.posthog.com",
      EXPO_PUBLIC_LINKRUNNER_TOKEN: "",
      EXPO_PUBLIC_REVENUECAT_IOS_KEY: "",
      EXPO_PUBLIC_REVENUECAT_ANDROID_KEY: "",
    };
