import {
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_USERS_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
} from "../actions/types";

const initialState = [
  {
    _id: "",
    username: "",
    email: "",
    status: "",
    userImage: "",
    password: "",
  },
];
export default function usersReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERS_SUCCESS:
      return action.payload;
    case FETCH_PRODUCTS_FAIL:
      return { ...state, payload };
    case UPDATE_USER_SUCCESS:
      return { ...state, payload };
    case UPDATE_USER_FAIL:
      return { ...state, payload };
    case ADD_USER_SUCCESS:
      return { ...state, payload };
    case ADD_USER_FAIL:
      return { ...state, payload };
    case DELETE_USER_SUCCESS:
      return { ...state, payload };
    case DELETE_USER_FAIL:
      return { ...state, payload };
    default:
      return state;
  }
}
