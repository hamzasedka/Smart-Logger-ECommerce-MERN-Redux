import productService from "../../services/product.service";
import {

  FETCH_ONE_PRODUCT_FAIL,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  SET_MESSAGE,

} from "./types";
export const getProducts = () => (dispatch) => {
  return productService.getProducts().then(
    (response) => {
      const products = response.data;
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products,
      });

      return products;
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: FETCH_PRODUCTS_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};


export const getOneProduct = (id) => (dispatch) => {
  return productService.getOneProduct(id).then(
    (response) => {
      const product = response.data;

      dispatch({
        type: FETCH_ONE_PRODUCT_SUCCESS,
        payload: product,
      });

      return product;
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: FETCH_ONE_PRODUCT_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
