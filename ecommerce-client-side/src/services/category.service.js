import axios from "axios";
const API_URL = "http://localhost:8080/api/";
const getCategories = () => {
  return axios.get(API_URL + "category");
};

export default {
    getCategories
};