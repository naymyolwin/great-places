import { configureStore } from "@reduxjs/toolkit";

import placesSlice from "./places-slice";

export const store = configureStore({
  reducer: {
    places: placesSlice.reducer,
  },
});
