/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {Provider} from "react-redux";
import CustomerData from "../../../../container/collector/collectorAnalytics/users";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

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
  test("test Users", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CustomerData />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
