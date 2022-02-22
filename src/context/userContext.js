import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, createContext } from "react";

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
