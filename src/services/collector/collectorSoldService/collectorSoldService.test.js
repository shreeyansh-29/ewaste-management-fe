/* eslint-disable no-undef */

/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import {collectorSoldService} from "./collectorSoldService";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing collectorSoldService", () => {
  const Service = collectorSoldService;
  const wrapper = shallow(<Service />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
