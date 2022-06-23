import {SIGN_IN} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";
export const signInService = (data) => {
  // console.log("service", values);
  return api.post(SIGN_IN, {
    email: data.data.email,
    password: data.data.password,
  });
};
