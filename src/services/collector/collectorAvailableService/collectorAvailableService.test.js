/* eslint-disable no-undef */

import React from "react";
import Enzyme, {shallow} from "enzyme";
import {collectorAvailableService} from "./collectorAvailableService";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing collectorAvailableService", () => {
  const Service = collectorAvailableService;
  const wrapper = shallow(<Service />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
