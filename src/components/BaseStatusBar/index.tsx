import React from "react";
import { StatusBar, StatusBarStyle, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BaseStatusBar = ({
  backgroundColor,
  barStyle,
}: {
  backgroundColor: string;
  barStyle: StatusBarStyle;
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        barStyle={barStyle}
        backgroundColor={backgroundColor}
      />
    </View>
  );
};

export default BaseStatusBar;
