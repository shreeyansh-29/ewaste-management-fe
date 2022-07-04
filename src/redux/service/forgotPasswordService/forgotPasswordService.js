import {FORGOT_PASSWORD} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";

export const helper = (data) => {
  return api.post(FORGOT_PASSWORD, {
    email: data.payload.email,
  });
};
