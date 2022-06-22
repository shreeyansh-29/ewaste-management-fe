/* eslint-disable indent */
import {
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
} from "../config/actionType";

const initialState = {};

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_SUCCESS:
      return action;
    case RESET_PASSWORD_ERROR:
      return action;
    default:
      return state;
  }
};
