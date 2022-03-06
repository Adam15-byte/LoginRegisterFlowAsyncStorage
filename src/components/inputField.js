import { StyleSheet, Text, View, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import React, { useState } from "react";
import COLORS from "../consts/colors";

const InputField = ({
  title,
  firstIconName,
  secondIconName,
  secondIconNameAlt,
  errorMessage,
  setError,
  password,
  keyboardType,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secure, setIsSecure] = useState(password);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: errorMessage
              ? COLORS.red
              : isFocused
              ? COLORS.darkgrey
              : COLORS.grey,
          },
        ]}
      >
        <Icon
          size={20}
          color={COLORS.darkblue}
          style={styles.firstIcon}
          name={firstIconName}
        />
        <View style={styles.textInputContainer}>
          <TextInput
            keyboardType={keyboardType}
            autoCorrect={false}
            spellCheck={false}
            secureTextEntry={secure ? true : false}
            onFocus={() => {
              setIsFocused(true);
              onFocus();
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            {...props}
          />
        </View>
        {password && (
          <Icon
            size={20}
            type="ionicon"
            // onPress the state of secure is changed to opposite
            onPress={() => setIsSecure(!secure)}
            color={COLORS.darkblue}
            style={styles.secondIcon}
            name={secure ? secondIconName : secondIconNameAlt}
          />
        )}
      </View>
      {errorMessage && (
        <View>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      )}
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
    // borderColor: COLORS.grey,
    flexDirection: "row",
    borderRadius: 10,
    width: "100%",
  },
  title: {
    fontSize: 13,
    color: COLORS.grey,
    paddingVertical: 4,
  },
  firstIcon: {
    marginRight: 10,
  },
  textInputContainer: {
    width: "85%",
    justifyContent: "center",
  },
  secondIconContainer: {
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  errorMessage: {
    color: COLORS.red,
    fontSize: 13,
    paddingVertical: 4,
  },
});
