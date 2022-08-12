import {COLLECTOR_SELL} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const collectorForSaleService = (data) => {
  return api.post(COLLECTOR_SELL, {
    itemName: data.payload.itemName,
    category: data.payload.category,
    quantity: data.payload.quantity,
    price: data.payload.price,
    status: data.payload.status,
  });
};
