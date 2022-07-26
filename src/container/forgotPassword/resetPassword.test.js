/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import ResetPassword from "./resetPassword";
import {Form, Formik} from "formik";
import toast from "../../components/toast";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

describe("Reset Password", () => {
  it("test resetPassword", () => {
    let store = mockStore({
      resetPassword: {
        data: {},
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

jest.useFakeTimers();
describe("should test for form", () => {
  it("should test for Formik and Form", () => {
    let store = mockStore({
      resetPassword: {
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword />
      </Provider>
    );
    expect(wrapper.find(Formik).length).toEqual(1);
    expect(wrapper.find(Form).length).toEqual(1);
  });
  it("should have an password field", () => {
    let store = mockStore({
      resetPassword: {
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword />
      </Provider>
    );
    expect(wrapper.find("#input1").at(1).length).toEqual(1);
  });
  it("should be able to enter password", () => {
    let store = mockStore({
      resetPassword: {
        data: {},
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword />
      </Provider>
    );
    const passwordInput = wrapper.find("#input1").at(1);
    passwordInput.simulate("change", {
      persist: () => {},
      target: {
        name: "password",
        value: "123456",
      },
    });
    expect(passwordInput.html()).toMatch("123456");
  });
  it("should test togglePasswords", () => {
    let store = mockStore({
      resetPassword: {
        data: {},
      },
    });
    const onClick = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword togglePasswords={onClick} />
      </Provider>
    );
    expect(wrapper.find("#btn1").at(1).length).toEqual(1);
    wrapper.find("#btn1").at(1).simulate("click");
  });
  it("should have an confirm Password field", () => {
    let store = mockStore({
      resetPassword: {
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword />
      </Provider>
    );
    expect(wrapper.find("#input2").at(1).length).toEqual(1);
  });
  it("should be able to enter confirm password", () => {
    let store = mockStore({
      resetPassword: {
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword />
      </Provider>
    );
    const cnfPasswordInput = wrapper.find("#input2").at(1);
    console.log(cnfPasswordInput);
    cnfPasswordInput.simulate("change", {
      persist: () => {},
      target: {
        name: "confirmPassword",
        value: "123456",
      },
    });
    expect(cnfPasswordInput.html()).toMatch("123456");
  });
  it("should test confirmTogglePasswords", () => {
    let store = mockStore({
      resetPassword: {
        data: {},
      },
    });
    const onClick = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword confirmTogglePasswords={onClick} />
      </Provider>
    );
    expect(wrapper.find("#btn2").at(1).length).toEqual(1);
    wrapper.find("#btn2").at(1).simulate("click");
  });
  it("should test onSubmit", () => {
    let store = mockStore({
      resetPassword: {
        data: {},
      },
    });
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword handleClick={mockFn} />
      </Provider>
    );
    wrapper.find("button[type='submit']").simulate("submit");
    expect(mockFn).toHaveBeenCalled;
  });
  it("should show success toast", () => {
    let store = mockStore({
      resetPassword: {
        data: 200,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword />
      </Provider>
    );
    expect(toast.success).toHaveBeenCalled;
    expect(wrapper).toBeTruthy;
    jest.runAllTimers();
  });
});
