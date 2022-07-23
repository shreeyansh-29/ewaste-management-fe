/* eslint-disable no-undef */
import React from "react";
import App from "./App";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

Enzyme.configure({adapter: new Adapter()});
const mockStore = configureStore([]);

describe("App", () => {
  let wrapper;
  let store;
  store = mockStore({
    forgotPassword: {},
    resetPasssword: {},
    signIn: {},
    signUp: {},
  });
  beforeEach(() => {
    wrapper = shallow(<App store={store} />);
  });
  test("test App", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
