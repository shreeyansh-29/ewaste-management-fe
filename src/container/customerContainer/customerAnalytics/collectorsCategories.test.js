/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import CollectorsCategories from "./collectorsCategories";
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

describe("Collector Categories", () => {
  it("test CollectorCategories", () => {
    let store;
    store = mockStore({
      customerCollectorCategories: {
        isLoading: false,
        error: "",
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <CollectorsCategories />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("should render Table", () => {
    let store;
    store = mockStore({
      customerCollectorCategories: {
        isLoading: true,
        error: "",
        data: {
          status: "success",
          data: {
            TempCity: 1,
            ScreensCity: 1,
            LapmsCity: 1,
            LargeEqipCity: 1,
            SmallEquipCity: 1,
            SmallITCity: 1,

            TempTotal: 1,
            ScreensTotal: 1,
            LapmsTotal: 1,
            LargeEqipTotal: 1,
            SmallEquipTotal: 1,
            SmallITTotal: 1,
          },
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <CollectorsCategories />
      </Provider>
    );
    expect(wrapper.find(Chart).length).toEqual(1);
  });
});
