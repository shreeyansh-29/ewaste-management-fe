/* eslint-disable indent */
import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from "../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const forgotPasswordReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {...state, data: payload};
    case FORGOT_PASSWORD_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
