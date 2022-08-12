/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adatper from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import CustomerRoutes from "./customerRoutes";

Enzyme.configure({adapter: new Adatper()});

describe("testing Customer Routes", () => {
  const wrapper = shallow(<CustomerRoutes />);

  it("test customerRoutes", () => {
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
