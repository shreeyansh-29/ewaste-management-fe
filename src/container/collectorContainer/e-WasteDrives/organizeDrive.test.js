/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import OrganizeDrive from "./organizeDrive";
import MaterialTable from "material-table";
import {act} from "react-test-renderer";
import toast from "../../../components/toast";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

jest.useFakeTimers();
describe("Organize Drives", () => {
  it("test OrganizeDrive", () => {
    const store = mockStore({
      collectorOrganizeDrive: {
        data: {},
        isLoading: false,
        error: "",
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <OrganizeDrive />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test MaterialTable", () => {
    const store = mockStore({
      collectorOrganizeDrive: {
        data: {},
        isLoading: false,
        error: "",
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <OrganizeDrive />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should have no data initially", () => {
    const store = mockStore({
      collectorOrganizeDrive: {
        data: {},
        isLoading: false,
        error: "",
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <OrganizeDrive />
      </Provider>
    );
    expect(wrapper.find(".MuiTableBody-root").text()).toEqual(
      "No records to display"
    );
  });
  it("should have an add button to generate a request", () => {
    const store = mockStore({
      collectorOrganizeDrive: {
        data: {
          status: "success",
          data: {
            date: "2022-07-31",
            description: "HUIA",
            driveName: "XYZA",
            status: "Upcoming",
            time: "10:00-18:00",
            eWasteCategoryAccepted: [
              {id: 4, categoriesAccepted: "Small Equipments"},
            ],
          },
        },
        isLoading: false,
        error: "",
      },
    });
    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <OrganizeDrive handleDone={mockFn} />
      </Provider>
    );

    wrapper.find(".MuiSvgIcon-root").at(0).simulate("click");
    let driveName;
    act(() => {
      driveName = wrapper
        .find('input[placeholder="Drive Name"]')
        .simulate("change", {
          persist: () => {},
          target: {
            type: "text",
            value: "ABCD",
          },
        });
    });
    expect(driveName.html()).toMatch("ABCD");

    let description;
    act(() => {
      description = wrapper
        .find('input[placeholder="Description"]')
        .simulate("change", {
          persist: () => {},
          target: {
            type: "text",
            value: "GHPS",
          },
        });
    });
    expect(description.html()).toMatch("GHPS");

    let categoriesAccepted;
    act(() => {
      categoriesAccepted = wrapper
        .find('input[placeholder="Categories Accepted"]')
        .simulate("change", {
          persist: () => {},
          target: {
            type: "text",
            value: "Large and Small Equipments",
          },
        });
    });
    expect(categoriesAccepted.html()).toMatch("Large and Small Equipments");

    let time = wrapper.find(".MuiSelect-nativeInput").at(0);
    time = wrapper
      .find('svg[viewBox="0 0 24 24"]')
      .at(2)
      .simulate("change", {
        persist() {},
        target: {value: "8:00-16:00"},
      });
    console.log("time", time.html());

    //check button
    let check = wrapper.find("button[title='Save']");
    check.simulate("click");

    // Done Button
    const done = wrapper.find(".MuiTouchRipple-root").at(3).simulate("click");
    console.log("wrapper", done.debug());
    expect(mockFn).toHaveBeenCalled;
    jest.runAllTimers();
    expect(toast.error).toHaveBeenCalled;
  });
  it("should test Done button", () => {
    const store = mockStore({
      collectorOrganizeDrive: {
        data: {
          status: "success",
          data: {
            date: "2022-07-31",
            description: "HUIA",
            driveName: "XYZA",
            status: "Upcoming",
            time: "10:00-18:00",
            eWasteCategoryAccepted: [
              {id: 4, categoriesAccepted: "Small Equipments"},
            ],
          },
        },
        isLoading: false,
        error: "",
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <OrganizeDrive />
      </Provider>
    );

    console.log("wrapper", wrapper.debug());
  });
});
