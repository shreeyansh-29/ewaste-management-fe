/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adatper from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import VendorRoutes from "./vendorRoutes";

Enzyme.configure({adapter: new Adatper()});

describe("testing Vendor Routes", () => {
  const wrapper = shallow(<VendorRoutes />);

  it("test vendorRoutes", () => {
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
