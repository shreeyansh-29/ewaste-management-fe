import {COLLECTOR_ANALYTICS_V5} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";

export const collectorUsersService = () => {
  return api.get(COLLECTOR_ANALYTICS_V5);
};
