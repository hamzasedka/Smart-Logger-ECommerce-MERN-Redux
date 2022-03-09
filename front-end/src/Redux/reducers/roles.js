import {
  FETCH_ROLES_FAIL,
  FETCH_ROLES_SUCCESS,
  FETCH_USER_ROLES_FAIL,
  FETCH_USER_ROLES_SUCCESS,
} from "../actions/types";

const initialState = [
  {
    _id: "",
    roleName: "",
  },
];
export default function rolesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER_ROLES_SUCCESS:
      return [action.payload];
    case FETCH_USER_ROLES_FAIL:
      return { ...state, payload };
    case FETCH_ROLES_SUCCESS:
      return action.payload;
    case FETCH_ROLES_FAIL:
      return { ...state, payload };
    default:
      return state;
  }
}
