/* eslint-disable no-undef */

import React from "react";
import Enzyme, {shallow} from "enzyme";
import {collectorMyDrivesService} from "./collectorMyDrivesService";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing collectorMyDrivesService", () => {
  const Service = collectorMyDrivesService;
  const wrapper = shallow(<Service />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
