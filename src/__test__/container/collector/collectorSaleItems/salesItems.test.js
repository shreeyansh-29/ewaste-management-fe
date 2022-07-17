/* eslint-disable no-undef */
import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, {shallow} from "enzyme";
import SalesItems from "../../../../container/collector/collectorSaleItems/salesItems";
import toJson from "enzyme-to-json";

Enzyme.configure({adapter: new Adapter()});

test("test SalesItems", () => {
  const wrapper = shallow(<SalesItems />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
