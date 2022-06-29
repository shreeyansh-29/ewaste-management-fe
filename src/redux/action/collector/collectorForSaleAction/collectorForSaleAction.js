import * as types from "../../../config/actionType";

export const collectorForSaleRequest = (payload) => {
  return {type: types.COLLECTOR_FORSALE_REQUEST, payload};
};
export const collectorForSaleSuccess = (payload) => {
  console.log(payload);
  return {type: types.COLLECTOR_FORSALE_SUCCESS, payload};
};
export const collectorForSaleError = (payload) => {
  return {type: types.COLLECTOR_FORSALE_ERROR, payload};
};
