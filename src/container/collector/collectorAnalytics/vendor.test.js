/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import VendorData from "./vendor";
import Chart from "react-google-charts";

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

describe("Vendor Component", () => {
  let store;
  store = mockStore({
    collectorVendor: {
      isLoading: false,
      error: "",
      data: {},
    },
  });
  it("test Vendor", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <VendorData />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test Chart", () => {
    let store;
    store = mockStore({
      collectorVendor: {
        isLoading: true,
        error: "",
        data: {
          status: "success",
          data: {
            customerAllCity: 5,
            customerCity: 3,
            vendorCity: 6,
            vendorAllCity: 10,
          },
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <VendorData />
      </Provider>
    );
    expect(wrapper.find(Chart).length).toEqual(1);
  });
});
