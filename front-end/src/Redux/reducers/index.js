import { combineReducers } from "redux";
import auth from "../reducers/auth";
import products from "../reducers/product";
import message from "../reducers/message";
import users from "../reducers/user";
import categories from "../reducers/category";
import roles from "../reducers/roles";
export default combineReducers({
  auth,
  message,
  products,
  users,
  categories,
  roles,
});
