import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../consts/colors";

const Button = ({ text, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.buttonStyle}
      onPress={onPress}
    >
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    height: 55,
    alignSelf: "center",
    marginVertical: 15,
  },
  textStyle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
});
