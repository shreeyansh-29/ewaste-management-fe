import {FORGOT_PASSWORD} from "../../container/constant/constant";
import api from "../../core/utilities/httpProvider";

export const helper = (data) => {
//   console.log("email", data.email.email);
  const email = data.email.email;
  return api.post(FORGOT_PASSWORD, {
    email: email,
  });
};
