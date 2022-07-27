/* eslint-disable indent */
import {
  SIGN_IN_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from "../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};
export const signInReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SIGN_IN_REQUEST:
      return {...state, isLoading: true};
    case SIGN_IN_SUCCESS:
      return {...state, data: payload};
    case SIGN_IN_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
