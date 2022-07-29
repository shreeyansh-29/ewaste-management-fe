import {CUSTOMER_REQUEST_COMPLETED} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const customerCompletedRequestService = () => {
  return api.get(CUSTOMER_REQUEST_COMPLETED);
};
