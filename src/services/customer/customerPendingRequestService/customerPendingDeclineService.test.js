/* eslint-disable no-undef */

import {customerPendingDeclineService} from "./customerPendingDeclineService";
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing customerPendingDeclineService", () => {
  const data = {payload: {id: 1}};
  const Service = customerPendingDeclineService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
