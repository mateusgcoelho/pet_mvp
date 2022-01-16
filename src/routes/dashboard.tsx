import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";

import Home from "../screens/home";
import Search from "../screens/search";
import Category from "../screens/category";

const Tab = createBottomTabNavigator();

export default function DashboardRoutes(): JSX.Element {
  const ICON_DEFAULT_SIZE = 20;

  return (
    <>
      <Tab.Navigator 
        initialRouteName="Home"
      >
          <Tab.Screen
              options={{
                  headerShown: false,
                  tabBarStyle: {
                    shadowColor: "#ffffff",
                    height: 56,
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                    <View>
                      <AntDesign
                        name="home"
                        size={ICON_DEFAULT_SIZE}
                        color={ focused ? "#5949C1" : "#C4C4C4" } />
                    </View>
                  ),
              }}
              name="Home"
              component={Home}
          />

          <Tab.Screen
              options={{
                  headerShown: false,
                  tabBarStyle: {
                    shadowColor: "#ffffff",
                    height: 56,
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                    <View>
                      <AntDesign
                        name="search1"
                        size={ICON_DEFAULT_SIZE}
                        color={ focused ? "#5949C1" : "#C4C4C4" } />
                    </View>
                  ),
              }}
              name="Search"
              component={Search}
          />

          <Tab.Screen
              options={{
                  headerShown: false,
                  tabBarStyle: {
                    shadowColor: "#ffffff",
                    height: 56,
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                    <View>
                      <AntDesign
                        name="profile"
                        size={ICON_DEFAULT_SIZE}
                        color={ focused ? "#5949C1" : "#C4C4C4" } />
                    </View>
                  ),
              }}
              name="Order"
              component={Home}
          />

          <Tab.Screen
              options={{
                  headerShown: false,
                  tabBarStyle: {
                    shadowColor: "#ffffff",
                    height: 56,
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                    <View>
                      <AntDesign
                        name="user"
                        size={ICON_DEFAULT_SIZE}
                        color={ focused ? "#5949C1" : "#C4C4C4" } />
                    </View>
                  ),
              }}
              name="Profile"
              component={Home}
          />
      </Tab.Navigator>
    </>
  );
}
