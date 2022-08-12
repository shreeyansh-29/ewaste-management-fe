/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorMyDrivesStatusAction/collectorMyDrivesStatusAction";

describe("test collectorMyDrivesStatusAction", () => {
  const data = {status: "completed"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorMyDrivesStatusRequest function", () => {
    expect(actions.collectorMyDrivesStatusRequest(data)).toEqual({
      type: types.COLLECTOR_MYDRIVES_STATUS_REQUEST,
      payload: data,
    });
  });
  it("test collectorForSaleSuccess function", () => {
    expect(actions.collectorMyDrivesStatusSuccess(payload)).toEqual({
      type: types.COLLECTOR_MYDRIVES_STATUS_SUCCESS,
      payload,
    });
  });
  it("test collectorForSaleError function", () => {
    expect(actions.collectorMyDrivesStatusError(error)).toEqual({
      type: types.COLLECTOR_MYDRIVES_STATUS_ERROR,
      payload: error,
    });
  });
});
