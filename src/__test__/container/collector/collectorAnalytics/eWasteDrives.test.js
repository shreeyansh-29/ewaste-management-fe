/* eslint-disable no-undef */
import React from "react";
import EWasteDrives from "../../../../container/collector/collectorAnalytics/eWasteDrives";
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

describe("EWasteDrives", () => {
  let store;
  store = mockStore({
    collectorEWasteDrives: {
      isLoading: true,
      error: "",
      data: {
        status: "success",
        data: {
          EWasteDriveCity: 1,
          EWasteDriveCollector: 5,
        },
      },
    },
  });
  test("test EWasteDrives", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <EWasteDrives />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
