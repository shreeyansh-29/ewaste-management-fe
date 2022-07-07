/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import CustomerProfile from "../../../../container/customer/customerProfile/customerProfile";

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

describe("Customer Profile", () => {
  let store;
  store = mockStore({
    customerProfile: {
      isLoading: true,
      error: "",
      payload: {
        status: "success",
        data: {
          address1: "House No. 12, N1 Colony",
          firstName: "Sagar",
          lastName: "Negi",
          state: "Uttar Pradesh",
          city: "Kanpur",
        },
      },
    },
  });
  test("test CustomerProfile", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CustomerProfile />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
