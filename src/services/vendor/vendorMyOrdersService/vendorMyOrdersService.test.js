/* eslint-disable no-undef */
import React from "react";
import {vendorMyOrdersService} from "./vendorMyOrdersService";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing vendorMyOrdersService", () => {
  const Service = vendorMyOrdersService;
  const wrapper = shallow(<Service />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
