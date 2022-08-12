import * as types from "../../config/actionType";

export const vendorCollectorProfileRequest = (payload) => {
  return {
    type: types.VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST,
    payload,
  };
};
export const vendorCollectorProfileSuccess = (payload) => {
  return {
    type: types.VENDOR_COLLECTORPROFILE_ACCEPT_SUCCESS,
    payload,
  };
};
export const vendorCollectorProfileError = (payload) => {
  return {
    type: types.VENDOR_COLLECTORPROFILE_ACCEPT_ERROR,
    payload,
  };
};
