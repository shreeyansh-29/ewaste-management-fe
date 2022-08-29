/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import MyOrders from "./myOrders";
import MaterialTable from "material-table";

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

describe("test My Orders", () => {
  let store;
  store = mockStore({
    vendorMyOrders: {
      data: [
        {
          id: "ORD1",
          itemName: "AC",
          category: "Temp",
          quantity: "2",
          price: "28000",
          address: "Goyal Tower Lucknow Uttar Pradesh",
          date: "2022-07-25",
          status: "completed",
          collector: [
            {
              firstName: "Anvesh",
              lastName: "Thakur",
              mobileNo: "9695072068",
              address1: "Goyal Tower",
              city: "Lucknow",
              state: "Uttar Pradesh",
            },
          ],
        },
      ],
      error: "",
      isLoading: "true",
    },
  });
  it("test myOrders", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MyOrders />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Material Table", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MyOrders />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should test togglepop", () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <MyOrders togglepop={mockFn} />
      </Provider>
    );
    wrapper.find("#pop1").at(0).simulate("click");
    expect(mockFn).toHaveBeenCalled;
  });
});
