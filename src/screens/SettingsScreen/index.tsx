import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./style";

export default function SettingsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => navigation.navigate("Auth")} />
      <Text>Settings Screen</Text>
    </View>
  );
}
