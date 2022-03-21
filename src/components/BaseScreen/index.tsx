import React from "react";
import { StyleSheet, View } from "react-native";
import styles from "./style";

export default function BaseScreen({ style, children }: any) {
  const stls = [styles.baseScreen, style];
  const componentStyle = StyleSheet.flatten(stls);
  return <View style={componentStyle}>{children}</View>;
}
