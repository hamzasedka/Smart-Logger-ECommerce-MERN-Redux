import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/";
const getMails = () => {
  return axios.get(API_URL + "AllMails");
};
const addMail = (mail) => {
  return axios.post(API_URL + "sendMail", mail, { headers: authHeader() });
};
const removeMail = (id) => {
  return axios.delete(API_URL + "removeMail/" + id, {
    headers: authHeader(),
  });
};

const getOneMail = (id) => {
  return axios.get(API_URL + "MailContent/" + id);
};
export default {
  getMails,
  addMail,
  removeMail,
  getOneMail,
};
