import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store/store";
import { Provider } from "react-redux";

import PlaceNavigator from "./navigation/PlaceNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PlaceNavigator />
      </NavigationContainer>
    </Provider>
  );
}
