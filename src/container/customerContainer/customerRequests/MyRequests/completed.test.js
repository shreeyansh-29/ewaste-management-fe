/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import Completed from "./completed";
import MaterialTable from "material-table";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

describe("Completed Request", () => {
  it("test completed", () => {
    let store;
    store = mockStore({
      customerCompletedRequest: {
        isLoading: true,
        error: "",
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <Completed />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test MaterialTable", () => {
    let store;
    store = mockStore({
      customerCompletedRequest: {
        isLoading: true,
        error: "",
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Completed />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should test togglePop", () => {
    let store;
    store = mockStore({
      customerCompletedRequest: {
        isLoading: true,
        error: "",
        data: {
          data: [
            {
              category: "Screens",
              itemName: "Laptops",
              quantity: "6",
              requestType: "PickUp",
              scheduledDate: "2022-07-29",
              scheduledTime: "12:00 -14:00",
              status: "Scheduled",
              collector: [
                {
                  firstName: "Anvesh",
                  lastName: "Thakur",
                  address1: "Goyal Tower",
                  city: "Lucknow",
                  state: "Uttar Pradesh",
                  mobileNo: "9695072068",
                },
              ],
            },
          ],
          status: "success",
        },
      },
    });
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <Completed togglepop={mockFn} />
      </Provider>
    );
    wrapper.find("#pop1").at(0).simulate("click");
  });
});
