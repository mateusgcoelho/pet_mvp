import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "../screens/category";

import Login from "../screens/login";
import Tutorial from "../screens/tutorial";
import DashboardRoutes from "./dashboard";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (    
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Tutorial"
        screenOptions={{ animation: "none" }}
      >
        <Stack.Screen 
          name="Tutorial"
          options={{
            headerShown: false,
          }}
          component={Tutorial}
        />

        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={Login}
        />

        <Stack.Screen
          name="Dashboard"
          options={{
            headerShown: false,
          }}
          component={DashboardRoutes}
        />

        <Stack.Screen
          name="Category"
          options={{
            headerShown: false,
          }}
          component={Category}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
