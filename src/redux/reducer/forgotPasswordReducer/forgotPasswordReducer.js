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
  action = action
) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return action;
    case FORGOT_PASSWORD_ERROR:
      return action;

    default:
      return state;
  }
};
