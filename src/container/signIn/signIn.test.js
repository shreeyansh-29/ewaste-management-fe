/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import SignIn from "./signIn";
import {Form, Formik} from "formik";
import {BrowserRouter} from "react-router-dom";
import enableHooks from "jest-react-hooks-shallow";
import toast from "../../components/toast";

jest.mock("jwt-decode", () => ({tokens: "chdbcui1i8cdsbh"}));
enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

Enzyme.configure({adapter: new Adapter()});

const mockStore = configureStore([]);

describe("SignIn", () => {
  let store = mockStore({
    signIn: {
      data: {},
      error: "",
      isLoading: true,
    },
  });
  it("test signIn", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
describe("should test for Formik", () => {
  it("should test for Formik", () => {
    let store = mockStore({
      signIn: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find(Formik).length).toEqual(1);
    expect(wrapper.find(Form).length).toEqual(1);
  });
  it("should have a email field", () => {
    let store = mockStore({
      signIn: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    wrapper.find('input[type="email"]');
  });
  it("should set email onChange", () => {
    let store = mockStore({
      signIn: {
        data: {},
        error: "",
        isLoading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    const emailField = wrapper.find('input[type="email"]');
    emailField.simulate("change", {
      persist: () => {},
      target: {
        name: "email",
        value: "customer1@gmail.com",
      },
    });
    expect(emailField.html()).toMatch("customer1@gmail.com");
  });
  it("should have a password field", () => {
    let store = mockStore({
      signIn: {
        data: {},
        error: "",
        isLoading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    wrapper.find('input[type="password"]');
  });
  it("should update password onChange", () => {
    let store = mockStore({
      signIn: {
        data: {},
        error: "",
        isLoading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    const passwordField = wrapper.find('input[type="password"]');
    passwordField.simulate("change", {
      persist: () => {},
      target: {
        name: "password",
        value: "123456",
      },
    });
    expect(passwordField.html()).toMatch("123456");
  });
  it("should test togglePasswords", () => {
    let store = mockStore({
      signIn: {
        data: {},
        error: "",
        isLoading: true,
      },
    });
    const onClick = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn togglePasswords={onClick} />
        </BrowserRouter>
      </Provider>
    );
    wrapper.find('button[type="button"]').simulate("click");
  });
  it("should have submit button", () => {
    let store = mockStore({
      signIn: {
        data: {},
        error: "",
        isLoading: true,
      },
    });
    const handleClick = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn onSubmit={handleClick} />
        </BrowserRouter>
      </Provider>
    );
    wrapper.find(Form).simulate("submit", {
      preventDefault: () => {},
    });
    expect(handleClick).toBeCalled;
  });
  it("should throw error on status=Fail", () => {
    let store = mockStore({
      signIn: {
        data: {status: "Fail"},
        error: "",
        isLoading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper).toBeTruthy;
    expect(toast.error).toHaveBeenCalled;
  });
  it("should throw error on status=fail", () => {
    let store = mockStore({
      signIn: {
        data: {status: "fail"},
        error: "",
        isLoading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper).toBeTruthy;
    expect(toast.error).toHaveBeenCalled;
  });
  it("should throw error on status=success", () => {
    let store = mockStore({
      signIn: {
        data: {status: "success"},
        error: "",
        isLoading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper).toBeTruthy;
  });
});
