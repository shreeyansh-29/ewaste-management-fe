/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/analyticsAction/collectorEWasteDrivesAction";

describe("test collectorEWasteDrivesAction", () => {
  const payload = {
    status: "success",
  };
  const error = {status: "fail"};
  it("test collectorEWasteDrivesRequest function", () => {
    expect(actions.collectorEWasteDrivesRequest()).toEqual({
      type: types.COLLECTOR_EWASTE_DRIVES_REQUEST,
    });
  });
  it("test collectorEWasteDrivesSuccess function", () => {
    expect(actions.collectorEWasteDrivesSuccess(payload)).toEqual({
      type: types.COLLECTOR_EWASTE_DRIVES_SUCCESS,
      payload,
    });
  });
  it("test collectorEWasteDrivesError function", () => {
    expect(actions.collectorEWasteDrivesError(error)).toEqual({
      type: types.COLLECTOR_EWASTE_DRIVES_ERROR,
      payload: error,
    });
  });
});
