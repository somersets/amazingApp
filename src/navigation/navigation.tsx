import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import RootStack from "./RootStack";
import BaseStatusBar from "../components/BaseStatusBar";

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <BaseStatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
