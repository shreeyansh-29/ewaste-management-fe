/* eslint-disable no-undef */
import React from "react";
import EWasteDrives from "./eWasteDrives";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import Chart from "react-google-charts";

Enzyme.configure({adapter: new Adapter()});

// const mockedUsedDispatch = jest.fn();
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

describe("EWasteDrives", () => {
  it.only("test EWasteDrives", () => {
    let store;
    store = mockStore({
      collectorEWasteDrives: {
        data: {},
        isLoading: false,
        error: "",
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <EWasteDrives />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it.only("should test Chart", () => {
    let store;
    store = mockStore({
      collectorEWasteDrives: {
        data: {
          data: {EWasteDriveCity: 1, EWasteDriveCollector: 2},
          status: "success",
        },
        isLoading: true,
        error: "",
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <EWasteDrives />
      </Provider>
    );
    expect(wrapper.find(Chart).length).toEqual(1);
  });
});
