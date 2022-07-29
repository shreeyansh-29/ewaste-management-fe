import {COLLECTOR_REQUEST_SUMMARY} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const collectorSummaryService = () => {
  return api.get(COLLECTOR_REQUEST_SUMMARY);
};
