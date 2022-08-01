/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adatper from "@wojtekmaj/enzyme-adapter-react-17";
import AuthProtected from "./authProtected";
import toJson from "enzyme-to-json";
import enableHooks from "jest-react-hooks-shallow";

enableHooks(jest);

const mockNavigate = jest.fn();
const mockOutlet = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Outlet: () => mockOutlet,
  Navigate: () => mockNavigate,
}));
Enzyme.configure({adapter: new Adatper()});

describe("testing authProtected", () => {
  it("test", () => {
    const wrapper = shallow(<AuthProtected />);
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("testing for customer", () => {
    const props = {
      isAuthenticated: "xsnsji2jscjbsjsw1",
      role: "CUSTOMER",
    };
    const wrapper = mount(<AuthProtected {...props} />);
    expect(wrapper).toBeTruthy();
    if (props.role === "CUSTOMER" && props.isAuthenticated) {
      expect(mockOutlet).toHaveBeenCalled;
    } else {
      expect(mockNavigate).toHaveBeenCalled;
    }
  });
});
