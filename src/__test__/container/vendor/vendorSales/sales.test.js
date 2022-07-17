/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import Sales from "../../../../container/vendor/vendorSales/sales";

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

describe("test Sales", () => {
  let store;
  store = mockStore({
    vendorViewItems: {
      data: {
        payload: {},
        status: "success",
      },
    },
    vendorAcceptItems: {
      data: {
        payload: {},
        status: "success",
      },
    },
  });
  it("test sales", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Sales />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
