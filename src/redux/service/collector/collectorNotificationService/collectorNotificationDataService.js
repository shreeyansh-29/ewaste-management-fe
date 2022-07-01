import api from "../../../../core/utilities/httpProvider";
import {COLLECTOR_NOTIFICATION_MARKASREAD} from "../../../../container/constant/constant";

export const collectorNotificationDataService = () => {
  console.log("hy");
  return api.post(COLLECTOR_NOTIFICATION_MARKASREAD);
};
