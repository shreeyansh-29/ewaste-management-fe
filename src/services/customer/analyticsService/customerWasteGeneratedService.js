import {CUSTOMER_ANALYTICS_V1} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const customerWasteGeneratedService = () => {
  return api.get(CUSTOMER_ANALYTICS_V1);
};
