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

describe("Organize Drives", () => {
  let store;
  store = mockStore({
    collectorOrganizeDrive: {
      isLoading: true,
      error: "",
      data: {
        status: "success",
        data: {
          category: "Screens",
          availableQuantity: "9",
          id: 3,
          price: "1000",
          itemName: "AC",
        },
      },
    },
  });
  it("test OrganizeDrive", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <OrganizeDrive />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test MaterialTable", () => {
    const wrapper = mount(
      <Provider store={store}>
        <OrganizeDrive />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should have no data initially", () => {
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
    const props = {
      onPageChange: jest.fn(),
      dateformat: jest.fn(),
      handleDone: jest.fn(),
    };
    const wrapper = mount(
      <Provider store={store}>
        <OrganizeDrive {...props} />
      </Provider>
    );
    // console.log(wrapper.find(".MuiSvgIcon-root").debug());
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

    let date;
    act(() => {
      date = wrapper.find('input[value="23/07/2022"]').simulate("change", {
        persist: () => {},
        target: {
          type: "text",
          value: "31/07/2022",
        },
      });
    });
    expect(date.html()).toMatch("31/07/2022");

    // act(() => {
    //   wrapper.find(".MuiSvgIcon-root").at(1).simulate("click");
    // });
    // expect(props.dateformat).toBeCalled;

    let time;
    act(() => {
      time = wrapper
        .find("div[role='button']")
        .at(4)
        .simulate("change", {
          persist: () => {},
          target: {
            value: "9:00-17:00",
          },
        });
    });
    expect(time.text()).toMatch("");

    //check button
    let check;
    act(() => {
      check = wrapper.find(".MuiIconButton-label").at(2);
      expect(check.simulate("click")).toBeTruthy();
    });

    act(() => {
      wrapper.find(".MuiIconButton-label").at(3).simulate("cancel");
    });

    let doneBtn;
    act(() => {
      doneBtn = wrapper.find(".MuiTouchRipple-root").at(3).simulate("click");
    });
    expect(doneBtn.length).toEqual(1);
    expect(props.handleDone).toBeCalled;
  });
});
