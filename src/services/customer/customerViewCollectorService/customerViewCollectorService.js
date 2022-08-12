import api from "../../../core/utilities/httpProvider";
import {CUSTOMER_DROPOFF} from "../../../container/constant/constants";

export const customerViewCollectorService = (data) => {
  return api.post(CUSTOMER_DROPOFF, {
    category: data.payload.category,
    itemName: data.payload.itemName,
    quantity: data.payload.quantity,
    scheduledDate: data.payload.scheduledDate,
    scheduledTime: data.payload.scheduledTime,
    collectorUid: data.payload.collectorUid,
  });
};
