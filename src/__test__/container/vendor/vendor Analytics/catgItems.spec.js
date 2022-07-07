/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import Catg_Items from "../../../../container/vendor/vendor Analytics/catgItems";

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

describe("test category items", () => {
  let store;
  store = mockStore({
    vendorCatgItems: {
      error: "",
      isLoading: true,
      data: {
        data: {
          TempCollectorSale: 1,
          ScreensCollectorSale: 1,
          LapmsCollectorSale: 1,
          LargeEqipCollectorSale: 1,
          SmallEquipCollectorSale: 1,
          SmallITCollectorSale: 1,
          TempVendor: 1,
          ScreensVendor: 1,
          LapmsVendor: 1,
          LargeEqipVendor: 1,
          SmallEquipVendor: 1,
          SmallITVendor: 1,
        },
        status: "success",
      },
    },
  });
  it("test category items", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Catg_Items />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
