/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorNameAction/collectorNameAction";

describe("test collectorNameAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorNameRequest function", () => {
    expect(actions.collectorNameRequest()).toEqual({
      type: types.COLLECTOR_NAME_REQUEST,
    });
  });
  it("test collectorNameSuccess function", () => {
    expect(actions.collectorNameSuccess(payload)).toEqual({
      type: types.COLLECTOR_NAME_SUCCESS,
      payload,
    });
  });
  it("test collectorNameError function", () => {
    expect(actions.collectorNameError(error)).toEqual({
      type: types.COLLECTOR_NAME_ERROR,
      payload: error,
    });
  });
});
