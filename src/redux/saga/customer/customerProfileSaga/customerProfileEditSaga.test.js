/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/customer/customerProfileService/customerProfileEditService";
import {
  customerProfileEditError,
  customerProfileEditSuccess,
} from "../../../action/customer/customerProfileAction/customerProfileEditAction";
import {
  customerProfileEditSaga,
  watchCustomerProfileEdit,
} from "./customerProfileEditSaga";

describe("watchCustomerProfileEdit", () => {
  const genObject = watchCustomerProfileEdit();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("CUSTOMER_PROFILE_EDIT_REQUEST", customerProfileEditSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerProfileEditSaga", () => {
  it("should call api and dispatch success action", async () => {
    const data = {firstName: "shrey"};
    const generator = jest
      .spyOn(api, "customerProfileEditService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_PROFILE_EDIT_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerProfileEditSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerProfileEditSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "customerProfileEditService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_PROFILE_EDIT_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerProfileEditSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerProfileEditError());
    generator.mockClear();
  });
});
