import LikesActionTypes from "./likes.types";

const likesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LikesActionTypes.FETCH_LIKES:
          return { ...state, likes: action.payload};
        case LikesActionTypes.ADD_LIKES:
          return { ...state, count: state.count + 1, rows: action.payload };
        default:
          return state;
      }
    };
    
    export default likesReducer;
