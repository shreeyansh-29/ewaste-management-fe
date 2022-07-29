/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import AvailableSales from "./availableSales";
import MaterialTable from "material-table";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

describe("Available Sales", () => {
  it("test AvailableSales", () => {
    let store = mockStore({
      collectorAvailable: {
        data: {},
        isLoading: false,
        error: "",
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <AvailableSales />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Material Table", () => {
    let store = mockStore({
      collectorAvailable: {
        data: [
          {
            Totalprice: 28000,
            availableQuantity: "2",
            category: "Temp",
            id: "IS1",
            itemName: "AC",
            price: "14000",
          },
        ],
        isLoading: false,
        error: "",
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <AvailableSales />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
});
