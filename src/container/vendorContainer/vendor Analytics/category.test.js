/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import CollectorCategory from "./category";
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

describe("test collector category", () => {
  it("test category", () => {
    let store;
    store = mockStore({
      vendorCategory: {
        error: "",
        isLoading: false,
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <CollectorCategory />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Chart", () => {
    let store;
    store = mockStore({
      vendorCategory: {
        error: "",
        isLoading: true,
        data: {
          data: {
            TempCity: 1,
            ScreensCity: 1,
            LapmsCity: 1,
            LargeEqipCity: 1,
            SmallEquipCity: 1,
            SmallITCity: 1,
          },
          status: "success",
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <CollectorCategory />
      </Provider>
    );
    expect(wrapper.find(Chart).length).toEqual(1);
  });
});
