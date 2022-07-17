/* eslint-disable no-undef */
import {rootReducer} from "./rootReducer.js";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import toJson from "enzyme-to-json";
Enzyme.configure({adapter: new Adapter()});

test("testing rootReducer", () => {
  const RootReducer = rootReducer;
  const wrapper = shallow(<RootReducer />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
