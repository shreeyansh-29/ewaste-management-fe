import {CUSTOMER_ANALYTICS_V3} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const customerCollectorCategoriesService = () => {
  return api.get(CUSTOMER_ANALYTICS_V3);
};
