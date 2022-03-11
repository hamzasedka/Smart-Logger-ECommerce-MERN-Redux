import mailService from "../../../services/mail.service";
import {
  FETCH_MAIL_SUCCESS,
  FETCH_MAIL_FAIL,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAIL,
  REMOVE_MAIL_SUCCESS,
  REMOVE_MAIL_FAIL,
  SET_MESSAGE,
  FETCH_ONE_MAIL_SUCCESS,
  FETCH_ONE_MAIL_FAIL,
} from "../types";
export const getmails = () => (dispatch) => {
  return mailService.getmails().then(
    (response) => {
      const mails = response.data;
      dispatch({
        type: FETCH_MAIL_SUCCESS,
        payload: mails,
      });

      return mails;
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: FETCH_MAIL_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const Sendmails = (mail) => (dispatch) => {
  return mailService.addmails(mail).then(
    (response) => {
      dispatch({
        type: SEND_MAIL_SUCCESS,
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
        type: SEND_MAIL_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const Deletemail = (id) => (dispatch) => {
  return mailService.removemail(id).then(
    (response) => {
      dispatch({
        type: REMOVE_MAIL_SUCCESS,
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
        type: REMOVE_MAIL_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const getOnemail = (id) => (dispatch) => {
  return mailService.getOnemail(id).then(
    (response) => {
      const mail = response.data;

      dispatch({
        type: FETCH_ONE_MAIL_SUCCESS,
        payload: mail,
      });

      return mail;
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: FETCH_ONE_MAIL_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
