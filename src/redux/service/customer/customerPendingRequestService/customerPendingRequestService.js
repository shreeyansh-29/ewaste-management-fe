import {CUSTOMER_REQUEST_PENDING} from "../../../../container/constant/constant";
import api from "../../../../core/utilities/httpProvider";

export const customerPendingRequestService = () => {
  return api.get(CUSTOMER_REQUEST_PENDING);
};
