/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import Drives from "./drives";
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

describe("Customer Drives Analytics", () => {
  let store;
  store = mockStore({
    customerDrives: {
      isLoading: false,
      error: "",
      data: {},
    },
  });
  it("test Drives", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Drives />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Chart", () => {
    let store;
    store = mockStore({
      customerDrives: {
        isLoading: true,
        error: "",
        data: {
          status: "success",
          data: {
            eWasteDriveListAll: 10,
            eWasteDriveListCity: 5,
          },
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Drives />
      </Provider>
    );
    expect(wrapper.find(Chart).length).toEqual(1);
  });
});
