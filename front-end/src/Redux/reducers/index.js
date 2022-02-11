import { combineReducers } from "redux";
import auth from "../reducers/auth";
import products from "../reducers/product"
import message from "../reducers/message";
export default combineReducers({
  auth,
  message,
  products
});