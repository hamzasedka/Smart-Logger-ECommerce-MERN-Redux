import productService from "../../../services/product.service";
import {
  ADD_PRODUCTS_FAIL,
  ADD_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_FAIL,
  DELETE_PRODUCTS_SUCCESS,
  FETCH_ONE_PRODUCT_FAIL,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  SET_MESSAGE,
  UPDATE_PRODUCTS_FAIL,
  UPDATE_PRODUCTS_SUCCESS,
} from "../types";
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
export const AddProducts = (product) => (dispatch) => {
  return productService.addProducts(product).then(
    (response) => {
      dispatch({
        type: ADD_PRODUCTS_SUCCESS,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: ADD_PRODUCTS_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const DeleteProduct = (id) => (dispatch) => {
  return productService.removeProduct(id).then(
    (response) => {
      dispatch({
        type: DELETE_PRODUCTS_SUCCESS,
        payload: id,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: DELETE_PRODUCTS_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const UpdateProduct = (id, product) => (dispatch) => {
  return productService.updateProduct(id, product).then(
    (response) => {
      dispatch({
        type: UPDATE_PRODUCTS_SUCCESS,
        payload: id,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: UPDATE_PRODUCTS_FAIL,
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
