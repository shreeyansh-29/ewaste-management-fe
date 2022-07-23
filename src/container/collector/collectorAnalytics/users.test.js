/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {Provider} from "react-redux";
import CustomerData from "./users";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
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

describe("Users Component", () => {
  it("test Users", () => {
    let store;
    store = mockStore({
      collectorUsers: {
        isLoading: false,
        error: "",
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <CustomerData />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test Chart", () => {
    let store;
    store = mockStore({
      collectorUsers: {
        isLoading: true,
        error: "",
        data: {
          status: "success",
          data: {
            customerAllCity: 5,
            customerCity: 3,
          },
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <CustomerData />
      </Provider>
    );
    expect(wrapper.find(Chart).length).toEqual(1);
  });
});
