import {CUSTOMER_VIEW_DRIVES} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";

export const customerEWasteService = () => {
  return api.get(CUSTOMER_VIEW_DRIVES);
};
