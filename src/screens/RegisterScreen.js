import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import COLORS from "../consts/colors";
import InputField from "../components/inputField";

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Register</Text>
        <Text style={styles.subtitleText}>
          Input your data to register a new user
        </Text>
        <InputField
          firstIconName="mail-outline"
          title="Email"
          placeholder="Enter your email address"
          keyboardType="email-address"
        />
        <InputField
          firstIconName="lock-outline"
          secondIconName="eye-off-outline"
          secondIconNameAlt="eye-outline"
          title="Password"
          placeholder="Enter your password"
          password
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    paddingTop: 50,
    paddingHorizontal: 25,
  },
  headerText: {
    fontWeight: "700",
    fontSize: 25,
    color: COLORS.black,
  },
  subtitleText: {
    fontWeight: "500",
    fontSize: 14,
    color: COLORS.grey,
    paddingTop: 10,
  },
});
