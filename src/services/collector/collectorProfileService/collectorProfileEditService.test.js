/* eslint-disable no-undef */

import {collectorProfileEditService} from "./collectorProfileEditService";
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing collectorProfileEditService", () => {
  const data = {
    payload: {values: {firstName: "", lastName: "", email: "", address1: ""}},
  };
  const Service = collectorProfileEditService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
