import axios from "axios";
import UserActionTypes from "./users.types";
const PORT = 8083
const defaultUser = {}

//ACTION CREATORS
export const getUser = (user) => {
  if (user.email !== undefined) {
    user.isLoggedIn = true
  }
  return{
  type: UserActionTypes.GET_USER,
  user
}
}

export const logOut = () => {
    return {
      type: UserActionTypes.LOGOUT_USER
}}


//THUNKS
export const me = () => async(dispatch) => {
    try {
      const res = axios.get(`https://ttp-capstone-test.herokuapp.com/auth/me`, {withCredentials:true})
      dispatch(getUser(res.data || {}))
    }catch (error) {
      console.log(error)
    }
}

//auth is for login and registration
export const authThunk = (email,password,method) => async(dispatch) => {
  let res 
  try {
    res = await axios.post(`https://ttp-capstone-test.herokuapp.com/auth/${method}`,
    {email,password},
    {withCredentials:true})
  } catch (authError) {
    return dispatch(getUser({error:authError}))
  }
  try {
    dispatch(getUser(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const userLogOut = () => async(dispatch) => {
  try {
      await axios.delete(`https://ttp-capstone-test.herokuapp.com/auth/logout`,{withCredentials:true})
      dispatch(logOut())
  } catch (error) {
    console.log(error)
  }
}