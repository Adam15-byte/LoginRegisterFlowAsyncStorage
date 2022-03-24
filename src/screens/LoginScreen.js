import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../consts/colors";
import InputField from "../components/inputField";
import Button from "../components/Button";
import Background from "../components/Background";
import { UserContext } from "../context/userContext";

const LoginScreen = () => {
  const navigation = useNavigation();
  // state object tracking all four attributes of the user
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });
  const [valid, setValid] = useState({
    email: false,
    password: false,
  });
  const { loginUser } = useContext(UserContext);
  // universal function passed down to InputField components to update the state object
  const handleInputChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  // function to update the state of errors object with specific message for specific field
  const handleErrorAdding = (errorText, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorText }));
  };
  // function to upadate the state of validation for every field
  const handleValidChange = (bool, input) => {
    setValid((prevState) => ({ ...prevState, [input]: bool }));
  };
  const validateEmail = () => {
    if (!inputs.email) {
      handleErrorAdding("You have to provide an email", "email");
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleErrorAdding("Not a valid email address", "email");
    } else {
      handleValidChange(true, "email");
    }
  };

  const validatePassword = () => {
    if (!inputs.password) {
      handleErrorAdding("You have to provide a password", "password");
    } else {
      handleValidChange(true, "password");
    }
  };
  const attemptLogin = () => {
    if ((valid.email === true) & (valid.password === true)) {
      loginUser(inputs.email, inputs.password);
    } else {
      console.log("login email and login password are not valid attempts");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainContainer}>
        <Background>
          <View style={styles.contentContainer}>
            <Text style={styles.headerText}>Login</Text>
            <Text style={styles.subtitleText}>Input data to login</Text>
            <InputField
              firstIconName="mail-outline"
              title="Email"
              placeholder="Enter your email address"
              keyboardType="email-address"
              onFocus={() => {
                handleErrorAdding(null, "email");
              }}
              onChangeText={(text) => handleInputChange(text, "email")}
              errorMessage={errors.email}
            />
            <InputField
              firstIconName="lock-outline"
              secondIconName="eye-off-outline"
              secondIconNameAlt="eye-outline"
              title="Password"
              placeholder="Enter your password"
              onFocus={() => {
                handleErrorAdding(null, "password");
              }}
              onChangeText={(text) => handleInputChange(text, "password")}
              errorMessage={errors.password}
              password
            />
            <View style={styles.buttonTextContainer}>
              <Button
                text="Login"
                onPress={() => {
                  Keyboard.dismiss();
                  validateEmail();
                  validatePassword();
                  attemptLogin();
                }}
              />
              <Text
                style={styles.loginText}
                onPress={() => {
                  navigation.navigate("RegisterScreen");
                }}
              >
                Dont't have an account? Register
              </Text>
            </View>
          </View>
        </Background>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 100,
    paddingHorizontal: 25,
    width: "100%",
  },
  headerText: {
    fontWeight: "700",
    fontSize: 30,
    color: COLORS.white,
  },
  subtitleText: {
    fontWeight: "500",
    fontSize: 16,
    color: COLORS.grey,
    paddingTop: 10,
    paddingBottom: 10,
  },
  loginText: {
    textAlign: "center",
    fontSize: 18,
    color: COLORS.white,
    fontWeight: "600",
    marginBottom: 15,
  },
  buttonTextContainer: {
    backgroundColor: "'rgba(255, 255, 255, 0.3)'",
    borderRadius: 10,
  },
});
