import {COLLECTOR_SELL_SUMMARY_AVAILABE} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";

export const collectorAvailableService = () => {
  return api.get(COLLECTOR_SELL_SUMMARY_AVAILABE);
};
