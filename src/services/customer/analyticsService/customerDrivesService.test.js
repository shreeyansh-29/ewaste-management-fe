/* eslint-disable no-undef */

import {customerDrivesService} from "./customerDrivesService";
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing customerDrivesService", () => {
  const Service = customerDrivesService;
  const wrapper = shallow(<Service />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
