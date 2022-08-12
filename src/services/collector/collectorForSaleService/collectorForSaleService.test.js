/* eslint-disable no-undef */

import {collectorForSaleService} from "./collectorForSaleService";
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing collectorForSaleService", () => {
  const data = {payload: {category: "", itemName: "", quantity: "", price: ""}};
  const Service = collectorForSaleService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
