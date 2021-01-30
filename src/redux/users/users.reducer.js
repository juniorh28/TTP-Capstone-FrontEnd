import UserActionTypes from './users.types';

const defaultUser = {}

const userReducer = (state = {}, action) => {
  console.log('PL', action);
  switch (action.type) { 
    case UserActionTypes.GET_USER:
        return action.payload
    case UserActionTypes.LOGOUT_USER:
        return state
    default:
        return state;
  }
};

export default userReducer;
