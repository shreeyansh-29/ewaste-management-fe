/* eslint-disable no-undef */
import React from "react";
import {viewAcceptCollProfileService} from "./viewAcceptCollProfileService";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing viewAcceptCollProfileService", () => {
  const data = {payload: {}};
  const Service = viewAcceptCollProfileService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
