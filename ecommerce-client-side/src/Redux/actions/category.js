import categoryService from "../../services/category.service";
import {
  FETCH_CATEGORY_FAIL,
  FETCH_CATEGORY_SUCCESS,
  SET_MESSAGE,
} from "./types";
export const getCategories = () => (dispatch) => {
  return categoryService.getCategories().then(
    (response) => {
      const categories = response.data;
      dispatch({
        type: FETCH_CATEGORY_SUCCESS,
        payload: categories,
      });

      return categories;
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: FETCH_CATEGORY_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
