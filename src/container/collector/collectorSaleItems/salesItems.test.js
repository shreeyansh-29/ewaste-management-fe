/* eslint-disable no-undef */
import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, {mount, shallow} from "enzyme";
import SalesItems from "./salesItems";
import toJson from "enzyme-to-json";
import {Tabs} from "@mui/material";

Enzyme.configure({adapter: new Adapter()});

describe("test salesItems", () => {
  it("should render SalesItems", () => {
    const wrapper = shallow(<SalesItems />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test onChange", () => {
    const onChange = jest.fn();
    const event = {
      preventDefault() {},
    };
    const wrapper = shallow(<SalesItems handleChange={onChange} />);
    wrapper.find(Tabs).simulate("change", event);
    expect(onChange).toHaveBeenCalled;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test TabPanel", () => {
    const name = "TabPanel";
    const props = {children: "", index: "", other: ""};
    const TabPanel = jest.fn();
    const wrapper = mount(
      <SalesItems {...props} TabPanel={TabPanel}>
        {name}
      </SalesItems>
    );
    wrapper.find(TabPanel).exists();
    expect(TabPanel).toHaveBeenCalled;
  });
});
