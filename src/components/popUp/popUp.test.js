// /* eslint-disable no-undef */
// import * as reactRedux from "react-redux";

// describe("test suite", () => {
//   const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
//   const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

//   beforeEach(() => {
//     useSelectorMock.mockClear();
//     useDispatchMock.mockClear();
//   });

//   it("does something", () => {
//     const dummyDispatch = jest.fn();
//     useDispatchMock.mockReturnValue(dummyDispatch);
//     /* SANITY CHECK */
//     expect(dummyDispatch).not.toHaveBeenCalled();
//   });
// });

/* eslint-disable no-undef */
import React from "react";
import Popup from "./popUp";
import Enzyme, {mount, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {Provider} from "react-redux";
import {Form, Formik} from "formik";
// import * as reactRedux from 'react-redux'

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
  let props = {c: 1, cont: 2, contents: 3, content: 4};
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementationOnce((init) => [init, setState]);
  let wrapper;

  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    wrapper = shallow(
      <Provider store={store}>
        <Popup {...props} />;
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("test popUp Component", () => {
    const mockedDispatch = jest.fn();
    mockedUsedSelector.mockImplementation(
      (state) => state.viewCollectorProfileReducer
    );
    mockedUsedDispatch.mockReturnValue(mockedDispatch);
    // expect.assertions(1);
    expect(mockedDispatch).toHaveBeenCalledTimes(0);
    expect(toJson(wrapper)).toBeTruthy();
  });
  it("should test Formik", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Popup />
      </Provider>
    );
    expect(wrapper.find(Formik).length).toBe(1);
    expect(wrapper.find(Form).length).toBe(1);
  });
});
