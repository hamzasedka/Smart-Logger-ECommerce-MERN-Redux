import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/admin/";
const getUsers = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};
const getAllRoles = () => {
  return axios.get(API_URL + "getAllRoles", { headers: authHeader() });
};
const getRoles = (id) => {
  return axios.get(API_URL + "userRoles/" + id, { headers: authHeader() });
};
const updateUser = (id, user) => {
  return axios.put(API_URL + "updateUser/" + id, user, {
    headers: authHeader(),
  });
};
const addUser = (user) => {
  return axios.post(API_URL + "addUser/", user, {
    headers: authHeader(),
  });
};
const removeUser = (id) => {
  return axios.delete(API_URL + "removeUser/" + id, {
    headers: authHeader(),
  });
};
export default {
  getUsers,
  removeUser,
  addUser,
  updateUser,
  getRoles,
  getAllRoles,
};
