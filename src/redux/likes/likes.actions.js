import axios from "axios";
import LikesActionTypes from "./likes.types";

//ACTION CREATORS
export const fetchLikes = (likes) => ({
  type: LikesActionTypes.FETCH_LIKES,
  payload: likes,
});

export const addLike = (like) => ({
  type: LikesActionTypes.ADD_LIKE,
  payload: like,
});

//THUNKS

export const fetchLikesThunk = (placeId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/likes/${placeId}");
      console.log("data", data)
      .then((res) => res.data)
      .then((likes) => dispatch(fetchLikes(likes)))
    } catch (error) { console.error(error); 
    }
  }
};

