/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import Sales from "./sales";
import MaterialTable from "material-table";
import {BrowserRouter} from "react-router-dom";
import toast from "../../../components/toast";

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
jest.useFakeTimers();
describe("test Sales", () => {
  let store;
  store = mockStore({
    vendorViewItems: {
      data: {
        data: [
          {
            collector: [
              {
                address1: "Goyal Tower",
                city: "Lucknow",
                state: "Uttar Pradesh",
                firstName: "Anvesh",
                lastName: "Thakur",
                mobileNo: "9695072068",
              },
            ],
            availableQuantity: "2",
            itemName: "AC",
            category: "Temp",
            price: "14000",
            quantity: "2",
          },
        ],
        status: "success",
      },
    },
    vendorAcceptItems: {
      data: {
        data: {quantity: "2", itemName: "AC"},
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
  it("should test for Material Table", () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Sales />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should test ProfileIcon", () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Sales profile={mockFn} />
        </BrowserRouter>
      </Provider>
    );

    wrapper.find("#pop1").simulate("click");
    expect(mockFn).toHaveBeenCalled;
  });
  it("should test Purchase Button and throw error if purchaseQuantity is empty", () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Sales handleBuy={mockFn} />
        </BrowserRouter>
      </Provider>
    );
    wrapper.find("button[className='bttn']").simulate("click");
    expect(toast.error).toHaveBeenCalled;
    expect(mockedUsedDispatch).toHaveBeenCalled;
  });
  it("should able to enter purchase quantity", () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Sales CalTotal={mockFn} />
        </BrowserRouter>
      </Provider>
    );
    wrapper.find("button[title='Edit']").simulate("click");
    let purchaseQuantity = wrapper.find(
      'input[placeholder="Purchase Quantity"]'
    );
    expect(purchaseQuantity.length).toBe(1);
    purchaseQuantity.simulate("change", {
      persist: () => {},
      target: {
        type: "number",
        value: "",
      },
    });

    expect(purchaseQuantity.html()).toMatch("");
    expect(mockFn).toHaveBeenCalled;
    expect(toast.error).toHaveBeenCalled;

    expect(wrapper.find("button[title='Save']").simulate("click")).toBeEnabled;
    jest.runAllTimers();

    // wrapper.find("button[className='bttn']").simulate("click");
  });
});
