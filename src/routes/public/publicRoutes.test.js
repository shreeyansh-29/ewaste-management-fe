/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adatper from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import PublicRoutes from "./publicRoutes";

Enzyme.configure({adapter: new Adatper()});

describe("testing authProtected", () => {
  const ResetPass = jest.fn();
  let props;

  it("test", () => {
    const wrapper = shallow(<PublicRoutes {...ResetPass} {...props} />);
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
