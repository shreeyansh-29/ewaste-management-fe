import {CUSTOMER_ANALYTICS_V2} from "../../../../container/constant/constant";
import api from "../../../../core/utilities/httpProvider";

export const customerDrivesService = () => {
  return api.get(CUSTOMER_ANALYTICS_V2);
};
