import * as types from "../../../config/actionType";

export const collectorEWasteItemsRequest = () => {
  return {type: types.COLLECTOR_EWASTE_ITEMS_REQUEST};
};
export const collectorEWasteItemsSuccess = (payload) => {
  return {type: types.COLLECTOR_EWASTE_ITEMS_SUCCESS, payload};
};
export const collectorEWasteItemsError = (payload) => {
  return {type: types.COLLECTOR_EWASTE_ITEMS_ERROR, payload};
};
