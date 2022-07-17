/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import CustomerNav from "../../../../container/customer/navbar/customerNav";

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
      status: "success",
      data: {},
    },
  });
  test("test CustomerNav", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CustomerNav />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
