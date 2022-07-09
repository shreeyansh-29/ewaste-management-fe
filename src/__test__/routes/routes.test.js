/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adatper from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import Routes from "../../routes/routes";

Enzyme.configure({adapter: new Adatper()});

describe("testing routes", () => {
  const wrapper = shallow(<Routes />);

  it("test Routes", () => {
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
