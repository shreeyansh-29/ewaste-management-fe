/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import rootSaga from "./rootSaga";
import toJson from "enzyme-to-json";

Enzyme.configure({adapter: new Adapter()});

describe("test rootSaga", () => {
  let RootSaga = rootSaga;
  const wrapper = shallow(<RootSaga />);

  it("testing rootSaga", () => {
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
