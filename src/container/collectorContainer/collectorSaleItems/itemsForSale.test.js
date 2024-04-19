/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import ItemsForSale from "./itemsForSale";
import MaterialTable from "material-table";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();

const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

jest.useFakeTimers();
describe("test ItemsForSale", () => {
  it("should render ItemsForSale", () => {
    let store = mockStore({
      collectorForSale: {
        isLoading: false,
        error: "",
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <ItemsForSale />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Material Table", () => {
    let store = mockStore({
      collectorForSale: {
        isLoading: false,
        error: "",
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <ItemsForSale />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should have no data initially", () => {
    let store = mockStore({
      collectorForSale: {
        isLoading: false,
        error: "",
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <ItemsForSale />
      </Provider>
    );
    expect(wrapper.find(".MuiTableBody-root").text()).toEqual(
      "No records to display"
    );
  });
  it("should have an add button", () => {
    let store = mockStore({
      collectorForSale: {
        isLoading: false,
        error: "",
        data: {},
      },
    });
    const props = {
      handleSubmit: jest.fn(),
    };
    const wrapper = mount(
      <Provider store={store}>
        <ItemsForSale {...props} />
      </Provider>
    );
    wrapper.find("button[title='Add']").simulate("click");

    const itemName = wrapper.find('input[placeholder="Item Name"]');
    itemName.simulate("change", {
      persist() {},
      target: {
        type: "text",
        value: "AC",
      },
    });
    expect(itemName.html()).toMatch("AC");

    let categoryInput = wrapper.find('div[aria-label="Category"]');

    categoryInput.simulate("mousedown", {button: 0});
    categoryInput.update();

    wrapper
      .find("input[value='']")
      .at(0)
      .props()
      .onChange({target: {value: 8}});

    let quantity = wrapper.find('input[placeholder="Quantity"]');

    quantity.simulate("mousedown", {target: {value: 8}});
    quantity.update();

    expect(quantity.prop("value")).toBe("");

    wrapper.find('button[title="Save"]').simulate("click");
    jest.runAllTimers();
  });
  it("should test Sale It Button", () => {
    let store = mockStore({
      collectorForSale: {
        isLoading: true,
        error: "",
        data: {
          availableQuantity: "8",
          category: "LargeEqip",
          itemName: "Washing Machines",
          price: "8000",
          quantity: "8",
          status: "Available",
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <ItemsForSale />
      </Provider>
    );
    expect(wrapper).toBeTruthy;
  });
});
