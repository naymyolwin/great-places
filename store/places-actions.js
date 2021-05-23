import { placesActions } from "./places-slice";
import * as FileSystem from "expo-file-system";
import { insertPlace, fetchPlaces } from "../helpers/db";

export const addPlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult = await insertPlace(title, newPath, "address", 15.6, 12.3);
      dispatch(
        placesActions.addPlace({
          placeData: { id: dbResult.insertId, title: title, image: newPath },
        })
      );
    } catch (error) {
      console.log("Something went wrong");
      throw error;
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();
      dispatch(placesActions.setPlaces({ places: dbResult.rows._array }));
    } catch (err) {
      throw err;
    }
  };
};
