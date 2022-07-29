/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import {QuantityValidation} from "./quantityValidations";

Enzyme.configure({adapter: new Adapter()});

describe("test notificationCount", () => {
  it("should render component", () => {
    let props = {
      category: "",
      name: "",
      quantity: null,
      date: undefined,
      time: undefined,
    };
    const wrapper = shallow(<QuantityValidation {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should check quantity= null", () => {
    const props = {quantity: null};
    const result = QuantityValidation(props);
    expect(result).toBeNull;
  });
  it("should check date = undefined", () => {
    const props = {date: undefined};
    const result = QuantityValidation(props);
    expect(result).toBeFalsy;
  });
  it("should check time = undefined", () => {
    const props = {time: undefined};
    const result = QuantityValidation(props);
    expect(result).toBeFalsy;
  });
});
