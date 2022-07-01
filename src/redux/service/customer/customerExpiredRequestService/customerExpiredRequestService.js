import {CUSTOMER_REQUEST_COMPLETED} from "../../../../container/constant/constant";
import api from "../../../../core/utilities/httpProvider";

export const customerExpiredRequestService = () => {
  return api.get(CUSTOMER_REQUEST_COMPLETED);
};
