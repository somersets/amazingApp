import React from "react";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../../config/theme";
import { StyleSheet } from "react-native";
import styles from "./style";

type Props = React.ComponentProps<typeof PaperButton>;

export default function Button({ mode, style, ...props }: Props) {
  const stls: object[] = [styles.button];
  if (style) stls.push(style);
  if (mode === "outlined") stls.push({ backgroundColor: theme.colors.surface });
  const componentStyle = StyleSheet.flatten(stls);
  return (
    <PaperButton
      style={componentStyle}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  );
}
