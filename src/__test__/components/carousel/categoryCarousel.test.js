/* eslint-disable no-undef */
import React from "react";
import CategoryCarousel from "../../../components/carousel/categoryCarousel";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";

Enzyme.configure({adapter: new Adapter()});

it("test categoryCarousel", () => {
  expect.assertions(1);
  expect(toJson(shallow(<CategoryCarousel />))).toMatchSnapshot();
});
