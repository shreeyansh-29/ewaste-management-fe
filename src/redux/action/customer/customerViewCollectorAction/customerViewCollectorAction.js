import * as types from "../../../config/actionType";

export const customerViewCollectorsRequest = (payload) => {
  console.log("request action", payload);
  return {type: types.CUSTOMER_VIEW_COLLECTORS_REQUEST, payload};
};
export const customerViewCollectorsSuccess = (payload) => {
  console.log("success action", payload);
  return {type: types.CUSTOMER_VIEW_COLLECTORS_SUCCESS, payload};
};
export const customerViewCollectorsError = (payload) => {
  return {type: types.CUSTOMER_VIEW_COLLECTORS_ERROR, payload};
};
