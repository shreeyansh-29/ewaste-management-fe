/* eslint-disable no-undef */

import {customerProfileEditService} from "./customerProfileEditService";

it("testing", () => {
  const data = {
    payload: {values: {firstName: "", lastName: "", email: ""}, password: ""},
  };
  customerProfileEditService(data);
});
