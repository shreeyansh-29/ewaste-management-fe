/* eslint-disable no-undef */
import React from "react";
import App from "../App";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

Enzyme.configure({adapter: new Adapter()});
const mockStore = configureStore([]);

describe("App", () => {
  let store;
  store = mockStore({
    forgotPassword: {},
    resetPasssword: {},
    signIn: {},
    signUp: {},
  });
  test("test App", () => {
    const wrapper = shallow(<App store={store} />);
    expect(toJson(wrapper)).toBeTruthy();
  });
});
