import React from "react";
import MainStack from "./stacks/MainStack";
import AuthStack from "./stacks/AuthStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Main"
        component={MainStack}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}
