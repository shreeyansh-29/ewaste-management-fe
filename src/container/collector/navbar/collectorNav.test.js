/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import CollectorNav from "./collectorNav";
import {Navbar} from "react-bootstrap";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockedMapStateToProps = jest.fn();
const mockedUsedNavigate = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  mockedMapStateToProps: () => mockedMapStateToProps,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Collector Navbar", () => {
  let store;
  store = mockStore({
    collectorProfile: {
      firstName: "Shrey",
    },
    collectorNotificationCount: {
      isLoading: true,
      error: "",
      data: {payload: {}},
    },
    collectorNotificationData: {
      status: "success",
      data: {},
    },
  });
  it("test CollectorNav", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CollectorNav />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Navbar", () => {
    // let props = {res: {}, result1: {}, result2: {}};
    const wrapper = mount(
      <Provider store={store}>
        <CollectorNav />
      </Provider>
    );
    expect(wrapper.find(Navbar).length).toEqual(1);
  });
  it("should test markAsRead() and handle()", () => {
    const mockFn = jest.fn();
    const handle = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <CollectorNav markAsRead={mockFn} handle={handle} />
      </Provider>
    );
    wrapper.find("#count").at(1).simulate("click");
    expect(mockFn).toHaveBeenCalled;
    wrapper.find("#count").at(1).simulate("click");
    expect(handle).toHaveBeenCalled;
  });
  it("should test displayNotification()", () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <CollectorNav displayNotification={mockFn} />
      </Provider>
    );
    wrapper.find("#count").at(1).simulate("click");
    expect(mockFn).toHaveBeenCalled;
  });
  it("should test LogoutBtn", () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <CollectorNav />
      </Provider>
    );
    wrapper.find(".Btn").simulate("click");
    expect(mockFn).toBeCalled;
    expect(mockedUsedNavigate).toBeCalled;
  });
});
