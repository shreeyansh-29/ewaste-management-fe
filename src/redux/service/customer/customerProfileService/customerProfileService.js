import {CUSTOMER_AUTH_URL} from "../../../../container/constant/constant";
import api from "../../../../core/utilities/httpProvider";

export const customerProfileService = () => {
  return api.get(CUSTOMER_AUTH_URL);
};
