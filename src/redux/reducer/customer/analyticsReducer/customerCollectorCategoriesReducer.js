/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerCollectorCategoriesReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case types.CUSTOMER_COLLECTORCATEGORIES_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_COLLECTORCATEGORIES_SUCCESS:
      return {...state, data: payload};
    case types.CUSTOMER_COLLECTORCATEGORIES_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
