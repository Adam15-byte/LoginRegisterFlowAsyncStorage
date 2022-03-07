import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import COLORS from "../consts/colors";

const Button = ({ text, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.buttonStyle}
      onPress={onPress}
    >
      <LinearGradient
        style={styles.gradientFilling}
        colors={[COLORS.gradient1, COLORS.gradient2, COLORS.gradient3]}
      >
        <Text style={styles.textStyle}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    width: "80%",
    backgroundColor: "transparent",
    height: 55,
    alignSelf: "center",
    marginVertical: 15,
  },
  gradientFilling: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "700",
  },
});
