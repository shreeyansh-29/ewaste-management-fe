/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import SignUp from "./signUp";
import {Formik} from "formik";
import {isEmpty} from "lodash";
import enableHooks from "jest-react-hooks-shallow";
import toast from "../../components/toast";
import {useNavigate} from "react-router-dom";

enableHooks(jest);
Enzyme.configure({adapter: new Adapter()});

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const mockStore = configureStore([]);

describe("SignUp", () => {
  let store;
  store = mockStore({
    signUp: {
      data: {},
      error: "",
      isLoading: false,
    },
  });
  it("test signUp", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Formik", () => {
    const wrapper = mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    expect(wrapper.find(Formik).length).toEqual(1);
  });
});

jest.useFakeTimers();
describe("testing Formik", () => {
  it("should have firstName field", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    let firstName = wrapper.find("input[placeholder='First Name']");
    expect(firstName.length).toEqual(1);
    firstName.simulate("change", {
      persist: () => {},
      target: {
        name: "firstName",
        value: "Shaun",
      },
    });
    expect(firstName.html()).toMatch("Shaun");
  });
  it("should have lastName field", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    let lastName = wrapper.find("input[placeholder='Last Name']");
    expect(lastName.length).toEqual(1);
    lastName.simulate("change", {
      persist: () => {},
      target: {
        name: "lastName",
        value: "Mendis",
      },
    });
    expect(lastName.html()).toMatch("Mendis");
  });
  it("should have email field", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    let email = wrapper.find("input[placeholder='Mail']");
    expect(email.length).toEqual(1);
    email.simulate("change", {
      persist: () => {},
      target: {
        name: "email",
        value: "customer1@gmail.com",
      },
    });
    expect(email.html()).toMatch("customer1@gmail.com");
  });
  it("should have mobileNo field", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    let mobileNo = wrapper.find("input[placeholder='Mobile Number']");
    expect(mobileNo.length).toEqual(1);
    mobileNo.simulate("change", {
      persist: () => {},
      target: {
        name: "mobileNo",
        value: "9695072068",
      },
    });
    expect(mobileNo.html()).toMatch("9695072068");
  });
  it("should have password field", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    let password = wrapper.find("input[placeholder='Enter Password']");
    expect(password.length).toEqual(1);
    password.simulate("change", {
      persist: () => {},
      target: {
        name: "password",
        value: "123456",
      },
    });
    expect(password.html()).toMatch("123456");
  });
  it("should test togglePasswords", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const onClick = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <SignUp togglePasswords={onClick} />
      </Provider>
    );
    wrapper.find("#btn1").at(1).simulate("click");
    expect(onClick).toBeCalled;
  });
  it("should have confirmPassword field", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    let confirmPassword = wrapper.find("input[placeholder='Confirm Password']");
    expect(confirmPassword.length).toEqual(1);
    confirmPassword.simulate("change", {
      persist: () => {},
      target: {
        name: "confirmPassword",
        value: "123456",
      },
    });
    expect(confirmPassword.html()).toMatch("123456");
  });
  it("should test confirmTogglePasswords", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const onClick = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <SignUp confirmTogglePasswords={onClick} />
      </Provider>
    );
    wrapper.find("#btn2").at(1).simulate("click");
    expect(onClick).toBeCalled;
  });
  it("should have address field", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    let address = wrapper.find("input[placeholder='Address']");
    expect(address.length).toEqual(1);
    address.simulate("change", {
      persist: () => {},
      target: {
        name: "address1",
        value: "Burj Khalifa",
      },
    });
    expect(address.html()).toMatch("Burj Khalifa");
  });
  it("should have state field and triggers changeState()", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const mockFn = jest.fn();
    mockFn.mockReturnValue("Assam");
    const wrapper = mount(
      <Provider store={store}>
        <SignUp changeState={mockFn} />
      </Provider>
    );
    const state = wrapper.find("#state").at(1);

    const value = wrapper.find("#state").at(1).find("#selectedState").at(2);

    expect(mockFn).toBeCalledWith;

    state.simulate("change", {
      persist: () => {},
      target: {
        value: value,
      },
    });
    expect(state.html()).toMatch("state");
  });
  it("should have city field and triggers changeCity()", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const mockFn = jest.fn();
    const initialcities = false;
    const cities = [];
    const wrapper = mount(
      <Provider store={store}>
        <SignUp changeCity={mockFn} {...initialcities} {...cities} />
      </Provider>
    );
    const city = wrapper.find("#city").at(1);
    expect(city.length).toEqual(1);
    city.simulate("change", {
      preventDefault() {},
      target: {value: "Assam"},
    });
    expect(mockFn).toBeCalled;
    expect(isEmpty(initialcities)).toEqual(true);
  });
  it("should have pincode field", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    let pincode = wrapper.find("input[placeholder='Pincode']");
    expect(pincode.length).toEqual(1);
    pincode.simulate("change", {
      persist: () => {},
      target: {
        name: "pinCode",
        value: "226022",
      },
    });
    expect(pincode.html()).toMatch("226022");
  });
  it("should have role field and triggers handleDropdown()", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const props = {
      handleDropdown: jest.fn(),
      data: [{label: "Customer"}, {label: "Collector"}, {label: "Vendor"}],
      value: "",
    };
    const wrapper = mount(
      <Provider store={store}>
        <SignUp {...props} />
      </Provider>
    );
    let role = wrapper.find("#role").find(".dropdown1");
    role.simulate("click");
    expect(props.handleDropdown).toHaveBeenCalled;
    role = props.data[0].label;
  });
  it("should have back button", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: false,
      },
    });
    const mockNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockNavigate);
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <SignUp onClick={mockFn} />
      </Provider>
    );
    const backBtn = wrapper.find(".backbutton");
    expect(backBtn.simulate("click")).toBeTruthy();
    expect(mockFn).toBeCalled;
    expect(mockNavigate).toBeCalledWith("/Signin");
  });
  it("should have submit button and triggers onSubmit() and handleTime()", () => {
    let store;
    store = mockStore({
      signUp: {
        data: {},
        error: "",
        isLoading: true,
      },
    });
    const mockFn = jest.fn();
    const mockFn2 = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <SignUp onSubmit={mockFn} handleTime={mockFn2} />
      </Provider>
    );
    const submitBtn = wrapper.find('button[type="submit"]');
    expect(submitBtn.length).toEqual(1);
    expect(submitBtn.simulate("submit")).toBeTruthy();
    expect(mockFn).toBeCalled;
    submitBtn.simulate("submit");
    expect(mockFn2).toBeCalled;
  });
  it("should check status=success", () => {
    let store = mockStore({
      signUp: {
        data: {status: "success"},
        error: "",
        isLoading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    expect(toast.success).toHaveBeenCalled;
    expect(wrapper).toBeTruthy;
    jest.runAllTimers();
  });
  it("should check status=fail", () => {
    let store = mockStore({
      signUp: {
        data: {status: "fail"},
        error: "",
        isLoading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    expect(toast.error).toHaveBeenCalled;
    expect(wrapper).toBeTruthy;
  });
  it("should check status=''", () => {
    let store = mockStore({
      signUp: {
        data: {status: ""},
        error: "",
        isLoading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    expect(wrapper).toBeTruthy;
  });
});
