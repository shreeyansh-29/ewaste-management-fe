/* eslint-disable no-undef */

import {vendorAcceptItemsService} from "./vendorAcceptItemsService";

it("testing", () => {
  const data = {payload: {id: "", quantity: "", price: "", date: ""}};
  vendorAcceptItemsService(data);
});
