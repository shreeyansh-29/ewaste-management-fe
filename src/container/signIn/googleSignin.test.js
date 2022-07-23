/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import GoogleSignin from "./googleSignin";
import GoogleLogin from "react-google-login";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockedUsedSelector = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockedUsedSelector,
}));

describe("googleSignIn", () => {
  let store;
  store = mockStore({
    googleSignIn: {
      data: {},
    },
  });
  it("test googleSignIn", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <GoogleSignin />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for GoogleLogin", () => {
    const wrapper = mount(
      <Provider store={store}>
        <GoogleSignin />
      </Provider>
    );
    expect(wrapper.find(GoogleLogin).length).toEqual(1);
  });
  it("should test for onFailure", () => {
    const mockFn = jest.fn();
    const renderProps = {};
    const response = "Error";
    const wrapper = mount(
      <Provider store={store}>
        <GoogleSignin onClick={mockFn} {...renderProps} {...response} />
      </Provider>
    );
    // console.log(wrapper.find("button").debug());
    wrapper.find("button").simulate("click");
    expect(mockFn).toHaveBeenCalled;
  });
});
