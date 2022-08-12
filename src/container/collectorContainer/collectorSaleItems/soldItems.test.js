/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import SoldItems from "./soldItems";
import MaterialTable from "material-table";

Enzyme.configure({adapter: new Adapter()});
const mockStore = configureStore([]);

describe("Sold Items", () => {
  it("test SoldItems", () => {
    let store;
    store = mockStore({
      collectorSold: {
        isLoading: false,
        error: "",
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <SoldItems />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Material Table", () => {
    let store = mockStore({
      collectorSold: {
        data: [
          {
            id: 1,
            itemName: "AC",
            category: "Temp",
            quantity: "2",
            price: "28000",
          },
        ],
        isLoading: true,
        error: "",
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <SoldItems />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
});
