import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";

import Home from "../screens/home";
import Login from "../screens/login";
import Tutorial from "../screens/tutorial";

const Stack = createNativeStackNavigator();

export default function Routes() {
  let [fontsLoaded, error] = useFonts({
    "ReadexPro-ExtraLight": require("../../assets/fonts/ReadexPro-ExtraLight.ttf"),
    "ReadexPro-Light": require("../../assets/fonts/ReadexPro-Light.ttf"),
    "ReadexPro-Medium": require("../../assets/fonts/ReadexPro-Medium.ttf"),
    "ReadexPro-Regular": require("../../assets/fonts/ReadexPro-Regular.ttf"),
    "ReadexPro-SemiBold": require("../../assets/fonts/ReadexPro-SemiBold.ttf"),
    "ReadexPro-Bold": require("../../assets/fonts/ReadexPro-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tutorial" screenOptions={{ animation: "none" }}>
          <Stack.Screen name="Tutorial" options={{
            headerShown: false,
          }} component={Tutorial} />
          <Stack.Screen name="Login" options={{
            headerShown: false,
          }} component={Login} />
          <Stack.Screen name="Home" options={{
            headerShown: false,
          }} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
