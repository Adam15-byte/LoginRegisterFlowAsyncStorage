import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/userContext";
import Button from "../components/Button";

const SettingsScreen = () => {
  const { logOut } = useContext(UserContext);
  const [name, setName] = useState("Test name");
  useEffect(async () => {
    const value = await AsyncStorage.getItem("user");
    const user = JSON.parse(value);
    setName(user.fullname);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}> Welcome, {name}</Text>
      <Button text="Log Out" onPress={() => logOut()} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 5,
  },
});
