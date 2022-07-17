/* eslint-disable no-undef */

import {collectorProfileEditService} from "./collectorProfileEditService";

it("testing", () => {
  const data = {
    payload: {values: {firstName: "", lastName: "", email: "", address1: ""}},
  };
  collectorProfileEditService(data);
});
