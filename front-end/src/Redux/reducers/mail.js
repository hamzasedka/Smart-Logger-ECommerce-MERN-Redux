import {
  FETCH_MAIL_SUCCESS,
  FETCH_MAIL_FAIL,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAIL,
  REMOVE_MAIL_SUCCESS,
  REMOVE_MAIL_FAIL,
  FETCH_ONE_MAIL_SUCCESS,
  FETCH_ONE_MAIL_FAIL,
} from "../types";

const initialState = [
  {
    _id: "",
    mailSubject: "",
    mailContent: "",
  },
];
export default function MAILReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_MAIL_SUCCESS:
      return action.payload;
    case FETCH_MAIL_FAIL:
      return { ...state, payload };
    case SEND_MAIL_SUCCESS:
      return { ...state, payload };
    case SEND_MAIL_FAIL:
      return { ...state, payload };
    case REMOVE_MAIL_SUCCESS:
      return { ...state, payload };
    case REMOVE_MAIL_FAIL:
      return { ...state, payload };

    case FETCH_ONE_MAIL_SUCCESS:
      return { ...state, payload };
    case FETCH_ONE_MAIL_FAIL:
      return { ...state, payload };
    default:
      return state;
  }
}
