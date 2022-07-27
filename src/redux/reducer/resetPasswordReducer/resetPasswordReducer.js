/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const resetPasswordReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.RESET_PASSWORD_REQUEST:
      return {...state, isLoading: true};
    case types.RESET_PASSWORD_SUCCESS:
      return {...state, data: payload};
    case types.RESET_PASSWORD_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
