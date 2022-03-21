import React from "react";
import AppNavigation from "./src/navigation/navigation";
import { Provider } from "react-native-paper";
import { theme } from "./src/config/theme";
function App() {
  return (
    <Provider theme={theme}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
