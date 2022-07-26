/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import MyDrives from "./myDrives";
import MaterialTable from "material-table";
import enableHooks from "jest-react-hooks-shallow";
import {useSelector, useDispatch} from "react-redux";

enableHooks(jest);

Enzyme.configure({adapter: new Adapter()});
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockStore = configureStore([]);
jest.useFakeTimers();
describe("MyDrives", () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });
  const useSelectorMock = useSelector;
  const useDispatchMock = useDispatch;

  it("test MyDrives", () => {
    let store;
    store = mockStore({
      collectorMyDrives: {
        isLoading: true,
        error: "",
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <MyDrives />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test MaterialTable", () => {
    let store;
    store = mockStore({
      collectorMyDrives: {
        isLoading: true,
        error: "",
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <MyDrives />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
    console.log("wrapper", wrapper.debug());
  });
  it("should have no initial data", () => {
    let store;
    store = mockStore({
      collectorMyDrives: {
        isLoading: true,
        error: "",
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <MyDrives />
      </Provider>
    );
    expect(wrapper.find(".MuiTableBody-root").text()).toEqual(
      "No records to display"
    );
  });
  it("should be able to change the status", () => {
    const mockFn = jest.fn();
    let store = mockStore({
      collectorMyDrives: {
        isLoading: true,
        error: "",
        data: [
          {
            id: 1,
            date: "2022-07-30",
            description: "Go Green",
            driveName: "ABCD",
            eWasteCategoryAccepted: [
              {id: 1, categotyAccepted: "Lamps, Screens"},
            ],
            location: "Goyal Tower Lucknow Uttar Pradesh",
            time: "9:00-17:00",
            status: "Upcoming",
          },
        ],
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <MyDrives callApi={mockFn} />
      </Provider>
    );

    wrapper.find('button[title="Edit"]').simulate("click");

    let status = wrapper.find('input[value="Upcoming"]');
    status = wrapper
      .find('svg[viewBox="0 0 24 24"]')
      .at(1)
      .simulate("change", {persist() {}, target: {value: "Cancelled"}});

    console.log("status", status.html());
    wrapper.find('button[title="Save"]').simulate("click");
    jest.runAllTimers();

    expect(mockFn).toHaveBeenCalled;
    expect(useDispatchMock).toHaveBeenCalled;
  });
});
