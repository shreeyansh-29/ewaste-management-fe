/* eslint-disable no-undef */

import {customerProfileEditService} from "./customerProfileEditService";
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing", () => {
  const data = {
    payload: {values: {firstName: "", lastName: "", email: ""}, password: ""},
  };
  const Service = customerProfileEditService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
