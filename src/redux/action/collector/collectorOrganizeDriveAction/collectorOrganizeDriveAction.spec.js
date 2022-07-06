/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorOrganizeDriveAction/collectorOrganizeDriveAction";

describe("test collectorOrganizeDriveAction", () => {
  const data = {id: 1};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorOrganizeDriveRequest function", () => {
    expect(actions.collectorOrganizeDriveRequest(data)).toEqual({
      type: types.COLLECTOR_ORGANIZE_REQUEST,
      payload: data,
    });
  });
  it("test collectorOrganizeDriveSuccess function", () => {
    expect(actions.collectorOrganizeDriveSuccess(payload)).toEqual({
      type: types.COLLECTOR_ORGANIZE_SUCCESS,
      payload,
    });
  });
  it("test collectorOrganizeDriveError function", () => {
    expect(actions.collectorOrganizeDriveError(error)).toEqual({
      type: types.COLLECTOR_ORGANIZE_ERROR,
      payload: error,
    });
  });
});
