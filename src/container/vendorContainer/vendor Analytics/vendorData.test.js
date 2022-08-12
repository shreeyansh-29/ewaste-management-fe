/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import VendorData from "./vendorData";
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

describe("test vendor data", () => {
  let store;
  store = mockStore({
    vendorData: {
      error: "",
      isLoading: true,
      data: {
        data: {
          allCollector: 1,
          collectorInCity: 2,
          allVendor: 1,
          vendorInCity: 2,
        },
        status: "success",
      },
    },
  });
  it("test vendorData", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <VendorData />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Chart", () => {
    const wrapper = mount(
      <Provider store={store}>
        <VendorData />
      </Provider>
    );
    expect(wrapper.find(Chart).length).toEqual(1);
  });
});
