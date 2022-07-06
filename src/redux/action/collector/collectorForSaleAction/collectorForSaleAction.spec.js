/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorForSaleAction/collectorForSaleAction";

describe("test collectorForSaleAction", () => {
  const data = {categort: "AC"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorForSaleRequest function", () => {
    expect(actions.collectorForSaleRequest(data)).toEqual({
      type: types.COLLECTOR_FORSALE_REQUEST,
      payload: data,
    });
  });
  it("test collectorForSaleSuccess function", () => {
    expect(actions.collectorForSaleSuccess(payload)).toEqual({
      type: types.COLLECTOR_FORSALE_SUCCESS,
      payload,
    });
  });
  it("test collectorForSaleError function", () => {
    expect(actions.collectorForSaleError(error)).toEqual({
      type: types.COLLECTOR_FORSALE_ERROR,
      payload: error,
    });
  });
});
