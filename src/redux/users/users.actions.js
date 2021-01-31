import axios from "axios";
import UserActionTypes from "./users.types";
const PORT = 8083
const defaultUser = {}

//ACTION CREATORS

const getUser = user => { 
  if (user.email !== undefined) {
    user.isLoggedIn = true
  }
  
  return {
    type: UserActionTypes.GET_USER,
    payload: user
  }
}
export const registerUser = (user) => {
  return{
  type: UserActionTypes.GET_USER,
  user
}
}

export const loginUser = (user) => {
  if (user.email !== undefined) {
    user.isLoggedIn = true
  }
  return{
  type: UserActionTypes.LOGIN_USER,
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
      const res = axios.get(`https://ttp-capstone-test.herokuapp.com/auth/me`)
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


//auth is for login and registration
export const register = (email,password) => async(dispatch) => {
  let res 
  try {
    res = await axios.post(`https://ttp-capstone-test.herokuapp.com/auth/register`,
    {email,password})
  } catch (authError) {
    return dispatch(registerUser({error:authError}))
  }
  try {
    dispatch(registerUser(res.data))
  } catch (error) {
    console.error(error)
  }
}



//auth is for login and registration
export const loginUserThunk = (email,password) => async(dispatch) => {
  let res 
  try {
    res = await axios.post(`https://ttp-capstone-test.herokuapp.com/auth/login`,
    {email,password})
  } catch (authError) {
    return dispatch(loginUser({error:authError}))
  }
  try {
    dispatch(loginUser(res.data))
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