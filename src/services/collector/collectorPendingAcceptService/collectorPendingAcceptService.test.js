/* eslint-disable no-undef */
import React from "react";
import {collectorPendingAcceptService} from "./collectorPendingAcceptService";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing collectorPendingAcceptService", () => {
  const data = {payload: {id: 12}};
  const Service = collectorPendingAcceptService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
