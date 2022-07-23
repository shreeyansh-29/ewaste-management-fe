/* eslint-disable no-undef */
import React from "react";
import {viewColProfileService} from "./viewColProfileService";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing viewColProfileService", () => {
  const data = {payload: {}};
  const Service = viewColProfileService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
