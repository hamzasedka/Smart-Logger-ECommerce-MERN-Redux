import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/";
const getProducts = () => {
  return axios.get(API_URL + "products");
};
const addProducts = (product) => {
  return axios.post(API_URL + "addProduct", product, { headers: authHeader() });
};
const removeProduct = (id) => {
  return axios.delete(API_URL + "removeProduct/" + id, {
    headers: authHeader(),
  });
};
const updateProduct = (id) => {
  return axios.put(API_URL + "updateProduct/" + id, {
    headers: authHeader(),
  });
};
const getOneProduct = (id) => {
  return axios.get(API_URL + "productDetails/" + id);
};
export default {
  getOneProduct,
  updateProduct,
  getProducts,
  addProducts,
  removeProduct,
};
