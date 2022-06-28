import {COLLECTOR_REQUEST_PENDING} from "../../../../container/constant/constant";
import api from "../../../../core/utilities/httpProvider";

export const collectorPendingService = () => {
  return api.get(COLLECTOR_REQUEST_PENDING);
};
