import { PostHog } from "posthog-react-native";
import { env } from "@/lib/env";

export type AppEvent =
  | { name: "app_open"; props?: Record<string, never> }
  | { name: "screen_viewed"; props: { screen: string } }
  | { name: "paywall_viewed"; props: { source: string } }
  | { name: "purchase_started"; props: { productId: string } }
  | {
      name: "purchase_completed";
      props: { productId: string; revenueUsd?: number };
    };

let client: PostHog | null = null;

export const initPostHog = async (): Promise<PostHog | null> => {
  if (!env.EXPO_PUBLIC_POSTHOG_KEY) {
    if (__DEV__)
      console.warn(
        "[posthog] missing EXPO_PUBLIC_POSTHOG_KEY — analytics disabled",
      );
    return null;
  }
  client = new PostHog(env.EXPO_PUBLIC_POSTHOG_KEY, {
    host: env.EXPO_PUBLIC_POSTHOG_HOST,
    enableSessionReplay: true,
    captureAppLifecycleEvents: true,
  });
  return client;
};

export const getPostHog = (): PostHog | null => client;

export const track = <E extends AppEvent>(event: E): void => {
  if (!client) return;
  client.capture(event.name, event.props);
};

export const identify = (
  distinctId: string,
  properties?: Record<string, unknown>,
): void => {
  client?.identify(distinctId, properties);
};
