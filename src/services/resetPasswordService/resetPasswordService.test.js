/* eslint-disable no-undef */
import React from "react";
import {resetPasswordService} from "./resetPasswordService";
import Cookie from "universal-cookie";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing resetPasswordService", () => {
  const cookie = new Cookie();
  const token = cookie.get("token");
  const data = {
    payload: {token, values: {password: "123456", confirmPassword: "123456"}},
  };
  const Service = resetPasswordService;

  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
