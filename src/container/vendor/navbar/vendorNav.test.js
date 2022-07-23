/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import VendorNav from "./vendorNav";
import toJson from "enzyme-to-json";
import {Navbar} from "react-bootstrap";

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

describe("test Vendor Navbar", () => {
  let store;
  store = mockStore({
    vendorName: {
      data: {
        payload: "Sagar",
      },
    },
  });
  it("test vendorNav", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <VendorNav />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test Navbar", () => {
    const wrapper = mount(
      <Provider store={store}>
        <VendorNav />
      </Provider>
    );
    expect(wrapper.find(Navbar).length).toEqual(1);
  });
  it("should test LogoutBtn", () => {
    const mockFn = jest.fn();
    const result = {isConfirmed: "true"};
    const wrapper = mount(
      <Provider store={store}>
        <VendorNav onClick={mockFn} {...result} />
      </Provider>
    );
    wrapper.find(".Btn").simulate("click");
  });
});
