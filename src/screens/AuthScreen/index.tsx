import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import BaseScreen from "../../components/BaseScreen";
import AuthHeader from "./components/AuthHeader";
import BaseButton from "../../components/BaseButton";
import { PLATFORMS } from "../../utils/helpers";
import BaseInput from "../../components/BaseInput";
import useController from "./controller";
import styles from "./style";

export default function AuthScreen({ navigation }: any) {
  const { inputValue, onChangeText } = useController();
  return (
    <KeyboardAvoidingView
      behavior={PLATFORMS.IOS ? "padding" : "height"}
      style={{ flex: 1 }}>
      <BaseScreen style={styles.container}>
        <View style={styles.loginForm}>
          <AuthHeader />
          <BaseInput
            value={inputValue}
            onChangeText={(text) => onChangeText(text)}
            keyboardType="number-pad"
            label="Phone"
          />
          <BaseButton
            mode="contained"
            onPress={() => navigation.navigate("Main")}>
            TO MAIN STACK
          </BaseButton>
        </View>
      </BaseScreen>
    </KeyboardAvoidingView>
  );
}
