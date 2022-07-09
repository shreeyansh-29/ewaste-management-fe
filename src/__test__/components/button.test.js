/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Button from "../../components/button";
import toJson from "enzyme-to-json";

Enzyme.configure({adapter: new Adapter()});

describe(" button", () => {
  let value = "Sign In";
  const onClick = jest.fn();

  it("test button ", () => {
    const wrapper = shallow(<Button value={value} onClick={onClick} />);
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("onClick ", () => {
    const wrapper = shallow(
      <Button value={value} onClick={onClick}>
        {value}
      </Button>
    );

    wrapper.find("button").simulate("click");
    expect.assertions(1);
    expect(onClick.mock.calls.length).toEqual(1);
  });
});
