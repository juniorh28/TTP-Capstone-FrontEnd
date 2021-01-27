import PlacesActionTypes from "./places.types";

const INITIAL_STATE = {
  allPlaces: [],
};

const placesReducer = (state = INITIAL_STATE, action) => {
  console.log("PL", action);
  switch (action.type) {
    case PlacesActionTypes.FETCH_ALL_PLACES:
      return { ...state, allPlaces: action.payload };
    default:
      return state;
  }
};

export default placesReducer;
