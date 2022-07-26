/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import CollectorRequests from "./collectorRequests";
import MaterialTable from "material-table";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));
jest.useFakeTimers();
describe("CollectorRequests", () => {
  it("test CollectorRequests", () => {
    let store = mockStore({
      collectorPending: {
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <CollectorRequests />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test MaterialTable", () => {
    let store = mockStore({
      collectorPending: {
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <CollectorRequests />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should test Accept Button", () => {
    let store = mockStore({
      collectorPending: {
        isLoading: true,
        error: "",
        data: {
          status: "success",
          data: [
            {
              address: "Sec-12, Lucknow, Uttar Pradesh",
              category: "Temp",
              itemName: "AC",
              quantity: "8",
              scheduleDate: "2022-07-28",
              scheduledTime: "10:00 -12:00",
            },
          ],
        },
      },
    });
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <CollectorRequests handleAccept={mockFn} />
      </Provider>
    );
    console.log(wrapper.find(".bttn").debug());
    wrapper.find(".bttn").simulate("click");
    expect(mockFn).toHaveBeenCalled;
    jest.runAllTimers();
  });
});
