/* eslint-disable no-undef */
import React from "react";
import Footer from "./footer";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("test footer element", () => {
  let value = "Join";
  const handleClick = jest.fn();
  const wrapper = shallow(<Footer onClick={handleClick}>{value}</Footer>);
  it("test footer", () => {
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should handle onClick", () => {
    wrapper.find("#big").simulate("click");
    expect.assertions(1);
    expect(mockedUsedNavigate).toHaveBeenCalled();
  });
});
