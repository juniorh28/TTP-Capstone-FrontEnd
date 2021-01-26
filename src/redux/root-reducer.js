import { combineReducers } from "redux";

// Reducers
import playerReducer from "./player/player.reducer";
import placesReducer from "./places/places.reducer";

const rootReducer = combineReducers({
  players: playerReducer,
  places: placesReducer,
});

export default rootReducer;
