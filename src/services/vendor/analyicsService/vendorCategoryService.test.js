/* eslint-disable no-undef */
import React from "react";
import {vendorCategoryService} from "./vendorCategoryService";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing vendorCategoryService", () => {
  const Service = vendorCategoryService;
  const wrapper = shallow(<Service />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
