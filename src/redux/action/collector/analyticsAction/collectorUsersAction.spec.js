/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/analyticsAction/collectorUsersAction";

describe("test collectorUsersAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorUsersRequest function", () => {
    expect(actions.collectorUsersRequest()).toEqual({
      type: types.COLLECTOR_USERS_REQUEST,
    });
  });
  it("test collectorUsersSuccess function", () => {
    expect(actions.collectorUsersSuccess(payload)).toEqual({
      type: types.COLLECTOR_USERS_SUCCESS,
      payload,
    });
  });
  it("test collectorUsersError function", () => {
    expect(actions.collectorUsersError(error)).toEqual({
      type: types.COLLECTOR_USERS_ERROR,
      payload: error,
    });
  });
});
