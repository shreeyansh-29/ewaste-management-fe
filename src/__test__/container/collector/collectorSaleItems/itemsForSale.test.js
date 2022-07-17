/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import ItemsForSale from "../../../../container/collector/collectorSaleItems/itemsForSale";

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

describe("ItemsForSale", () => {
  let store;
  store = mockStore({
    collectorForSale: {
      isLoading: true,
      error: "",
      data: {
        status: "success",
        data: {
          category: "Screens",
          availableQuantity: "9",
          id: 3,
          price: "1000",
          itemName: "AC",
        },
      },
    },
  });
  test("test ItemsForSale", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ItemsForSale />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
