/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import ResetPassword from "./resetPassword";
import {Form, Formik} from "formik";
import * as action from "../../redux/action/resetPasswordAction/resetPasswordAction";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedNavigate = jest.fn();
const mockedUsedDispatch = jest.fn();
const mockedUsedSelector = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockedUsedSelector,
}));

describe("Reset Password", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      resetPassword: {
        data: {
          status: 200,
        },
      },
    });
  });
  it("test resetPassword", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
describe("should test for form", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      resetPassword: {
        data: {
          status: 200,
        },
      },
    });
  });
  it("should test for Formik and Form", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword />
      </Provider>
    );
    expect(wrapper.find(Formik).length).toEqual(1);
    expect(wrapper.find(Form).length).toEqual(1);
  });
  it("should have an password field", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword />
      </Provider>
    );
    expect(wrapper.find("#input1").at(1).length).toEqual(1);
  });
  it("should be able to enter password", () => {
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
    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword />
      </Provider>
    );
    expect(wrapper.find("#input2").at(1).length).toEqual(1);
    // expect(wrapper.find("#btn2").at(1).length).toEqual(1);
  });
  it("should be able to enter confirm password", () => {
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
    let values = {password: "123456", confirmPassword: "123456"};
    jest
      .spyOn(action, "resetPasswordRequest")
      .mockImplementation(() => Promise.resolve(values));
    const handleClick = jest.fn();

    const wrapper = mount(
      <Provider store={store}>
        <ResetPassword handleClick={handleClick} />
      </Provider>
    );
    wrapper.find(Form).simulate("submit");
    expect(handleClick).toHaveBeenCalled;
    // expect(wrapper.find('button[type="submit"]').length).toEqual(1);
    // wrapper.find(Form).simulate("submit");
    // expect(handleClick).toHaveBeenCalled;
    // console.log("wrapper", wrapper.find(Form).childAt(1).debug());
  });
});
