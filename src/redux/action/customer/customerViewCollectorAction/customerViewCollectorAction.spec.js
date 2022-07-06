/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerViewCollectorAction/customerViewCollectorAction";

describe("test customerViewCollectorAction", () => {
  const data = {firstName: "John", lastName: "Cena"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerViewCollectorRequest function", () => {
    expect(actions.customerViewCollectorsRequest(data)).toEqual({
      type: types.CUSTOMER_VIEW_COLLECTORS_REQUEST,
      payload: data,
    });
  });
  it("test customerViewCollectorSuccess function", () => {
    expect(actions.customerViewCollectorsSuccess(payload)).toEqual({
      type: types.CUSTOMER_VIEW_COLLECTORS_SUCCESS,
      payload,
    });
  });
  it("test customerViewCollectorError function", () => {
    expect(actions.customerViewCollectorsError(error)).toEqual({
      type: types.CUSTOMER_VIEW_COLLECTORS_ERROR,
      payload: error,
    });
  });
});
