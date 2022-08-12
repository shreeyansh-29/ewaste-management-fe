/* eslint-disable no-undef */
import React from "react";
import {vendorAcceptItemsService} from "./vendorAcceptItemsService";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing vendorAcceptItemsService", () => {
  const data = {payload: {id: "", quantity: "", price: "", date: ""}};
  const Service = vendorAcceptItemsService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
