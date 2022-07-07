/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import PurchaseData from "../../../../container/vendor/vendorSales/puchaseData";

Enzyme.configure({adapter: new Adapter()});

describe("test Purchase Data", () => {
  it("test purchaseData", () => {
    let props = {item: 1657221108206};
    const wrapper = shallow(<PurchaseData {...props} />);
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
