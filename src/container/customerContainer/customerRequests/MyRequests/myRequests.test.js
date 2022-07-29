/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import MyRequests from "./myRequests";
import {Tabs} from "@mui/material";

Enzyme.configure({adapter: new Adapter()});

describe("testing myRequests", () => {
  it("should render Requests", () => {
    const wrapper = shallow(<MyRequests />);
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("should test onChange", () => {
    const onChange = jest.fn();
    const event = {
      preventDefault() {},
    };
    const wrapper = shallow(<MyRequests handleChange={onChange} />);
    wrapper.find(Tabs).simulate("change", event);
    expect(onChange).toHaveBeenCalled;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should test TabPanel", () => {
    const name = "TabPanel";
    const props = {children: "", index: "", other: ""};
    const TabPanel = jest.fn();
    const wrapper = mount(
      <MyRequests {...props} TabPanel={TabPanel}>
        {name}
      </MyRequests>
    );
    wrapper.find(TabPanel).exists();
    expect(TabPanel).toHaveBeenCalled;
  });
});
