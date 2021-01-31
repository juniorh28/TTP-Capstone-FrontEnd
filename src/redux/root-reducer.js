import { combineReducers } from "redux";

// Reducers
import playerReducer from "./player/player.reducer";
import placesReducer from "./places/places.reducer";
import usersReducer from "./users/users.reducer"

const rootReducer = combineReducers({
  players: playerReducer,
  places: placesReducer,
  users: usersReducer
});

export default rootReducer;
