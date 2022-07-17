/* eslint-disable no-undef */

import {customerPickUpService} from "./customerPickUpService";

it("testing", () => {
  const data = {
    payload: {category: "", itemName: "", quantity: "", scheduledDate: ""},
  };
  customerPickUpService(data);
});
