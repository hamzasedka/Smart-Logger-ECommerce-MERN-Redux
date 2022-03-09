import { combineReducers } from "redux";
import products from "./product";
import message from "./message";
import category from "./category";

export default combineReducers({
  message,
  products,
  category,
});
