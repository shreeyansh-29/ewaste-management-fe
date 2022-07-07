/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import Date from "../../components/date";

Enzyme.configure({adapter: new Adapter()});

it("test categoryCarousel", () => {
  expect.assertions(1);
  expect(toJson(shallow(<Date />))).toMatchSnapshot();
});
