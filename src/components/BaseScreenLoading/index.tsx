import React from "react";
import BaseScreen from "../BaseScreen";
import { ActivityIndicator, PlatformColor } from "react-native";

export default function BaseScreenLoading({}: any) {
  return (
    <BaseScreen>
      <ActivityIndicator size="large" color={PlatformColor("label")} />
    </BaseScreen>
  );
}
