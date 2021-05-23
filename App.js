import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { init } from "./helpers/db";

import PlaceNavigator from "./navigation/PlaceNavigator";

init()
  .then(() => {
    console.log("Database Initialized");
  })
  .catch((err) => {
    console.log("Database Initialization failed");
    console.log(err);
  });

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PlaceNavigator />
      </NavigationContainer>
    </Provider>
  );
}
