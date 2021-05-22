import { placesActions } from "./places-slice";

export const addPlace = (title) => {
  return (dispatch) => {
    dispatch(placesActions.addPlace({ placeData: { title: title } }));
  };
};
