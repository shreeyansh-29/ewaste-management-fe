import {COLLECTOR_AUTH_URL} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const collectorProfileService = () => {
  return api.get(COLLECTOR_AUTH_URL);
};
