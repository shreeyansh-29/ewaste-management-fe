import * as types from "../../../redux/config/actionType";
export const venRequestCollectorAcceptRequest = (response) => {
  return {
    type: types.VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST,
    response,
  };
};
export const venRequestCollectorAcceptSuccess = (response) => {
  return {
    type: types.VENDOR_COLLECTORPROFILE_ACCEPT_SUCCESS,
    response,
  };
};
export const venRequestCollectorAcceptError = (error) => {
  return {
    type: types.VENDOR_COLLECTORPROFILE_ACCEPT_ERROR,
    error,
  };
};
