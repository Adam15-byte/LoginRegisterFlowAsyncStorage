import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { UserContextProvider } from "./src/context/userContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./Navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <UserContextProvider>
        <Navigation />
      </UserContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
