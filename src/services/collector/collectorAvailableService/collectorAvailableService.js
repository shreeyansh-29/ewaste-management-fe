import {COLLECTOR_SELL_SUMMARY_AVAILABE} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const collectorAvailableService = () => {
  return api.get(COLLECTOR_SELL_SUMMARY_AVAILABE);
};
