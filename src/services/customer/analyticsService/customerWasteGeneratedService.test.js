/* eslint-disable no-undef */

import {customerWasteGeneratedService} from "./customerWasteGeneratedService";
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing customerWasteGeneratedService", () => {
  const Service = customerWasteGeneratedService;
  const wrapper = shallow(<Service />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
