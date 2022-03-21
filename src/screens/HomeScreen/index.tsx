import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./style";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text>HomeScreen</Text>
    </View>
  );
}
