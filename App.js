import { StyleSheet, SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import { store } from "./store";
import LandingScreen from "./screens/LandingScreen";

export default function App() {
  return (
    <Provider store={store}>
      <LandingScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
