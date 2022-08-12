/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import VendorProfile from "./vendorProfile";
import {Formik, Form} from "formik";
import {isEmpty} from "lodash";
import toast from "../../../components/toast";

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

describe("test Vendor Profile", () => {
  let store;
  store = mockStore({
    vendorProfile: {
      data: {
        password:
          "$2a$10$RiiCa10XCqY1PNJZxy/PH.i2vxCKNH0N.l/4lEui8E.exrftnitaC",
        state: "Uttar Pradesh",
        city: "Lucknow",
      },
    },
  });
  it("test vendorProfile", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <VendorProfile />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Formik", () => {
    const wrapper = mount(
      <Provider store={store}>
        <VendorProfile />
      </Provider>
    );
    expect(wrapper.find(Formik).length).toEqual(1);
    expect(wrapper.find(Form).length).toEqual(1);
  });
  it("should have Multiple Input Fields", () => {
    const wrapper = mount(
      <Provider store={store}>
        <VendorProfile />
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
    expect(wrapper.find("#gst").at(0).length).toEqual(1);
    expect(wrapper.find("#registrationNo").at(0).length).toEqual(1);
  });
  it("should test changeState", () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <VendorProfile changeState={mockFn} />
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
        <VendorProfile changeCity={mockFn} {...initialcities} {...cities} />
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
  it("should have submit button", () => {
    const wrapper = mount(
      <Provider store={store}>
        <VendorProfile />
      </Provider>
    );
    wrapper.find(Form).simulate("submit");
  });
  it("should call handleSubmit", () => {
    const handleSubmit = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <VendorProfile handleSubmit={handleSubmit} />
      </Provider>
    );
    wrapper.find(".profilebtn").simulate("click");
    expect(handleSubmit).toHaveBeenCalled;
    expect(toast.success).toHaveBeenCalled;
  });
});
