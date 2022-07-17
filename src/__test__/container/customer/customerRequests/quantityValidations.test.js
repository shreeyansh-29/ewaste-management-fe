/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import {QuantityValidation} from "../../../../container/customer/customerRequests/quantityValidations";

Enzyme.configure({adapter: new Adapter()});

it("test notificationCount", () => {
  const wrapper = shallow(<QuantityValidation />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
