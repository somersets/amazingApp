import { Platform } from "react-native";

export const PLATFORMS = {
  IOS: Platform.OS === "ios",
  ANDROID: Platform.OS === "android",
};
