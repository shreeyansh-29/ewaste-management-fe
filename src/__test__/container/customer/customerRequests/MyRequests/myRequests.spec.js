/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import MyRequests from "../../../../../container/customer/customerRequests/MyRequests/myRequests";

Enzyme.configure({adapter: new Adapter()});

it("test My Requests", () => {
  const wrapper = shallow(<MyRequests />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
