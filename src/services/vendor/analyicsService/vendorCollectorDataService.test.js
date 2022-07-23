/* eslint-disable no-undef */
import React from "react";
import {vendorCollectorDataService} from "./vendorCollectorDataService";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing vendorCollectorDataService", () => {
  const Service = vendorCollectorDataService;
  const wrapper = shallow(<Service />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
