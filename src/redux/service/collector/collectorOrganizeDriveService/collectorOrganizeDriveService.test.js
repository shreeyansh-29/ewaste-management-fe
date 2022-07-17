/* eslint-disable no-undef */

import {collectorOrganizeDriveService} from "./collectorOrganizeDriveService";

it("testing", () => {
  const categoryAccepted = {};
  const data = {
    payload: {
      driveName: "",
      description: "",
      data: "",
      time: "",
      eWasteCategoryAccepted: [categoryAccepted],
    },
  };
  collectorOrganizeDriveService(data);
});
