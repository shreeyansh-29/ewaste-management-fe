/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import ViewCollectors from "../../../../container/customer/customerRequests/viewCollectors";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

describe("View Collectors Request", () => {
  let store;
  store = mockStore({
    customerPickUp: {
      isLoading: true,
      error: "",
      data: {
        status: "success",
        data: {
          id: 1,
        },
      },
    },
  });
  test("test ViewCollectors", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ViewCollectors />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
