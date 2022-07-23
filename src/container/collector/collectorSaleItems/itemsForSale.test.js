/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import ItemsForSale from "./itemsForSale";
import {TOAST_ERROR4} from "../../constant/constant";
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

describe("test ItemsForSale", () => {
  let store;
  store = mockStore({
    collectorForSale: {
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
  it("should render ItemsForSale", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ItemsForSale />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Material Table", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ItemsForSale />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should have no data initially", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ItemsForSale />
      </Provider>
    );
    expect(wrapper.find(".MuiTableBody-root").text()).toEqual(
      "No records to display"
    );
  });
  it.only("should have an add button", () => {
    const props = {
      handleSubmit: jest.fn(),
    };
    const wrapper = mount(
      <Provider store={store}>
        <ItemsForSale {...props} />
      </Provider>
    );
    const addBtn = wrapper.find(".MuiSvgIcon-root").at(0).simulate("click");
    expect(addBtn).toBeTruthy();
    // console.log("wrpper", wrapper.find(".MuiTableRow-root").debug());

    let itemName;
    act(() => {
      itemName = wrapper
        .find('input[placeholder="Item Name"]')
        .simulate("change", {
          persist: () => {},
          target: {
            type: "text",
            value: "AC",
          },
        });
    });
    expect(itemName.html()).toMatch("AC");

    let checkBtn;
    act(() => {
      checkBtn = wrapper.find(".MuiIconButton-label").at(2);
      expect(checkBtn.simulate("click")).toBeTruthy();
    });
    expect(checkBtn.length).toEqual(1);

    console.log("Hy", wrapper.find(".MuiIconButton-label").length);
    let saleItBtn = jest.autoMockOn();
    act(() => {
      saleItBtn = wrapper.find(".bttn");
    });
    console.log("wrapper", saleItBtn.debug());
    expect(saleItBtn).toBeTruthy();
    saleItBtn.simulate("click");
  });

  // it("should test button", () => {
  //   const handleSubmit = jest.fn();
  //   const name = "Sale It";
  //   const event = {preventDefault() {}, datas: ""};
  //   const wrapper = shallow(
  //     <Provider store={store}>
  //       <ItemsForSale onClick={handleSubmit}>{name}</ItemsForSale>
  //     </Provider>
  //   );
  //   const render = wrapper.dive().find(".bttn");
  //   // render.simulate("click", event);
  //   // wrapper.find(".bttn").simulate("click", event);
  //   // expect(handleSubmit).toHaveBeenCalled;
  // });
  // it("should test handleSubmit", () => {
  //   const handleSubmit = jest.fn();
  //   const props = {preventDefault() {}, datas: {}};
  //   const wrapper = shallow(
  //     <Provider store={store}>
  //       <ItemsForSale handleSubmit={handleSubmit} {...props} />
  //     </Provider>
  //   );
  //   expect(wrapper).toBeTruthy();
  //   expect(handleSubmit).toHaveBeenCalled;
  //   if (props.datas === null) {
  //     expect(datas).toHaveBeenCalledWith(TOAST_ERROR4);
  //   }
  // });
});

// console.log(wrapper.find(".MuiFormControl-root").at(1).debug());
// let categoryInput, categoryDiv, categoryDropdown;
// act(() => {
//   categoryDiv = wrapper
//     .find(".MuiFormControl-root")
//     .at(1)
//     .find('div[aria-label="Category"]');
//   categoryInput = categoryDiv.find(".MuiSelect-nativeInput").at(0);
//   console.log(categoryDiv.debug());
//   categoryDropdown = categoryDiv
//     .find('svg[aria-hidden="true"]')
//     .simulate("change", {
//       preventDefault() {},
//       target: {
//         value:
//           "Temperature exchange equipment (such as air conditioners, freezers)",
//       },
//     });
//   categoryDiv = categoryDropdown;
//   categoryInput = "Temp";
//   expect(categoryInput).toBeTruthy();
// });
// let quantity;
// act(() => {
//   quantity = wrapper
//     .find('input[placeholder="Quantity"]')
//     .first()
//     .invoke("onChange", {
//       persist: () => {},
//       target: {
//         type: "number",
//         value: "10",
//       },
//     });
// });
// expect(quantity.text).toMatch("10");

//   let price;
//   act(() => {
//     price = wrapper
//       .find('input[placeholder="Price/Item"]')
//       .simulate("change", {
//         persist: () => {},
//         target: {
//           type: "number",
//           value: "1000",
//         },
//       });
//   });
//   expect(price.html()).toMatch("1000");
