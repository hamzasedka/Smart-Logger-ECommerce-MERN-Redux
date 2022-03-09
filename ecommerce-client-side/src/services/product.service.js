import axios from "axios";
const API_URL = "http://localhost:8080/api/";
const getProducts = () => {
  return axios.get(API_URL + "products");
};
const getOneProduct = (id) => {
  return axios.get(API_URL + "productDetails/" + id);
};
export default {
  getOneProduct,
  getProducts,
};
