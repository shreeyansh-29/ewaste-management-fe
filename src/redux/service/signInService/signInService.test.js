/* eslint-disable no-undef */

import {signInService} from "./signInService";

it("testing", () => {
  const data = {payload: {email: "customer1@gmail.com", password: "123456"}};
  signInService(data);
});
