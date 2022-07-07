/* eslint-disable no-undef */
import React from "react";
import Popup from "../../../components/popUp/popUp";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {Provider} from "react-redux";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedNavigate = jest.fn();
const mockedUsedDispatch = jest.fn();
const mockedUsedSelector = jest.fn();
const mockStore = configureStore([]);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockedUsedSelector,
}));

describe("PopUp", () => {
  let store;
  store = mockStore({
    viewAcceptColReducer: {
      isLoading: true,
      error: "",
      data: {
        status: "success",
        data: {
          firstName: "Shrey",
          address1: "JamNagar",
          state: "Uttar Pradesh",
        },
      },
    },
    viewColProfileReducer: {
      isLoading: true,
      error: "",
      data: {status: "success", data: {}},
    },
    viewCollectorProfileReducer: {
      isLoading: true,
      error: "",
      data: {status: "success", data: {}},
    },
    viewCustomerProfileReducer: {
      isLoading: true,
      error: "",
      data: {status: "success", data: {}},
    },
  });
  test("test popUp Component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Popup />;
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
