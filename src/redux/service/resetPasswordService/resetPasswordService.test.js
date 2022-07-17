/* eslint-disable no-undef */

import {resetPasswordService} from "./resetPasswordService";
import Cookie from "universal-cookie";

it("testing", () => {
  const cookie = new Cookie();
  const token = cookie.get("token");
  const data = {
    payload: {token, values: {password: "123456", confirmPassword: "123456"}},
  };
  resetPasswordService(data);
});
