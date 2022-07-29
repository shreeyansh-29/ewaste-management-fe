import {CUSTOMER_VIEW_DRIVES} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const customerEWasteService = () => {
  return api.get(CUSTOMER_VIEW_DRIVES);
};
