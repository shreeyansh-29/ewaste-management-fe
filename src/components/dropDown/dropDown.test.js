/* eslint-disable no-undef */
import React from "react";
import Dropdown from "./dropdown";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

describe("test dropDown Component", () => {
  const props = {
    onChange: jest.fn(),
    data: [{label: "Customer"}, {label: "Collector"}, {label: "Vendor"}],
    value: "",
  };
  const event = {
    preventDefault() {},
    target: {value: "Customer"},
  };

  const name = "Select your Role";
  it("should render dropdown", () => {
    const wrapper = shallow(<Dropdown {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test onChange", () => {
    const wrapper = shallow(<Dropdown {...props}>{name}</Dropdown>);
    wrapper.find(".dropdown1").simulate("change", event);
    expect(props.onChange).toBeCalledWith("Customer");
  });
});
