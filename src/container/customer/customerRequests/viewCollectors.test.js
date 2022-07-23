/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import ViewCollectors from "./viewCollectors";
import MaterialTable from "material-table";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

describe("View Collectors Request", () => {
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
  it("test ViewCollectors", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ViewCollectors />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Material Table", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ViewCollectors />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should have accept button", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ViewCollectors />
      </Provider>
    );
    const materialTable = wrapper.find(MaterialTable);
    console.log(materialTable.debug());
  });
});
