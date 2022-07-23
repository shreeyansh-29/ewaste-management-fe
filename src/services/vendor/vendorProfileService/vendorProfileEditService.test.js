/* eslint-disable no-undef */
import React from "react";
import {vendorProfileEditService} from "./vendorProfileEditService";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing", () => {
  const data = {
    payload: {values: {firstName: "", lastName: "", email: "", address1: ""}},
  };
  const Service = vendorProfileEditService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
