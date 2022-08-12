/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorMyDrivesAction/collectorMyDrivesAction";

describe("test collectorMyDrivesAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorForSaleRequest function", () => {
    expect(actions.collectorMyDrivesRequest()).toEqual({
      type: types.COLLECTOR_MYDRIVES_REQUEST,
    });
  });
  it("test collectorForSaleSuccess function", () => {
    expect(actions.collectorMyDrivesSuccess(payload)).toEqual({
      type: types.COLLECTOR_MYDRIVES_SUCCESS,
      payload,
    });
  });
  it("test collectorForSaleError function", () => {
    expect(actions.collectorMyDrivesError(error)).toEqual({
      type: types.COLLECTOR_MYDRIVES_ERROR,
      payload: error,
    });
  });
});
