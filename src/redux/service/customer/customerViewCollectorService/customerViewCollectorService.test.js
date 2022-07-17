/* eslint-disable no-undef */

import {customerViewCollectorService} from "./customerViewCollectorService";

it("testing", () => {
  const data = {
    payload: {category: "", itemName: "", quantity: "", scheduledDate: ""},
  };
  customerViewCollectorService(data);
});
