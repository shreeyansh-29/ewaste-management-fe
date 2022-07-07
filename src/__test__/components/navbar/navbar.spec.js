/* eslint-disable no-undef */
import React from "react";
import Navbar from "../../../components/navbar/navbars";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("test categoryCarousel", () => {
  expect.assertions(1);
  expect(toJson(shallow(<Navbar />))).toMatchSnapshot();
});
