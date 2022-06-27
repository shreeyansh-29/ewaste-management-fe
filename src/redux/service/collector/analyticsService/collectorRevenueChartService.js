import api from "../../../../core/utilities/httpProvider";
import {COLLECTOR_ANALYTICS_V6} from "../../../../container/constant/constant";

export const collectorRevenueChartService = () => {
  return api.get(COLLECTOR_ANALYTICS_V6);
};
