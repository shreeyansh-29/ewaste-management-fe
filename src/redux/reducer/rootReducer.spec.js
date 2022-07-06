/* eslint-disable no-undef */
import {rootReducer} from "./rootReducer.js";

describe("test for rootReducer", () => {
  it("forgotPasswordReducer", () => {
    expect(
      rootReducer(true, {type: "FORGOT_PASSWORD_SUCCESS"}).forgotPasswordReducer
    ).toEqual(undefined);
  });
});
