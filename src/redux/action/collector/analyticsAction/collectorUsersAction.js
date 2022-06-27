import * as types from "../../../config/actionType";

export const collectorUsersAction = () => {
  return {type: types.COLLECTOR_USERS_REQUEST};
};
export const collectorUsersSuccess = (payload) => {
  return {type: types.COLLECTOR_USERS_SUCCESS, payload};
};
export const collectorusersError = (payload) => {
  return {type: types.COLLECTOR_USERS_ERROR, payload};
};
