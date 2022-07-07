/* eslint-disable no-undef */
import React from "react";
import {togglePassword} from "../../../components/togglePassword/togglePassword";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("test togglePassword Component", () => {
  const TogglePassword = togglePassword;
  expect.assertions(1);
  expect(toJson(shallow(<TogglePassword />))).toMatchSnapshot();
});
