/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import RequestSummary from "../../../../container/collector/collectorsRequests/requestSummary";

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

describe("CollectorRequestsSummary", () => {
  let store;
  store = mockStore({
    collectorSummary: {
      isLoading: true,
      error: "",
      data: {
        status: "success",
        data: {
          address: "Sec-12/39,Vikas Nagar",
          category: "Screens",
          id: 2,
          itemName: "Monitor",
          customer: {id: 1, firstName: "Muskan", lastName: "Tyagi"},
        },
      },
    },
  });
  test("test RequestSummary", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <RequestSummary />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
