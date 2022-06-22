import {
  RESET_PASSWORD_ERROR,
  // RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from "../config/actionType";

// export const resetPasswordRequest = (data) => {
//   return {
//     type: RESET_PASSWORD_REQUEST,
//     data,
//   };
// };

export const resetPasswordSuccess = (data) => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    data,
  };
};

export const resetPasswordError = (data) => {
  return {
    type: RESET_PASSWORD_ERROR,
    data,
  };
};
