/* eslint-disable no-undef */
import React from "react";
import {signInService} from "./signInService";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing signInService", () => {
  const data = {payload: {email: "customer1@gmail.com", password: "123456"}};
  const Service = signInService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
