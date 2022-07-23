/* eslint-disable no-undef */

import React from "react";
import Enzyme, {shallow} from "enzyme";
import {collectorVendorService} from "./collectorVendorService";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing collectorVendorService", () => {
  const Service = collectorVendorService;
  const wrapper = shallow(<Service />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
