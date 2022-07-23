/* eslint-disable no-undef */

import {customerNotificationCountService} from "./customerNotificationCountService";
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing customerNotificationCountService", () => {
  const Service = customerNotificationCountService;
  const wrapper = shallow(<Service />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
