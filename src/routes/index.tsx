import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import Home from "../screens/home";
import Tutorial from "../screens/tutorial";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <>
      <StatusBar style="inverted" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tutorial">
          <Stack.Screen name="Tutorial" options={{
            headerShown: false,
          }} component={Tutorial} />
          <Stack.Screen name="Home" options={{
            headerShown: false,
          }} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Routes;