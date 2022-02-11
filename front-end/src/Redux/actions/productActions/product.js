
import productService from "../../../services/product.service"
import { FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_SUCCESS, SET_MESSAGE } from "../types"
export const getProducts =()=>(dispatch)=>{
    return productService.getProducts().then(
        (response)=>{
            const products=response.data
            dispatch({
                type:FETCH_PRODUCTS_SUCCESS,
                payload:products
            });
            
      return products
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
    
}