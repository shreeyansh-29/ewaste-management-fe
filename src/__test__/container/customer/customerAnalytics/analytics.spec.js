/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import Analytics from "../../../../container/customer/customerAnalytics/analytics";

Enzyme.configure({adapter: new Adapter()});

it("test analytics", () => {
  const wrapper = shallow(<Analytics />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
