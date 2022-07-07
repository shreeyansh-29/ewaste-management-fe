/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import NotificationCount from "../../../../container/collector/navbar/notificationCount";

Enzyme.configure({adapter: new Adapter()});

it("test notificationCount", () => {
  const wrapper = shallow(<NotificationCount />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
