import { FETCH_CATEGORY_FAIL, FETCH_CATEGORY_SUCCESS } from "../actions/types";

const initialState = [{
    _id:"",
    categoryName:""
}];
export default function categoryReducer (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CATEGORY_SUCCESS:
      return action.payload;
    case FETCH_CATEGORY_FAIL:
      return { ...state,payload};
    default:
      return state;
  }
}