/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/analyticsAction/collectorEWasteItemsAction";

describe("test collectorEWasteItemsAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorEWasteItemsRequest function", () => {
    expect(actions.collectorEWasteItemsRequest()).toEqual({
      type: types.COLLECTOR_EWASTE_ITEMS_REQUEST,
    });
  });
  it("test collectorEWasteItemsSuccess function", () => {
    expect(actions.collectorEWasteItemsSuccess(payload)).toEqual({
      type: types.COLLECTOR_EWASTE_ITEMS_SUCCESS,
      payload,
    });
  });
  it("test collectorEWasteItemsError function", () => {
    expect(actions.collectorEWasteItemsError(error)).toEqual({
      type: types.COLLECTOR_EWASTE_ITEMS_ERROR,
      payload: error,
    });
  });
});
