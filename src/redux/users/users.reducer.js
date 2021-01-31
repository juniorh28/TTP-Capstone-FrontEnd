import UserActionTypes from './users.types';

const defaultState = {
  id: "",
  email:"",
  error: "",
  isLoggedIn: false     
}

const userReducer = (state = defaultState, action) => {
  console.log('PL', action);
  switch (action.type) { 
    case UserActionTypes.GET_USER:
        return action.payload
    case UserActionTypes.LOGIN_USER:
        return action.payload
    case UserActionTypes.REGISTER:
      return action.payload
    case UserActionTypes.LOGOUT_USER:
        return state
    default:
        return state;
  }
};

export default userReducer;
