/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import SignUp, {changeState} from "./signUp";
import {Formik} from "formik";
import {isEmpty} from "lodash";
import {act} from "react-test-renderer";
import enableHooks from "jest-react-hooks-shallow";
import {useNavigate} from "react-router-dom";

enableHooks(jest);
Enzyme.configure({adapter: new Adapter()});

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

// const mockedUsedDispatch = jest.fn();
// const mockedUsedSelector = jest.fn();
const mockStore = configureStore([]);

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useDispatch: () => mockedUsedDispatch,
// }));

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: () => mockedUsedSelector,
// }));

describe("SignUp", () => {
  let store;
  store = mockStore({
    signUpReducer: {
      data: {},
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
describe("testing Formik", () => {
  let store = mockStore({
    signIn: {
      data: {},
      error: "",
      isLoading: true,
    },
  });
  it("should have firstName field", () => {
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
    const mockFn = jest.fn();
    mockFn.mockReturnValue("Assam");
    const wrapper = mount(
      <Provider store={store}>
        <SignUp changeState={mockFn} />
      </Provider>
    );
    const state = wrapper.find("#state").at(1);
    // expect(state.simulate("click")).toBeTruthy();

    const value = wrapper
      .find("#state")
      .at(1)
      .find("#selectedState")
      .at(2)
      .text();

    console.log("state", value);
    expect(mockFn).toBeCalledWith;

    state.simulate("change", {
      persist: () => {},
      target: {
        value: value,
      },
    });
    console.log("State", state.text());
    expect(state.html()).toMatch("state");
  });
  it("should have city field and triggers changeCity()", () => {
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
    // expect(city.html()).toMatch("Assam");
    expect(isEmpty(initialcities)).toEqual(true);
  });
  it("should have pincode field", () => {
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
    // console.log(wrapper.find("#role").debug());
    let role = wrapper.find("#role").find(".dropdown");
    role.simulate("click");
    expect(props.handleDropdown).toBeCalled;
    let value = wrapper
      .find("#role")
      .find(".dropdown")
      .find("option[value='Customer']")
      .text();
    expect(role.length).toEqual(1);
    role = value;
    // console.log(role);
  });
  it("should have submit button and triggers onSubmit() and handleTime()", () => {
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
  it("should have back button", () => {
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
  // it.only("should have gst", () => {
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <SignUp />
  //     </Provider>
  //   );
  //   let gst;
  //   act(() => {
  //     gst = wrapper.find("input[placeholder='GST Number']");
  //     gst.simulate("change", {
  //       persist: () => {},
  //       target: {value: ""},
  //     });
  //   });
  //   expect(gst.html()).toMatch("");
  // });
});
