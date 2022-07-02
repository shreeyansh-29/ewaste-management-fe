import * as types from "../../config/actionType";

export const viewAcceptCollectorRequest = (response) => {
  return {
    type: types.VENDOR_COLLECTORPROFILE_REQUEST,
    response,
  };
};
export const viewAcceptCollectorSuccess = (response) => {
  return {
    type: types.VENDOR_COLLECTORPROFILE_SUCCESS,
    response,
  };
};
export const viewAcceptCollectorError = (error) => {
  return {
    type: types.VENDOR_COLLECTORPROFILE_ERROR,
    error,
  };
};
