/* eslint-disable indent */
import * as types from "../../../redux/config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const googleSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GOOGLE_SIGNIN_REQUEST:
      return {...state, isLoading: true};
    case types.GOOGLE_SIGNIN_SUCCESS:
      return {...state, data: action.payload};
    case types.GOOGLE_SIGNIN_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
