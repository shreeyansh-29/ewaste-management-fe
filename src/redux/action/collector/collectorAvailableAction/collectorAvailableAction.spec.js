/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorAvailableAction/collectorAvailableAction";

describe("test collectorAvailableAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorAvailableRequest function", () => {
    expect(actions.collectorAvailableRequest()).toEqual({
      type: types.COLLECTOR_AVAILABLE_REQUEST,
    });
  });
  it("test collectorAvailableSuccess function", () => {
    expect(actions.collectorAvailableSuccess(payload)).toEqual({
      type: types.COLLECTOR_AVAILABLE_SUCCESS,
      payload,
    });
  });
  it("test collectorAvailableError function", () => {
    expect(actions.collectorAvailableError(error)).toEqual({
      type: types.COLLECTOR_AVAILABLE_ERROR,
      payload: error,
    });
  });
});
