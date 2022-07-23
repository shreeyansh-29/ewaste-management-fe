/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import MyOrders from "./myOrders";
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

describe("test My Orders", () => {
  let store;
  store = mockStore({
    vendorMyOrders: {
      payload: [
        {
          address: "Shop No. 17, Gopal Tower, Aminabad Lucknow Uttar Pradesh",
          category: "Screens",
          collector: {
            address1: "Shop No. 17, Gopal Tower, Aminabad",
            categoriesAcceptedSet: [
              {id: 2, categoryAccepted: "Lamps"},
              {id: 3, categoryAccepted: "Temp"},
              {id: 1, categoryAccepted: "Screens"},
            ],
            city: "Lucknow",
            email: "collector1@gmail.com",
            firstName: "John",
            gstNo: "09AABCU9603R1Z1",
            id: 1,
            lastName: "Cena",
            mobileNo: "9090909090",
            password:
              "$2a$10$UfrslBdkndf5sLCjzF2XE.cxhvwgqc.OTv.yMx4eL/gNwBV9eBMgm",
            pinCode: "226022",
            registrationNo: "721973",
            shopTime: "9:00-14:00",
            state: "Uttar Pradesh",
            uid: "09233cfe-9700-4150-965c-3c695fdb8c9f",
          },
          collectorUid: "09233cfe-9700-4150-965c-3c695fdb8c9f",
          date: "2022-07-02",
          id: "ORD1",
          itemName: "Monitor",
          price: "16500",
          quantity: "5",
          status: "completed",
        },
      ],
    },
  });
  it("test myOrders", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MyOrders />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Material Table", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MyOrders />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it.skip("should test togglepop", () => {
    const togglepop = jest.fn();
    // let isopen = true;
    // const event = {preventDefault() {}, isopen: "true"};
    const wrapper = mount(
      <Provider store={store}>
        <MyOrders togglepop={togglepop} />
      </Provider>
    );
    // console.log("wrapper", wrapper.find(".MuiTableBody-root").debug());
    // console.log("length", wrapper.find("td").length);
    // console.log("tb length", wrapper.find("td").length);
    // wrapper.find(".MuiIconButton-label").at(0).simulate("click");
    // expect(wrapper.find(MaterialTable).length).toBe(1);
  });
});
