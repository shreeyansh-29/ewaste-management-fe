/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import Waste from "./waste";
import {MDBCol} from "mdb-react-ui-kit";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

describe("EWaste Drives", () => {
  it("test Waste", () => {
    let store = mockStore({
      customerEWasteDrives: {
        isLoading: true,
        error: "",
        data: {},
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <Waste />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("test MDBCOL", () => {
    let store = mockStore({
      customerEWasteDrives: {
        isLoading: true,
        error: "",
        data: {
          data: [
            {
              location: "Goyal Tower Lucknow Uttar Pradesh",
              organizerName: "Anvesh Thakur",
              description: "Go Green",
              driveName: "ABCD",
              date: "2022-07-30",
              time: "9:00-17:00",
              eWasteCategoryAccepted: [
                {id: 1, categoryAccepted: "Lamps,Screens"},
              ],
            },
          ],
          status: "success",
        },
      },
    });

    const mockFn = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <Waste handledate={mockFn} />
      </Provider>
    );
    expect(wrapper.find(MDBCol).length).toEqual(1);
  });
});
