import {SIGN_UP} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";

export const signUpService = (values) => {
  return api.post(SIGN_UP, {values});
};
