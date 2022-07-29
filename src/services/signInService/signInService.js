import {SIGN_IN} from "../../container/constant/constants";
import api from "../../core/utilities/httpProvider";
export const signInService = (data) => {
  return api.post(SIGN_IN, {
    email: data.payload.email,
    password: data.payload.password,
  });
};
