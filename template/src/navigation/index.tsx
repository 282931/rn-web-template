import * as React from "react";

import BottomTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "types/naviTypes";
import ScaleView from "screens/ScaleView";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Linking = {
  prefixes: [
    "myapp://", // App-specific scheme
    "https://example.com", // Prefix for universal links
    "https://*.example.com", // Prefix which matches any subdomain
  ],
  config: {
    initialRouteName: undefined,
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: "one",
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: "two",
            },
          },
        },
      },
      ScaleView: "scale",
      NotFound: "*",
    },
  },
};

export default function Navigation() {
  return (
    <NavigationContainer<RootStackParamList>
      linking={Linking}
      fallback={<Text>Loading</Text>}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
      <Stack.Screen name="ScaleView" component={ScaleView} />
    </Stack.Navigator>
  );
}
