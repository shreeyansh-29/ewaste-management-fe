/* eslint-disable no-undef */
import React from "react";
import InfoSection from "./InfoSection";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("test infoSection", () => {
  expect.assertions(1);
  expect(toJson(shallow(<InfoSection />))).toMatchSnapshot();
});
