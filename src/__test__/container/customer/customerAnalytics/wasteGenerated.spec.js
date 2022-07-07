/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import EWaste from "../../../../container/customer/customerAnalytics/wasteGenerated";

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

describe("EWaste Analytics", () => {
  let store;
  store = mockStore({
    customerWasteGenerated: {
      isLoading: true,
      error: "",
      data: {
        status: "success",
        data: {
          orderInCity: 1,
          orderCustomer: 1,
        },
      },
    },
  });
  test("test EWaste", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <EWaste />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
