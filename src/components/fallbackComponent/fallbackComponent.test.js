/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import FallbackComponent from "./fallbackComponent";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

describe("should render FallBackComponent", () => {
  it("testing", () => {
    const wrapper = shallow(<FallbackComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
