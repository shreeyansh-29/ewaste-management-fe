/* eslint-disable no-undef */

import {viewCustomerProfileService} from "./viewCustomerProfileService";
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing viewCustomerProfileService", () => {
  const data = {payload: {id: 12}};
  const Service = viewCustomerProfileService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
