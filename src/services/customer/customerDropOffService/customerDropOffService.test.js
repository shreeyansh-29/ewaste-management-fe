/* eslint-disable no-undef */

import {customerDropOffService} from "./customerDropOffService";
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing customerDropOffService", () => {
  const data = {payload: {}};
  const Service = customerDropOffService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
