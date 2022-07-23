/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adatper from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import CollectorRoutes from "./collectorRoutes";

Enzyme.configure({adapter: new Adatper()});

describe("testing Collector Routes", () => {
  const wrapper = shallow(<CollectorRoutes />);

  it("test collectorRoutes", () => {
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
