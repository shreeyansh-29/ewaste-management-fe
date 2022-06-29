import {COLLECTOR_ORGANIZE_DRIVE} from "../../../../container/constant/constant";
import api from "../../../../core/utilities/httpProvider";

export const collectorOrganizeDriveService = (data) => {
  console.log(data);
  return api.post(COLLECTOR_ORGANIZE_DRIVE, {
    date: data.payload.date,
    time: data.payload.time,
    location: data.payload.address,
    status: data.payload.status,
  });
};
