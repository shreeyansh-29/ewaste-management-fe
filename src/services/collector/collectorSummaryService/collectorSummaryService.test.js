/* eslint-disable no-undef */

/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import {collectorSummaryService} from "./collectorSummaryService";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing collectorSummaryService", () => {
  const Service = collectorSummaryService;
  const wrapper = shallow(<Service />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
