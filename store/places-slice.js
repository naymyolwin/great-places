import { createSlice } from "@reduxjs/toolkit";
import Places from "../models/places";

const placesSlice = createSlice({
  name: "places",
  initialState: { places: [] },
  reducers: {
    addPlace(state, actions) {
      const newPlace = {
        id: new Date().toString(),
        title: actions.payload.placeData.title,
        imageUri: actions.payload.placeData.image,
      };

      state.places.push(newPlace);
    },
  },
});

export const placesActions = placesSlice.actions;

export default placesSlice;
