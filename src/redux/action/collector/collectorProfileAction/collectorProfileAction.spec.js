/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorProfileAction/collectorProfileAction";

describe("test collectorProfileAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorProfileRequest function", () => {
    expect(actions.collectorProfileRequest()).toEqual({
      type: types.COLLECTOR_PROFILE_REQUEST,
    });
  });
  it("test collectorProfileSuccess function", () => {
    expect(actions.collectorProfileSuccess(payload)).toEqual({
      type: types.COLLECTOR_PROFILE_SUCCESS,
      payload,
    });
  });
  it("test collectorProfileError function", () => {
    expect(actions.collectorProfileError(error)).toEqual({
      type: types.COLLECTOR_PROFILE_ERROR,
      payload: error,
    });
  });
});
