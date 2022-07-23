import {VENDOR_SUMMARY} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";

export const vendorMyOrdersService = () => {
  return api.get(VENDOR_SUMMARY);
};
