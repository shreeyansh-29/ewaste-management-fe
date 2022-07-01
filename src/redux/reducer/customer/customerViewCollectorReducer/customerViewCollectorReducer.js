/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerViewCollectorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CUSTOMER_VIEW_COLLECTORS_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_VIEW_COLLECTORS_SUCCESS:
      console.log("success reducer", action);
      return {...state, action};
    case types.CUSTOMER_VIEW_COLLECTORS_ERROR:
      return {...state, action};
    default:
      return state;
  }
};