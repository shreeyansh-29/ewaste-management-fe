/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import PickUp from "./pickUp";
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

describe("PickUp Request", () => {
  let store;
  store = mockStore({
    customerPickUp: {
      isLoading: true,
      error: "",
      data: {
        status: "success",
        data: {
          id: 1,
        },
      },
    },
  });
  it("test PickUp", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <PickUp />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Material Table", () => {
    const wrapper = mount(
      <Provider store={store}>
        <PickUp />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
});
