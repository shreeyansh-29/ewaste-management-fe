/* eslint-disable no-undef */
import React from "react";
import {togglePassword} from "../../../components/togglePassword/togglePassword";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {TEXT} from "../../../container/constant/constant";

Enzyme.configure({adapter: new Adapter()});

describe("test togglePassword", () => {
  let passwordType;
  it("test togglePassword Component", () => {
    const TogglePassword = togglePassword;
    expect.assertions(1);
    expect(toJson(shallow(<TogglePassword />))).toMatchSnapshot();
  });
  it("test for passwordType = password", () => {
    passwordType = "password";
    const result = togglePassword(passwordType);
    expect(result).toEqual(TEXT);
  });
});
