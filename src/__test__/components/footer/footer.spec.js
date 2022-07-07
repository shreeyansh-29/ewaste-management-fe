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

it("test footer", () => {
  const handleClick = jest.fn();
  expect.assertions(1);
  expect(
    toJson(shallow(<Footer handleClick={handleClick} />))
  ).toMatchSnapshot();
});
