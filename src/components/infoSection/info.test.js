/* eslint-disable no-undef */
import React from "react";
import Info from "./Info";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("test infoSec", () => {
  expect.assertions(1);
  expect(toJson(shallow(<Info />))).toMatchSnapshot();
});
