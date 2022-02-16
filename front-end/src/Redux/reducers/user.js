import { FETCH_PRODUCTS_FAIL, FETCH_USERS_SUCCESS } from "../actions/types";

const initialState = [{
    _id:"",
    username:"",
    email:"",
    status:"",
    userImage:"",
    password:""
}];
export default function usersReducer (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERS_SUCCESS:
      return action.payload;
    case FETCH_PRODUCTS_FAIL:
      return { ...state,payload};
    default:
      return state;
  }
}