import {COLLECTOR_ANALYTICS_V2} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const collectorEWasteItemsService = () => {
  return api.get(COLLECTOR_ANALYTICS_V2);
};
