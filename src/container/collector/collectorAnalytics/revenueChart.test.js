/* eslint-disable no-undef */
import React from "react";
import RevenueChart from "./revenueChart";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
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

describe("RevenueChart", () => {
  it("test RevenueChart", () => {
    let store;
    store = mockStore({
      collectorRevenueChart: {
        data: {},
        isLoading: false,
        error: "",
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <RevenueChart />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test Chart", () => {
    let store = mockStore({
      collectorRevenueChart: {
        isLoading: true,
        error: "",
        data: {
          status: "success",
          data: {
            Temp: 25000,
            Screens: 10000,
            Lapms: 9371,
            LargeEqip: 33000,
            SmallEquip: 17310,
            SmallIT: 1999,
          },
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <RevenueChart />
      </Provider>
    );
    expect(wrapper.find(Chart).length).toEqual(1);
  });
});
