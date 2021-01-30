import PlacesActionTypes from "./places.types";

const INITIAL_STATE = {
  allPlaces: [],
  singlePlace: {},
};

const placesReducer = (state = INITIAL_STATE, action) => {
  console.log("PL", action);
  switch (action.type) {
    case PlacesActionTypes.FETCH_ALL_PLACES:
      return { ...state, allPlaces: action.payload };
    case PlacesActionTypes.FETCH_SINGLE_PLACE:
      return { ...state, singlePlace: action.payload };
    case PlacesActionTypes.ADD_NEW_PLACE:
      return { ...state, singlePlace: action.payload };
    case PlacesActionTypes.ADD_LIKE:
      return { ...state, singlePlace: action.payload };
    default:
      return state;
  }
};

export default placesReducer;
