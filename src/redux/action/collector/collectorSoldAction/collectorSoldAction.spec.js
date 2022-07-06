/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorSoldAction/collectorSoldAction";

describe("test collectorSoldAction", () => {
  const data = {type: "Large Equipments"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorSoldRequest function", () => {
    expect(actions.collectorSoldRequest(data)).toEqual({
      type: types.COLLECTOR_SOLD_REQUEST,
      payload: data,
    });
  });
  it("test collectorSoldSuccess function", () => {
    expect(actions.collectorSoldSuccess(payload)).toEqual({
      type: types.COLLECTOR_SOLD_SUCCESS,
      payload,
    });
  });
  it("test collectorSoldError function", () => {
    expect(actions.collectorSoldError(error)).toEqual({
      type: types.COLLECTOR_SOLD_ERROR,
      payload: error,
    });
  });
});
