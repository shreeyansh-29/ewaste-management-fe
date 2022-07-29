/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import NotificationCount from "./notificationCount";

Enzyme.configure({adapter: new Adapter()});

describe("test notificationCount", () => {
  it(" should render component", () => {
    const props = {};
    const wrapper = shallow(<NotificationCount {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should check null", () => {
    const props = {count: null};
    const result = NotificationCount(props);
    expect(result).toBeNull;
  });
});
