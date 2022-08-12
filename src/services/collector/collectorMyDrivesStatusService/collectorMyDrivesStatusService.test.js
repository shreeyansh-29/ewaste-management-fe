/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {collectorMyDrivesStatusService} from "./collectorMyDrivesStatusService";

Enzyme.configure({adapter: new Adapter()});

it("testing collectorMyDrivesStatusService", () => {
  const data = {payload: {id: 1, status: "success"}};
  const Service = collectorMyDrivesStatusService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
