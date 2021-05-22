import React from "react";
import { Button, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlacesListScreen from "../screens/PlacesListScreen";
import Colors from "../constants/Colors";
import CustomHeaderButton from "../components/CustomHeaderButton";

const Stack = createStackNavigator();

export default function PlaceNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}
    >
      <Stack.Screen
        name="PlacesListScreen"
        component={PlacesListScreen}
        options={({ navigation }) => ({
          headerTitle: "Great Places",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Add Place"
                iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
                onPress={() => {
                  navigation.navigate("NewPlaceScreen");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="PlaceDetailScreen"
        component={PlaceDetailScreen}
        options={{ title: "Place Detail" }}
      />
      <Stack.Screen
        name="NewPlaceScreen"
        component={NewPlaceScreen}
        options={{ title: "Add Place" }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ title: "Location" }}
      />
    </Stack.Navigator>
  );
}
