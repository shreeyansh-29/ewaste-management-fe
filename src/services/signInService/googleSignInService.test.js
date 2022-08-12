/* eslint-disable no-undef */
import React from "react";
import {googleSignInService} from "./googleSignInService";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing googleSignInService", () => {
  const data = {payload: {}};
  const Service = googleSignInService;

  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
