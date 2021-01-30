import axios from "axios";
import CommentsActionTypes from "./comments.types";

//ACTION CREATORS
export const fetchComments = (comments) => ({
  type: CommentsActionTypes.FETCH_COMMENTS,
  payload: comments,
});

export const addComment = (comment) => ({
  type: CommentsActionTypes.ADD_COMMENT,
  payload: comment,
});

//THUNKS

export const fetchCommentsThunk = (placeId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/comments/${placeId}");
      console.log("data", data)
      .then((res) => res.data)
      .then((comments) => dispatch(fetchComments(comments)))
    } catch (error) { console.error(error); 
    }
  }
};

export const addCommentThunk = (newComment) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post("http://localhost:8080/api/comments/${newComment.placeId}", newComment);
            console.log("data", data)
            .then((res) => res.data)
            .then((newComment) => { dispatch(addComment(newComment))});
            } catch (error) { console.error(error);
        };
    }
}

