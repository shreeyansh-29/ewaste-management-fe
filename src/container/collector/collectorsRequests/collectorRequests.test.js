/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import CollectorRequests from "./collectorRequests";
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

describe("CollectorRequests", () => {
  let store;
  store = mockStore({
    collectorPending: {
      isLoading: true,
      error: "",
      data: {
        status: "success",
        data: {
          address: "Sec-14/339,Vikas Nagar, Lucknow, Uttar Pradesh",
          category: "Temp",
          id: 17,
          itemName: "AC",
        },
      },
    },
  });
  it("test CollectorRequests", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CollectorRequests />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test MaterialTable", () => {
    const wrapper = mount(
      <Provider store={store}>
        <CollectorRequests />
      </Provider>
    );
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it.skip("should test onClick", () => {
    const handleAccept = jest.fn();
    const props = {preventDefault() {}, datas: ""};
    const wrapper = mount(
      <Provider store={store}>
        <CollectorRequests onClick={handleAccept} {...props} />
      </Provider>
    );
    expect(wrapper.find(".bttn").exists).toBeTruthy;
  });
});
