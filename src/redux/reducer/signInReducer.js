/* eslint-disable indent */
import {
  SIGN_IN_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from "../config/actionType";

const initialState = {};
export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return action;
    case SIGN_IN_SUCCESS:
      return action;
    case SIGN_IN_ERROR:
      return action;
    default:
      return state;
  }
};
