import axios from "axios";
import PlacesActionTypes from "./places.types";

//ACTION CREATORS
export const fetchAllPlaces = (payload) => ({
  type: PlacesActionTypes.FETCH_ALL_PLACES,
  payload,
});

export const fetchSinglePlace = (payload) => ({
  type: PlacesActionTypes.FETCH_SINGLE_PLACE,
  payload,
});

export const addNewPlace = (payload) => ({
  type: PlacesActionTypes.ADD_NEW_PLACE,
  payload,
});

export const addLike = (payload) => ({
  type: PlacesActionTypes.ADD_LIKE,
  payload,
});

export const addComment = (payload) => ({
  type: PlacesActionTypes.ADD_COMMENT,
  payload,
});

//THUNKS

export const fetchAllPlacesThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://ttp-capstone-test.herokuapp.com/api/places"
      );
      console.log("data", data);
      dispatch(fetchAllPlaces(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchAllPlacesByBoroughThunk = (borough) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://ttp-capstone-test.herokuapp.com/api/places/boroughs/${borough}`
      );
      console.log("data", data);
      dispatch(fetchAllPlaces(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchAllPlacesByCategoryThunk = (category) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://ttp-capstone-test.herokuapp.com/api/places/categories/${category}`
      );
      console.log("data", data);
      dispatch(fetchAllPlaces(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSinglePlaceThunk = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://ttp-capstone-test.herokuapp.com/api/places/all/${id}`
      );
      console.log("data", data);
      dispatch(fetchSinglePlace(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addNewPlaceThunk = (obj) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `https://ttp-capstone-test.herokuapp.com/api/places/newPlace`,
        obj
      );
      console.log("data", data);
      if (!data.error) dispatch(addNewPlace(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addLikeThunk = (id) => {
  return async (dispatch) => {
    try {
      const data = await axios.put(
        `https://ttp-capstone-test.herokuapp.com/api/places/editLikes/${id}`
      );

      dispatch(addLike(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addCommentThunk = (id, obj) => {
  return async (dispatch) => {
    try {
      console.log(obj);
      //updates oldComments
      obj.oldComments.push(obj.newComment);
      //puts updated comments in database
      const data = await axios.put(
        `https://ttp-capstone-test.herokuapp.com/api/places/addComment/${id}`,
        obj.oldComments
      );

      dispatch(addLike(data));
    } catch (error) {
      console.error(error);
    }
  };
};
