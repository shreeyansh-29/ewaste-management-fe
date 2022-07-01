import * as types from "../../../../container/constant/constant";
import api from "../../../../core/utilities/httpProvider";

export const customerPickUpService = (data) => {
  console.log(data);
  return api.post(types.CUSTOMER_PICKUP, {
    category: data.payload.category,
    itemName: data.payload.itemName,
    quantity: data.payload.quantity,
    scheduledDate: data.payload.scheduledDate,
    scheduledTime: data.payload.scheduledTime,
  });
};
