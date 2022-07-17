/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import CollectorNav from "../../../../container/collector/navbar/collectorNav";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockedMapStateToProps = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  mockedMapStateToProps: () => mockedMapStateToProps,
}));

describe("Collector Navbar", () => {
  let store;
  store = mockStore({
    collectorProfile: {
      firstName: "Shrey",
    },
    collectorNotificationCount: {
      isLoading: true,
      error: "",
      data: {payload: {}},
    },
    collectorNotificationData: {
      status: "success",
      data: {},
    },
  });
  test("test CollectorNav", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CollectorNav />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
