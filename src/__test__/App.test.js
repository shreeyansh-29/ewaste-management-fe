/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../App";
import toJson from "enzyme-to-json";

Enzyme.configure({adapter: new Adapter()});

describe("test App", () => {
  const wrapper = shallow(<App />);

  it("testing", () => {
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
