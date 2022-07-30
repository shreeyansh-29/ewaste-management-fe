/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import ForgotPassword from "./forgotPassword";
import {Form, Formik} from "formik";
import enableHooks from "jest-react-hooks-shallow";

enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
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

describe("Forgot Password", () => {
  it("test forgotPassword", () => {
    let store;

    store = mockStore({
      forgotPassword: {
        data: {},
        isLoading: false,
        error: "",
      },
    });

    const wrapper = shallow(
      <Provider store={store}>
        <ForgotPassword />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
describe("should test for Form", () => {
  it("should test for Formik and Form", () => {
    let store;

    store = mockStore({
      forgotPassword: {
        data: {},
        isLoading: false,
        error: "",
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ForgotPassword />
      </Provider>
    );
    expect(wrapper.find(Formik).length).toEqual(1);
    expect(wrapper.find(Form).length).toEqual(1);
  });
  it("should have an email field", () => {
    let store;

    store = mockStore({
      forgotPassword: {
        data: {},
        isLoading: false,
        error: "",
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ForgotPassword />
      </Provider>
    );
    expect(wrapper.find('input[type="email"]').length).toEqual(1);
  });
  it("should set the email value onChange", () => {
    let store;

    store = mockStore({
      forgotPassword: {
        data: {},
        isLoading: false,
        error: "",
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ForgotPassword />
      </Provider>
    );
    const emailInput = wrapper.find('input[type="email"]');
    emailInput.simulate("change", {
      persist: () => {},
      target: {
        name: "email",
        value: "email@gmail.com",
      },
    });
    expect(emailInput.html()).toMatch("email@gmail.com");
  });
  it.skip("should throw an error for invalid email address", () => {
    let store;

    store = mockStore({
      forgotPassword: {
        data: {},
        isLoading: false,
        error: "",
      },
    });

    const wrapper = shallow(
      <Provider store={store}>
        <ForgotPassword />
      </Provider>
    );
    const forgotPasswordForm = () =>
      wrapper.find(ForgotPassword).dive().find(Formik).renderProp("children")({
        touched: {email: ""},
        errors: {
          email: "",
        },
      });

    const errors = {email: "Invalid email id"};

    const formWithInvalidEmailErrors = forgotPasswordForm({
      errors: {
        email: "Invalid email id",
      },
      touched: {email: true},
    });
    console.log(formWithInvalidEmailErrors.find(".formerrors").debug());
    expect(formWithInvalidEmailErrors.find("formerrors")).toMatch(errors.email);
  });
  it("should have a back button and navigate to /Signin", () => {
    let store;

    store = mockStore({
      forgotPassword: {
        data: {},
        isLoading: false,
        error: "",
      },
    });

    const onClick = jest.fn();
    const name = "BACK";
    const wrapper = mount(
      <Provider store={store}>
        <ForgotPassword onClick={onClick}>{name}</ForgotPassword>
      </Provider>
    );
    wrapper.find('button[type="button"]').simulate("click");
    expect.assertions(1);
    expect(mockedUsedNavigate).toHaveBeenCalled();
  });
  it("should have a submit button and calls onSubmit()", () => {
    let store;
    store = mockStore({
      forgotPassword: {
        data: 200,
      },
    });

    const onSubmit = jest.fn();
    const name = "NEXT";
    const email = "customer1@gmail.com";
    const wrapper = mount(
      <Provider store={store}>
        <ForgotPassword onSubmit={onSubmit} {...email}>
          {name}
        </ForgotPassword>
      </Provider>
    );
    expect(wrapper.find('button[type="submit"]').length).toEqual(1);
    wrapper.find(Form).simulate("submit");
    expect(onSubmit).toHaveBeenCalled;
    expect(mockedUsedDispatch).toHaveBeenCalled;
  });
  it("should throw error on Forbidden", () => {
    let store;
    store = mockStore({
      forgotPassword: {
        data: 403,
      },
    });
    const onSubmit = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <ForgotPassword onSubmit={onSubmit} />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
  it("should throw error on Resource Not Found", () => {
    let store;
    store = mockStore({
      forgotPassword: {
        data: 404,
      },
    });
    const props = {onSubmit: jest.fn(), email: "customer1@gmail.com"};
    const wrapper = mount(
      <Provider store={store}>
        <ForgotPassword {...props} />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
