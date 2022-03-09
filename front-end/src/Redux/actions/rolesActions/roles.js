import adminService from "../../../services/admin.service";
import {
  FETCH_ROLES_FAIL,
  FETCH_ROLES_SUCCESS,
  FETCH_USER_ROLES_FAIL,
  FETCH_USER_ROLES_SUCCESS,
  SET_MESSAGE,
} from "../types";

export const getUserRoles = (id) => (dispatch) => {
  return adminService.getRoles(id).then(
    (response) => {
      const roles = response.data;
      dispatch({
        type: FETCH_USER_ROLES_SUCCESS,
        payload: roles,
      });

      return roles;
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: FETCH_USER_ROLES_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const getAllRoles = () => (dispatch) => {
  return adminService.getAllRoles().then(
    (response) => {
      const roles = response.data;
      dispatch({
        type: FETCH_ROLES_SUCCESS,
        payload: roles,
      });

      return roles;
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: FETCH_ROLES_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
