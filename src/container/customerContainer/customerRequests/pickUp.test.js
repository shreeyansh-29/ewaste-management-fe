/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import PickUp from "./pickUp";
import MaterialTable from "material-table";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

jest.useFakeTimers();
describe("PickUp Request", () => {
  it("test PickUp", () => {
    let store;
    store = mockStore({
      customerPickUp: {
        isLoading: true,
        error: "",
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <PickUp />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Material Table", () => {
    let store;
    store = mockStore({
      customerCountColl: {
        isLoading: true,
        error: "",
        data: {
          payload: 0,
          type: "CUSTOMER_COUNT_COLL_SUCCESS",
        },
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <PickUp />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should test add button", () => {
    let store;
    store = mockStore({
      customerCountColl: {
        isLoading: true,
        error: "",
        data: {
          payload: 0,
          type: "CUSTOMER_COUNT_COLL_SUCCESS",
        },
      },
    });
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <PickUp handleClick={mockFn} />
      </Provider>
    );

    wrapper.find("button[title='Add']").simulate("click");

    let itemName = wrapper.find('input[placeholder="Item Name"]');
    itemName.simulate("change", {
      persist: () => {},
      target: {type: "text", value: "AC"},
    });
    itemName.update();

    let quantity = wrapper.find('input[placeholder="Quantity"]');
    quantity.simulate("change", {
      persist: () => {},
      target: {type: "number", value: 10},
    });
    quantity.update();

    wrapper.find("button[title='Save']").simulate("click");
    jest.runAllTimers();

    wrapper.find(".a").simulate("click");
    expect(mockFn).toHaveBeenCalled;
    expect(mockedUsedDispatch).toHaveBeenCalled;
  });
});
