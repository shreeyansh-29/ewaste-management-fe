import {CUSTOMER_PICKUP} from "../../../../container/constant/constant";
import api from "../../../../core/utilities/httpProvider";

export const customerPickUpService = () => {
  return api.post(CUSTOMER_PICKUP);
};
