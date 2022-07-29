import {COLLECTOR_SELL_SUMMARY_SOLD} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const collectorSoldService = () => {
  return api.get(COLLECTOR_SELL_SUMMARY_SOLD);
};
