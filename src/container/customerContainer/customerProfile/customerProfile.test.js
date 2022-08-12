/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import CustomerProfile from "./customerProfile";
import {Form, Formik} from "formik";
import {isEmpty} from "lodash";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockedMapStateToProps = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  mockedMapStateToProps: () => mockedMapStateToProps,
}));

describe("Customer Profile", () => {
  let store;
  store = mockStore({
    customerProfile: {
      isLoading: true,
      error: "",
      payload: {
        status: "success",
        data: {
          address1: "House No. 12, N1 Colony",
          firstName: "Sagar",
          lastName: "Negi",
          state: "Uttar Pradesh",
          city: "Kanpur",
        },
      },
    },
  });
  it("test CustomerProfile", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CustomerProfile />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Formik", () => {
    const wrapper = mount(
      <Provider store={store}>
        <CustomerProfile />
      </Provider>
    );
    expect(wrapper.find(Formik).length).toEqual(1);
    expect(wrapper.find(Form).length).toEqual(1);
  });
  it("should have Multiple Input Fields", () => {
    const wrapper = mount(
      <Provider store={store}>
        <CustomerProfile />
      </Provider>
    );
    expect(wrapper.find('input[type="text"]').at(0).length).toEqual(1);
    expect(wrapper.find('input[type="text"]').at(1).length).toEqual(1);
    expect(wrapper.find("#email").at(0).length).toEqual(1);
    expect(wrapper.find("#phone").at(0).length).toEqual(1);
    expect(wrapper.find("#address").at(0).length).toEqual(1);
    expect(wrapper.find("select").at(0).length).toEqual(1);
    expect(wrapper.find("select").at(1).length).toEqual(1);
    expect(wrapper.find('input[type="pincode"]').length).toEqual(1);
  });
  it("should have submit button", () => {
    const handleSubmit = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <CustomerProfile handleSubmit={handleSubmit} />
      </Provider>
    );
    wrapper.find(Form).simulate("submit");
    expect(handleSubmit).toBeCalled;
  });
  it("should test changeState", () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <CustomerProfile changeState={mockFn} />
      </Provider>
    );
    wrapper
      .find("#state")
      .at(0)
      .simulate("change", {
        preventDefault() {},
        target: {value: ""},
      });
    expect(mockFn).toBeCalled;
  });
  it("should test changeCity", () => {
    const mockFn = jest.fn();
    const initialcities = false;
    const cities = [];
    const wrapper = mount(
      <Provider store={store}>
        <CustomerProfile changeCity={mockFn} {...initialcities} {...cities} />
      </Provider>
    );
    wrapper
      .find("#city")
      .at(0)
      .simulate("change", {
        preventDefault() {},
        target: {value: ""},
      });
    expect(mockFn).toBeCalled;
    expect(isEmpty(initialcities)).toEqual(true);
  });
});
