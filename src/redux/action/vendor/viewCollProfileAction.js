import {
  VENDOR_COLLECTORPROFILE_SUCCESS,
  VENDOR_COLLECTORPROFILE_REQUEST,
  VENDOR_COLLECTORPROFILE_ERROR,
} from "../../../redux/config/actionType";

export const viewAcceptCollectorRequest = (response) => {
  return {
    type: VENDOR_COLLECTORPROFILE_REQUEST,
    response,
  };
};
export const viewAcceptCollectorSuccess = (response) => {
  return {
    type: VENDOR_COLLECTORPROFILE_SUCCESS,
    response,
  };
};
export const viewAcceptCollectorError = (error) => {
  return {
    type: VENDOR_COLLECTORPROFILE_ERROR,
    error,
  };
};
