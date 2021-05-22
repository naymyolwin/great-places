import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";

const PlacesListScreen = () => {
  return (
    <View>
      <Text>Places List Screen</Text>
    </View>
  );
};

// PlacesListScreen.navigationOptions = (navData) => {
//   return {
//     headerRight: () => (
//       <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//         <Item
//           title="Add Place"
//           iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
//           onPress={() => {
//             navData.navigation.navigate("NewPlaceScreen");
//           }}
//         />
//       </HeaderButtons>
//     ),
//   };
// };

export default PlacesListScreen;

const styles = StyleSheet.create({});