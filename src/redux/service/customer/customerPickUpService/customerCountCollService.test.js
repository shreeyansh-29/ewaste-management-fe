/* eslint-disable no-undef */

import {customerCountCollService} from "./customerCountCollService";

it("testing", () => {
  const data = {payload: {itemName: "AC"}};
  customerCountCollService(data);
});
