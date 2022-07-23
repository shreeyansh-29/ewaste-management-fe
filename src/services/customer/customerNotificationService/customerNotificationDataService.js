import api from "../../../core/utilities/httpProvider";
import * as types from "../../../container/constant/constant";

export const customerNotificationDataService = () => {
  return api.post(types.CUSTOMER_NOTIFICATION_MARKASREAD);
};
