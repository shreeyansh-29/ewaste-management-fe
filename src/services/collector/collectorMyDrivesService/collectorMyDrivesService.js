import {COLLECTOR_DRIVE_MYDRIVE} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const collectorMyDrivesService = () => {
  return api.get(COLLECTOR_DRIVE_MYDRIVE);
};
