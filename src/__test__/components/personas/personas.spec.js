/* eslint-disable no-undef */
import React from "react";
import Personas from "../../../components/personas/personas";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("test Personas Component", () => {
  expect.assertions(1);
  expect(toJson(shallow(<Personas />))).toMatchSnapshot();
});
