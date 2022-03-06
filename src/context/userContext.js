import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState, createContext } from "react";
import { useNavigation } from "@react-navigation/native";

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const registerUser = async (userdata) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(userdata));
      Alert.alert("Success", "You can login now with the data of your account");
    } catch {
      Alert.alert("Error", "Something went wrong");
    }
  };
  const loginUser = async (email, password) => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      const userdata = JSON.parse(jsonValue);
      if (userdata.email == email && userdata.password == password) {
        setUser(email);
        console.log("succesfull login");
      } else {
        console.log("Data does not match, unsucessful login");
      }
    } catch {
      Alert.alert("Error", "Could not login in");
    }
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, registerUser, loginUser, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
