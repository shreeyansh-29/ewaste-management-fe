/* eslint-disable no-undef */

import {collectorMyDrivesStatusService} from "./collectorMyDrivesStatusService";

it("testing", () => {
  const data = {payload: {id: 1, status: "success"}};
  collectorMyDrivesStatusService(data);
});
