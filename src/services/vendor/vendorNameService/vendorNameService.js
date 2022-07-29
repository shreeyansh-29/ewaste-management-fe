import api from "../../../core/utilities/httpProvider";
import * as types from "../../../container/constant/constants";

export const vendorNameService = () => {
  return api.get(types.VENDOR_AUTH_URL);
};
