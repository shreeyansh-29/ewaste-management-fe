/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP_REQUEST:
      return {...state, isLoading: true};
    case types.SIGN_UP_SUCCESS:
      return {...state, data: action.payload};
    case types.SIGN_UP_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
