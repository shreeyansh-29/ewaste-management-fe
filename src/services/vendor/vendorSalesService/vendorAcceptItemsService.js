import {VENDOR_ACCEPT_ITEMS} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const vendorAcceptItemsService = (data) => {
  return api.post(VENDOR_ACCEPT_ITEMS, {
    id: data.payload.id,
    quantity: data.payload.quantity,
    price: data.payload.price,
    date: data.payload.date,
  });
};
