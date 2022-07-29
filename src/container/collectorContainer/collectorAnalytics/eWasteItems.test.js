/* eslint-disable no-undef */
import React from "react";
import EWasteItems from "./eWasteItems";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import Chart from "react-google-charts";

Enzyme.configure({adapter: new Adapter()});

const mockStore = configureStore([]);

describe("EWasteItems", () => {
  let store = mockStore({
    collectorEWasteItems: {
      data: {},
      isLoading: true,
      error: "",
    },
  });
  it("test EWasteItems", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <EWasteItems />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test chart", () => {
    let store;
    store = mockStore({
      collectorEWasteItems: {
        isLoading: true,
        error: "",
        data: {
          status: "success",
          data: {
            TempCollected: 32,
            ScreensCollected: 10,
            LapmsCollected: 12,
            LargeEqipCollected: 15,
            SmallEquipCollected: 4,
            SmallITCollected: 9,
            TempSell: 6,
            ScreensSell: 8,
            LapmsSell: 10,
            LargeEqipSell: 11,
            SmallEquipSell: 10,
            SmallITSell: 7,
          },
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <EWasteItems />
      </Provider>
    );
    expect(wrapper.find(Chart).length).toEqual(1);
  });
});
