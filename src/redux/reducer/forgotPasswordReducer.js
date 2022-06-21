/* eslint-disable indent */
import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from "../config/actionType";

const initialState = {
  email: "",
};

export const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {};
    case FORGOT_PASSWORD_SUCCESS:
      console.log(action);
      return action;
    case FORGOT_PASSWORD_ERROR:
      return action;
    default:
      return state;
  }
};
