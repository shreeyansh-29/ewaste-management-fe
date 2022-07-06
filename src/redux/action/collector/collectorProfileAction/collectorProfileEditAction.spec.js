/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorProfileAction/collectorProfileEditAction";

describe("test collectorProfileEditAction", () => {
  const data = {firstName: "Shrey", lastName: "Singh"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorProfileEditRequest function", () => {
    expect(actions.collectorProfileEditRequest(data)).toEqual({
      type: types.COLLECTOR_PROFILE_EDIT_REQUEST,
      payload: data,
    });
  });
  it("test collectorProfileEditSuccess function", () => {
    expect(actions.collectorProfileEditSuccess(payload)).toEqual({
      type: types.COLLECTOR_PROFILE_EDIT_SUCCESS,
      payload,
    });
  });
  it("test collectorProfileEditError function", () => {
    expect(actions.collectorProfileEditError(error)).toEqual({
      type: types.COLLECTOR_PROFILE_EDIT_ERROR,
      payload: error,
    });
  });
});
