import React from "react";
import { Text } from "react-native-paper";
import styles from "./style";
import { StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
  style?: object;
};

export default function BaseParagraph(props: Props) {
  const stls: object[] = [styles.text];
  if (props.style) stls.push(props.style);
  const componentStyle = StyleSheet.flatten(stls);
  console.log(componentStyle);
  return <Text style={componentStyle}>{props.children}</Text>;
}
