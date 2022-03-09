import {
  FETCH_ONE_PRODUCT_FAIL,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,

} from "../actions/types";

const initialState = [
  {
    _id: "",
    productTitle: "",
    productDisc: "",
    productImage: "",
  },
];
export default function productsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.payload;
    case FETCH_PRODUCTS_FAIL:
      return { ...state, payload };
    case FETCH_ONE_PRODUCT_SUCCESS:
      return { ...state, payload };
    case FETCH_ONE_PRODUCT_FAIL:
      return { ...state, payload };
    default:
      return state;
  }
}
