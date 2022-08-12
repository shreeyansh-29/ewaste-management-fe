import {FORGOT_PASSWORD} from "../../container/constant/constants";
import api from "../../core/utilities/httpProvider";

export const forgotPasswordService = (data) => {
  return api.post(FORGOT_PASSWORD, {
    email: data.payload.email,
  });
};
