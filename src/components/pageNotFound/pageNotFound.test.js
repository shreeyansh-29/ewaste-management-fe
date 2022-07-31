/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import PageNotFound from "./pageNotFound";

Enzyme.configure({adapter: new Adapter()});

it("test pageNotFound", () => {
  expect.assertions(1);
  expect(toJson(shallow(<PageNotFound />))).toMatchSnapshot();
});
