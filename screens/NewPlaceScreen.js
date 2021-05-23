import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
//import { placesActions } from "../store/places-slice";
import { addPlace } from "../store/places-actions";
import ImagePicker from "../components/ImagePicker";

const NewPlaceScreen = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(addPlace(titleValue, image));
    props.navigation.goBack();
  };

  const imageTakenHandler = (imagePath) => {
    setImage(imagePath);
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImagePicker onImageTake={imageTakenHandler} />
        <Button
          title="Save"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlaceScreen;

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
});
