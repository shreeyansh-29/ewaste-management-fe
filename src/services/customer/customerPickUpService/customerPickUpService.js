import * as types from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const customerPickUpService = (data) => {
  return api.post(types.CUSTOMER_PICKUP, {
    category: data.payload.category,
    itemName: data.payload.itemName,
    quantity: data.payload.quantity,
    scheduledDate: data.payload.scheduledDate,
    scheduledTime: data.payload.scheduledTime,
  });
};
