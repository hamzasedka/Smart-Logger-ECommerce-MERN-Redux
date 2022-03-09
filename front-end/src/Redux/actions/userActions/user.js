import adminService from "../../../services/admin.service";
import {
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  FETCH_USERS_FAIL,
  FETCH_USERS_SUCCESS,
  SET_MESSAGE,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
} from "../types";
export const getUsers = () => (dispatch) => {
  return adminService.getUsers().then(
    (response) => {
      const users = response.data;
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: users,
      });

      return users;
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: FETCH_USERS_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const addUser = (user) => (dispatch) => {
  return adminService.addUser(user).then(
    (response) => {
      dispatch({
        type: ADD_USER_SUCCESS,
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
        type: ADD_USER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const UpdateUser = (id, product) => (dispatch) => {
  return adminService.updateUser(id, product).then(
    (response) => {
      dispatch({
        type: UPDATE_USER_SUCCESS,
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
        type: UPDATE_USER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const DeleteUser = (id) => (dispatch) => {
  return adminService.removeUser(id).then(
    (response) => {
      dispatch({
        type: DELETE_USER_SUCCESS,
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
        type: DELETE_USER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
