import {COLLECTOR_ANALYTICS_V4} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const collectorVendorService = () => {
  return api.get(COLLECTOR_ANALYTICS_V4);
};
