import api from "../../../core/utilities/httpProvider";
import {COLLECTOR_NOTIFICATION_MARKASREAD} from "../../../container/constant/constants";

export const collectorNotificationDataService = () => {
  return api.post(COLLECTOR_NOTIFICATION_MARKASREAD);
};
