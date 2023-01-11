import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Main } from "./views/Main";
import { PropertyDetail } from "./views/PropertyDetail";
const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="PropertyDetail" component={PropertyDetail} />
    </Stack.Navigator>
  );
};
