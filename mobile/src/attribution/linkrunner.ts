import linkrunner from "expo-linkrunner";
import { env } from "@/lib/env";

let initialized = false;

export const initLinkrunner = async (): Promise<void> => {
  if (initialized) return;
  if (!env.EXPO_PUBLIC_LINKRUNNER_TOKEN) {
    if (__DEV__)
      console.warn("[linkrunner] missing token — attribution disabled");
    return;
  }
  await linkrunner.init(env.EXPO_PUBLIC_LINKRUNNER_TOKEN);
  initialized = true;
};

type IdentifyArgs = {
  userId: string;
  email?: string;
  name?: string;
  data?: Record<string, unknown>;
};

export const identifyForAttribution = async ({
  userId,
  email,
  name,
  data,
}: IdentifyArgs): Promise<void> => {
  if (!initialized) return;
  await linkrunner.signup({
    user_data: {
      id: userId,
      ...(email && { email }),
      ...(name && { name }),
    },
    data,
  });
};

export const setAttributionUser = async (
  userId: string,
  data?: Record<string, unknown>,
): Promise<void> => {
  if (!initialized) return;
  await linkrunner.setUserData({ user_data: { id: userId }, data });
};
