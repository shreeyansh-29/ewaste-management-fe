/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerEWasteAction/customerEWasteAction";

describe("test customerEWasteDrivesAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerEWasteDrivesRequest function", () => {
    expect(actions.customerEWasteDrivesRequest()).toEqual({
      type: types.CUSTOMER_EWASTE_DRIVES_REQUEST,
    });
  });
  it("test customerEWasteDrivesSuccess function", () => {
    expect(actions.customerEWasteDrivesSuccess(payload)).toEqual({
      type: types.CUSTOMER_EWASTE_DRIVES_SUCCESS,
      payload,
    });
  });
  it("test customerEWasteDrivesError function", () => {
    expect(actions.customerEWasteDrivesError(error)).toEqual({
      type: types.CUSTOMER_EWASTE_DRIVES_ERROR,
      payload: error,
    });
  });
});
