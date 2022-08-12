/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import Analytics from "./analytics";

Enzyme.configure({adapter: new Adapter()});

describe("testing analytics", () => {
  it("should render component", () => {
    const wrapper = shallow(<Analytics />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
