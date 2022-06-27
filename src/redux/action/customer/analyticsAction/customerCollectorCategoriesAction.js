import * as types from "../../../config/actionType";

export const customerCollectorCategoriesRequest = () => {
  return {type: types.CUSTOMER_COLLECTORCATEGORIES_REQUEST};
};

export const customerCollectorCategoriesSuccess = (payload) => {
  return {type: types.CUSTOMER_COLLECTORCATEGORIES_SUCCESS, payload};
};

export const customerCollectorCategoriesError = (payload) => {
  return {type: types.CUSTOMER_COLLECTORCATEGORIES_ERROR, payload};
};
