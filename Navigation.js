import React, { useContext, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import { UserContext } from "./src/context/userContext";
const Stack = createStackNavigator();

const Navigation = () => {
  const { user } = useContext(UserContext);
  const [logState, setLogState] = useState(user);
  useEffect(() => {
    setLogState(user ? true : null);
  }, [user]);
  return (
    <NavigationContainer>
      {/* If user is not logged in operate in the LoginScreen and RegisterScreen */}
      {user === null && (
        <Stack.Navigator
          initialRouteName="RegisterScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      )}
      {/* If user is is logged in operate in the Settings Screen */}
      {user !== null && (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
