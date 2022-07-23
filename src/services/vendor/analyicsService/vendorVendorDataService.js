import {VENDOR_ANALYTICS_V1} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";

export const vendorVendorDataService = () => {
  return api.get(VENDOR_ANALYTICS_V1);
};
