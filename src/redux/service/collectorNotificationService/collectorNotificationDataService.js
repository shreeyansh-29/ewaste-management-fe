import api from "../../../core/utilities/httpProvider";
import * as types from "../../../container/constant/constant";

export const collectorNotificationDataService = () => {
  return api.post(types.COLLECTOR_NOTIFICATION_MARKASREAD);
};
