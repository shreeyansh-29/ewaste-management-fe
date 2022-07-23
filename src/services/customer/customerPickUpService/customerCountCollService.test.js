/* eslint-disable no-undef */

import {customerCountCollService} from "./customerCountCollService";
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing", () => {
  const data = {payload: {itemName: "AC"}};
  const Service = customerCountCollService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
