/* eslint-disable no-undef */

import {forgotPasswordService} from "./forgotPasswordService";
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing forgotPasswordService", () => {
  const data = {payload: {email: "shreeyansh.singh@nineleaps.com"}};
  const Service = forgotPasswordService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
