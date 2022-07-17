/* eslint-disable no-undef */

import {collectorForSaleService} from "./collectorForSaleService";

it("testing", () => {
  const data = {payload: {category: "", itemName: "", quantity: "", price: ""}};
  collectorForSaleService(data);
});
