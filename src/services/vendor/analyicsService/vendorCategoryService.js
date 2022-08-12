import {VENDOR_ANALYTICS_V4} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const vendorCategoryService = () => {
  return api.get(VENDOR_ANALYTICS_V4);
};
