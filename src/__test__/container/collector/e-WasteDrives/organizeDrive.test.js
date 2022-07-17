/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import OrganizeDrive from "../../../../container/collector/e-WasteDrives/organizeDrive";

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
  test("test OrganizeDrive", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <OrganizeDrive />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
