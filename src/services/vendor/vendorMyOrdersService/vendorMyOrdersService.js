import {VENDOR_SUMMARY} from "../../../container/constant/constants";
import api from "../../../core/utilities/httpProvider";

export const vendorMyOrdersService = () => {
  return api.get(VENDOR_SUMMARY);
};
