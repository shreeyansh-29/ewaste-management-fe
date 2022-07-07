/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import CollectorRequests from "../../../../container/collector/collectorsRequests/collectorRequests";

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

describe("CollectorRequests", () => {
  let store;
  store = mockStore({
    collectorPending: {
      isLoading: true,
      error: "",
      data: {
        status: "success",
        data: {
          address: "Sec-14/339,Vikas Nagar, Lucknow, Uttar Pradesh",
          category: "Temp",
          id: 17,
          itemName: "AC",
        },
      },
    },
  });
  test("test CollectorRequests", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CollectorRequests />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
