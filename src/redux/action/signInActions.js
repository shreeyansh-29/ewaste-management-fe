import {
  SIGN_IN_ERROR,
  // SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from "../config/actionType";

// export const signInRequest = (data) => {
//   return {
//     type: SIGN_IN_REQUEST,
//     data,
//   };
// };

export const signInSuccess = (data) => {
  return {
    type: SIGN_IN_SUCCESS,
    data,
  };
};

export const signInError = (data) => {
  return {
    type: SIGN_IN_ERROR,
    data,
  };
};
