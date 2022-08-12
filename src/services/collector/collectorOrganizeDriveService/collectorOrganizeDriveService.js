import {COLLECTOR_ORGANIZE_DRIVE} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const collectorOrganizeDriveService = (data) => {
  return api.post(COLLECTOR_ORGANIZE_DRIVE, {
    driveName: data.payload.driveName,
    description: data.payload.description,

    eWasteCategoryAccepted: [
      {
        categoryAccepted:
          data.payload.eWasteCategoryAccepted[0].categoryAccepted,
      },
    ],
    date: data.payload.date,
    time: data.payload.time,
    location: "",
    status: "Upcoming",
  });
};
