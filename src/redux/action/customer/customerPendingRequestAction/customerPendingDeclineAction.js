import * as types from "../../../config/actionType";

export const customerPendingDeclineRequest = (payload) => {
  return {type: types.CUSTOMER_PENDING_DECLINE_REQUEST, payload};
};
// export const customerPendingDeclineSuccess = (payload) => {
//   return {type: types.CUSTOMER_PENDING_DECLINE_SUCCESS, payload};
// };
export const customerPendingDeclineError = (payload) => {
  return {type: types.CUSTOMER_PENDING_DECLINE_ERROR, payload};
};
