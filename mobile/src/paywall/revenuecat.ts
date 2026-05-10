import { Platform } from "react-native";
import Purchases, {
  type CustomerInfo,
  LOG_LEVEL,
} from "react-native-purchases";
import { env } from "@/lib/env";

let configured = false;

export const initRevenueCat = (): void => {
  if (configured) return;
  const apiKey =
    Platform.OS === "ios"
      ? env.EXPO_PUBLIC_REVENUECAT_IOS_KEY
      : env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY;

  if (!apiKey) {
    if (__DEV__)
      console.warn(
        `[revenuecat] missing API key for ${Platform.OS} — paywall disabled`,
      );
    return;
  }

  if (__DEV__) Purchases.setLogLevel(LOG_LEVEL.DEBUG);
  Purchases.configure({ apiKey });
  configured = true;
};

export const linkRevenueCatUser = async (userId: string): Promise<void> => {
  if (!configured) return;
  await Purchases.logIn(userId);
};

export const getActiveEntitlement = async (key: string): Promise<boolean> => {
  if (!configured) return false;
  const info: CustomerInfo = await Purchases.getCustomerInfo();
  return Boolean(info.entitlements.active[key]);
};
