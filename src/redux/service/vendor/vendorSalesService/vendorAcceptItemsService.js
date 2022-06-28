import {VENDOR_ACCEPT_ITEMS} from "../../../../container/constant/constant";
import api from "../../../../core/utilities/httpProvider";

export const vendorAcceptItemsService = (data) => {
  console.log(data);
  return api.post(VENDOR_ACCEPT_ITEMS, {
    id: data.payload.id,
    quantity: data.payload.quantity,
    price: data.payload.price,
    date: data.payload.date,
  });
};
