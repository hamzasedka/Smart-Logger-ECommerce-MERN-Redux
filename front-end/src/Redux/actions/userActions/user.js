
import adminService from "../../../services/admin.service";
import {  FETCH_USERS_FAIL, FETCH_USERS_SUCCESS, SET_MESSAGE } from "../types"
export const getUsers =()=>(dispatch)=>{
    return adminService.getUsers().then(
        (response)=>{
            const users=response.data
            dispatch({
                type:FETCH_USERS_SUCCESS,
                payload:users
            });
            
      return users
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
    
}