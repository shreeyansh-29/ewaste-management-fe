import {COLLECTOR_ANALYTICS_V1} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const collectorEWasteDrivesService = () => {
  return api.get(COLLECTOR_ANALYTICS_V1);
};
