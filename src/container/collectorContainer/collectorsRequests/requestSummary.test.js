/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import RequestSummary from "./requestSummary";
import MaterialTable from "material-table";
import enableHooks from "jest-react-hooks-shallow";
import {useDispatch} from "react-redux";
import toast from "../../../components/toast";

enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
Enzyme.configure({adapter: new Adapter()});

const mockStore = configureStore([]);
jest.useFakeTimers();
describe("CollectorRequestsSummary", () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
  });
  afterEach(() => {
    useDispatchMock.mockClear();
  });

  const useDispatchMock = useDispatch;

  it("test RequestSummary", () => {
    let store = mockStore({
      collectorSummary: {
        isLoading: false,
        error: "",
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <RequestSummary />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(toast.warn).toHaveBeenCalled;
  });
  it("should test MaterialTable", () => {
    let store = mockStore({
      collectorSummary: {
        isLoading: false,
        error: "",
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <RequestSummary />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should test tooglepop", () => {
    let store = mockStore({
      collectorSummary: {
        isLoading: true,
        error: "",
        data: {
          status: "success",
          data: [
            {
              id: 2,
              itemName: "Laptops",
              category: "Screens",
              quantity: "6",
              scheduledDate: "2022-07-29",
              scheduledTime: "12:00 -14:00",
              requestType: "PickUp",
              status: "Scheduled",
              customer: [
                {
                  address1: "Sec-12",
                  city: "Lucknow",
                  firstName: "Shrey",
                  lastName: "Singh",
                  mobileNo: "9695072061",
                  state: "Uttar Pradesh",
                },
              ],
            },
            {
              id: 4,
              itemName: "Shavers",
              category: "SmallEquip",
              quantity: "10",
              requestType: "DropOff",
              scheduledDate: "---",
              scheduledTime: "---",
              status: "Scheduled",
              customer: [
                {
                  address1: "Sec-12",
                  city: "Lucknow",
                  firstName: "Priya",
                  lastName: "Bansal",
                  mobileNo: "9695072068",
                  state: "Uttar Pradesh",
                },
              ],
            },
          ],
        },
      },
    });
    const mockFn = jest.fn();
    const props = {isopen: true, detail: {customerUid: "cbdshs1ubucjss"}};
    const wrapper = mount(
      <Provider store={store}>
        <RequestSummary togglepop={mockFn} {...props} />
      </Provider>
    );
    wrapper.find("#pop1").at(0).simulate("click");
    expect(mockFn).toHaveBeenCalled;
    wrapper.find("#pop1").at(0).simulate("click");
  });
  it("should find edit button", () => {
    let store = mockStore({
      collectorSummary: {
        isLoading: true,
        error: "",
        data: {
          status: "success",
          data: [
            {
              id: 2,
              itemName: "Laptops",
              category: "Screens",
              quantity: "6",
              scheduledDate: "2022-07-29",
              scheduledTime: "12:00 -14:00",
              requestType: "PickUp",
              status: "Scheduled",
              customer: [
                {
                  address1: "Sec-12",
                  city: "Lucknow",
                  firstName: "Shrey",
                  lastName: "Singh",
                  mobileNo: "9695072061",
                  state: "Uttar Pradesh",
                },
              ],
            },
            {
              id: 4,
              itemName: "Shavers",
              category: "SmallEquip",
              quantity: "10",
              requestType: "DropOff",
              scheduledDate: "---",
              scheduledTime: "---",
              status: "Scheduled",
              customer: [
                {
                  address1: "Sec-12",
                  city: "Lucknow",
                  firstName: "Priya",
                  lastName: "Bansal",
                  mobileNo: "9695072068",
                  state: "Uttar Pradesh",
                },
              ],
            },
          ],
        },
      },
    });
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <RequestSummary onRowUpdate={mockFn} />
      </Provider>
    );
    const editBtn = wrapper.find("button[title='Edit']").at(0);
    editBtn.simulate("click");

    const status = wrapper.find(".MuiSelect-nativeInput").at(0);
    status.simulate("change", {
      preventDefault() {},
      target: {
        value: "Completed",
      },
    });
    expect(status.html()).toMatch("Completed");

    wrapper.find("button[title='Save']").simulate("click");
    jest.runAllTimers();
    expect(mockFn).toHaveBeenCalled;
  });
});
