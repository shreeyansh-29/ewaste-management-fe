/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adatper from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import Routes from "./routes";

Enzyme.configure({adapter: new Adatper()});

describe("testing routes", () => {
  it("test Routes", () => {
    const wrapper = shallow(<Routes />);
    window.HTMLCanvasElement.prototype.getContext = () => {};
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
