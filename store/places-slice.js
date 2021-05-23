import { createSlice } from "@reduxjs/toolkit";

const placesSlice = createSlice({
  name: "places",
  initialState: { places: [] },
  reducers: {
    addPlace(state, actions) {
      const newPlace = {
        id: actions.payload.placeData.id.toString(),
        title: actions.payload.placeData.title,
        image: actions.payload.placeData.image,
      };

      state.places.push(newPlace);
    },
    setPlaces(state, actions) {
      state.places = actions.payload.places.map((pl) => {
        return {
          id: pl.id.toString(),
          title: pl.title,
          image: pl.image,
        };
      });
    },
  },
});

export const placesActions = placesSlice.actions;

export default placesSlice;
