import {CUSTOMER_NOTIFICATION_URL} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";

export const customerNotificationCountService = () => {
  return api.get(CUSTOMER_NOTIFICATION_URL);
};
