/* eslint-disable no-undef */
import React from "react";
import Dropdown from "../../../components/dropDown/dropdown";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {act} from "react-test-renderer";

Enzyme.configure({adapter: new Adapter()});

describe("test dropDown Component", () => {
  const onChange = jest.fn();
  const wrapper = shallow(<Dropdown />);

  it("test", () => {
    act(() => {
      wrapper
        .find("Select your Role")
        .first()
        .simulate("change", {target: {value: "Customer"}});
    });
    expect.assertions(2);
    expect(onChange).toBeCalledWith("Customer");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it("test onChange", () => {
  //   const wrapper = shallow(
  //     <Dropdown
  //       onChange={onChange}
  //       values={Customer}
  //       placeholder={"Select your Role"}
  //       data={data}
  //     />
  //   );
  //   // wrapper.find('select').;
  //   expect.assertions(1);
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });
});
