/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import GoogleSignin from "./googleSignin";
import GoogleLogin from "react-google-login";
import toast from "../../components/toast";

jest.mock("jwt-decode", () => ({}));
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
  it("test googleSignIn", () => {
    let store;
    store = mockStore({
      googleSignIn: {
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <GoogleSignin />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for GoogleLogin", () => {
    let store;
    store = mockStore({
      googleSignIn: {
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <GoogleSignin />
      </Provider>
    );
    expect(wrapper.find(GoogleLogin).length).toEqual(1);
  });
  it("should test onSuccess", () => {
    let store;
    store = mockStore({
      googleSignIn: {
        data: {},
      },
    });
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <GoogleSignin onFailure={mockFn} />
      </Provider>
    );
    wrapper.find(GoogleLogin).simulate("click");
    expect(mockFn).toHaveBeenCalled;
  });
  it("should test for status = Fail", () => {
    let store;
    store = mockStore({
      googleSignIn: {
        status: "Fail",
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <GoogleSignin />
      </Provider>
    );
    expect(wrapper).toBeTruthy;
    expect(toast.error).toHaveBeenCalled;
  });
  it("should test for status = success", () => {
    let store;
    store = mockStore({
      googleSignIn: {
        status: "success",
        data: {token: "2vcvdajc1"},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <GoogleSignin />
      </Provider>
    );
    expect(wrapper).toBeTruthy;
  });
});
