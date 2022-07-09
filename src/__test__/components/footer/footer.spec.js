/* eslint-disable no-undef */
import React from "react";
import Footer from "../../../components/footer/footer";
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
  const handleClick = jest.fn();
  it("test footer", () => {
    expect.assertions(1);
    expect(toJson(shallow(<Footer onClick={handleClick} />))).toMatchSnapshot();
  });
});
