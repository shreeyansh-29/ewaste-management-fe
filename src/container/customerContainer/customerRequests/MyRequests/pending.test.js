/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import Pending from "./pending";
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

describe("Pending Request", () => {
  it("test pending", () => {
    let store = mockStore({
      customerPendingRequest: {
        isLoading: true,
        error: "",
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <Pending />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test MaterialTable", () => {
    let store = mockStore({
      customerPendingRequest: {
        isLoading: true,
        error: "",
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Pending />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should test handleDecline", () => {
    let store = mockStore({
      customerPendingRequest: {
        isLoading: true,
        error: "",
        data: {
          data: [
            {
              id: 5,
              itemName: "AC",
              category: "Temp",
              quantity: "8",
              requestType: "PickUp",
              scheduledDate: "2022-07-28",
              scheduledTime: "10:00 -12:00",
            },
          ],
        },
      },
    });
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <Pending handleDecline={mockFn} />
      </Provider>
    );
    wrapper.find(".bttn").simulate("click");
    expect(mockFn).toHaveBeenCalled;
  });
});
