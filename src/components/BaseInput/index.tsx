import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { theme } from "../../config/theme";

import styles from "./style";

type Props = React.ComponentProps<typeof Input> & {
  errorText?: string;
  description?: string;
  inputStyle?: object;
  inputContainerStyle?: object;
};

export default function BaseInput({
  errorText,
  description,
  inputStyle,
  inputContainerStyle,
  ...props
}: Props) {
  const inputStyles: object[] = [styles.input];
  const inputContainerStyles: object[] = [styles.container];
  if (inputStyle) inputStyles.push(inputStyle);
  if (inputContainerStyle) inputContainerStyles.push(inputContainerStyle);
  const input = StyleSheet.flatten(inputStyles);
  const inputContainer = StyleSheet.flatten(inputContainerStyles);
  return (
    <View style={inputContainer}>
      <Input
        style={input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}
