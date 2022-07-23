/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import VendorHome from "./vendorHome";
import toJson from "enzyme-to-json";

Enzyme.configure({adapter: new Adapter()});

it("test vendorHome", () => {
  const wrapper = shallow(<VendorHome />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
