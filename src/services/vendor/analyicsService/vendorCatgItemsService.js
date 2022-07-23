import {VENDOR_ANALYTICS_V2} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";

export const vendorCatgItemsService = () => {
  return api.get(VENDOR_ANALYTICS_V2);
};
