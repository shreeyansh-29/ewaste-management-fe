/* eslint-disable no-undef */

import {vendorProfileEditService} from "./vendorProfileEditService";

it("testing", () => {
  const data = {
    payload: {values: {firstName: "", lastName: "", email: "", address1: ""}},
  };
  vendorProfileEditService(data);
});
