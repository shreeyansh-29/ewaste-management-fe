/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import DropOff from "./dropOff";
import MaterialTable from "material-table";
import toast from "../../../components/toast";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();

const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

jest.useFakeTimers();
describe("DropOff Request", () => {
  it("test DropOff", () => {
    let store = mockStore({
      customerDropOff: {
        isLoading: true,
        error: "",
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <DropOff />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Material Table", () => {
    let store = mockStore({
      customerDropOff: {
        isLoading: true,
        error: "",
        data: {},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <DropOff />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should have add button", () => {
    let store = mockStore({
      customerDropOff: {
        isLoading: true,
        error: "",
        data: {status: "success", data: [{}, {}]},
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <DropOff />
      </Provider>
    );

    wrapper.find('button[title="Add"]').simulate("click");

    let requestName = wrapper.find('input[placeholder="Request Name"]');
    // requestName.props().onChange({target: {value: "AC"}});
    requestName.simulate("change", {persist() {}, target: {value: "AC"}});
    requestName.update();

    expect(requestName.html()).toMatch("AC");

    let quantity = wrapper.find("input[placeholder='Quantity']");
    quantity.simulate("change", {persist() {}, target: {value: 10}});
    quantity.update();

    // expect(quantity.html()).toMatch("10");

    wrapper.find('button[title="Save"]').simulate("click");

    expect(toast.error).toHaveBeenCalled;
    jest.useFakeTimers();

    console.log("wrapper", wrapper.debug());
  });
});
