import * as types from "../../../config/actionType";

export const customerCountCollRequest = (payload) => {
  return {
    type: types.CUSTOMER_COUNT_COLL_REQUEST,
    payload,
  };
};

export const customerCountCollSuccess = (payload) => {
  return {
    type: types.CUSTOMER_COUNT_COLL_SUCCESS,
    payload,
  };
};

export const customerCountCollError = (payload) => {
  return {
    type: types.CUSTOMER_COUNT_COLL_ERROR,
    payload,
  };
};
