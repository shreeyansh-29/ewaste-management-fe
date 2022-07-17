/* eslint-disable no-undef */

import {forgotPasswordService} from "./forgotPasswordService";

it("testing", () => {
  const data = {payload: {email: "shreeyansh.singh@nineleaps.com"}};
  forgotPasswordService(data);
});
