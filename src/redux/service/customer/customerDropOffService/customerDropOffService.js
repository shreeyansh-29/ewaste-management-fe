import {CUSTOMER_DROPOFF} from "../../../../container/constant/constant";
import api from "../../../../core/utilities/httpProvider";

export const customerDropOffService = () => {
  return api.post(CUSTOMER_DROPOFF);
};
