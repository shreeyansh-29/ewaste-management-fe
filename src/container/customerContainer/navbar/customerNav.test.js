/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import CustomerNav from "./customerNav";
import {Navbar} from "react-bootstrap";
import Swal from "sweetalert2";

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

describe("Customer Navbar", () => {
  let store;
  store = mockStore({
    customerProfile: {
      firstName: "Shrey",
    },
    customerNotificationCount: {
      isLoading: true,
      error: "",
      data: {payload: {}},
    },
    customerNotificationData: {
      data: {status: "success", data: {}},
    },
  });
  it("test CustomerNav", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CustomerNav />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test Navbar", () => {
    const wrapper = mount(
      <Provider store={store}>
        <CustomerNav />
      </Provider>
    );
    expect(wrapper.find(Navbar).length).toEqual(1);
  });
  it("should test markAsRead() and handle()", () => {
    const mockFn = jest.fn();
    const handle = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <CustomerNav markAsRead={mockFn} handle={handle} />
      </Provider>
    );
    wrapper.find(".notification_button").at(1).simulate("click");
    expect(mockFn).toHaveBeenCalled;
    wrapper.find(".notification_button").at(1).simulate("click");
    expect(handle).toHaveBeenCalled;
  });
  it("should test LogoutBtn", () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <CustomerNav />
      </Provider>
    );
    wrapper.find(".Btn").simulate("click");
    expect(mockFn).toBeCalled;
  });
  it("should clear localStorage after logout ", () => {
    expect(Swal.getTitle().textContent).toEqual("Are you sure?");
    Swal.clickConfirm();
  });
});
