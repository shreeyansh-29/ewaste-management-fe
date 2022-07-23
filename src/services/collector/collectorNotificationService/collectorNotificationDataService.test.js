/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import {collectorNotificationDataService} from "./collectorNotificationDataService";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing collectorNotificationDataService", () => {
  const Service = collectorNotificationDataService;
  const wrapper = shallow(<Service />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
