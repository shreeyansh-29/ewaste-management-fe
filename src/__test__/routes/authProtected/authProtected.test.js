/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adatper from "@wojtekmaj/enzyme-adapter-react-17";
import AuthProtected from "../../../routes/authProtected/authProtected";
import toJson from "enzyme-to-json";

Enzyme.configure({adapter: new Adatper()});

describe("testing authProtected", () => {
  const wrapper = shallow(<AuthProtected />);
  it("test", () => {
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
