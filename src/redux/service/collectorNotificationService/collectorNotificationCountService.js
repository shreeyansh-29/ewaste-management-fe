import api from "../../../core/utilities/httpProvider";
import * as types from "../../../container/constant/constant";

export const collectorNotificationCountService = () => {
  return api.get(types.COLLECTOR_NOTIFICATION_URL);
};
