import axios from "axios";
import commentsActionTypes from "./comments.types";

const commentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case commentsActionTypes.FETCH_COMMENTS:
          return { ...state, comments: action.payload};
        case commentsActionTypes.ADD_COMMENTS:
          return { ...state, comments: action.payload };
        default:
          return state;
      }
    };
    
    export default commentsReducer;