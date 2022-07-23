/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import api from "./httpProvider";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

jest.mock("./httpProvider");

it("testing api calls", () => {
  const Api = api;
  const wrapper = shallow(<Api />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
