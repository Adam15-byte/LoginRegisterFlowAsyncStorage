import { StyleSheet, Text, View, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import React from "react";
import COLORS from "../consts/colors";

const InputField = ({
  title,
  firstIconName,
  secondIconName,
  errorMessage,
  password,
  onFocus = () => {},
  ...props
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.inputContainer]}>
        <Icon name={firstIconName} />
        <TextInput placeholder="email" />
        <Icon name={secondIconName} />
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: COLORS.lightgrey,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: COLORS.grey,
    flexDirection: "row",
  },
  title: {
    fontSize: 13,
    color: COLORS.grey,
    paddingVertical: 5,
  },
});
