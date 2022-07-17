/* eslint-disable no-undef */
import React from "react";
import EWasteItems from "../../../../container/collector/collectorAnalytics/eWasteItems";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";

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

describe("EWasteItems", () => {
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
  test("test EWasteItems", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <EWasteItems />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
