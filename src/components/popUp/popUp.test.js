/* eslint-disable no-undef */
import React from "react";
import Popup from "./popUp";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import enableHooks from "jest-react-hooks-shallow";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

Enzyme.configure({adapter: new Adapter()});
const mockStore = configureStore([]);

describe("testing", () => {
  let props = {c: 1, cont: 1, contents: 1, content: 1};
  it("should render component", () => {
    let store = mockStore({
      viewAcceptColReducer: {
        data: {},
        isLoading: false,
        error: "",
      },
      viewColProfileReducer: {data: {}, isLoading: false, error: ""},
      viewCollectorProfileReducer: {data: {}, isLoading: false, error: ""},
      viewCustomerProfileReducer: {data: {}, isLoading: false, error: ""},
    });
    const wrapper = shallow(
      <Provider store={store}>
        <Popup {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  const useSelectorMock = useSelector;
  const mockDispatch = jest.fn();

  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    useDispatch.mockImplementation(() => mockDispatch);
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    mockDispatch.mockClear();
    useSelectorMock.mockClear();
  });
  it("should test Formik", () => {
    let store = mockStore({
      viewAcceptColReducer: {
        data: {
          data: {
            firstName: "Shrey",
            lastName: "Singh",
            address1: "Chor Bazaar",
            city: "Lucknow",
            state: "Uttar Pradesh",
          },
          status: "success",
        },
        isLoading: false,
        error: "",
      },
      viewColProfileReducer: {
        data: {
          data: {
            firstName: "Shrey",
            lastName: "Singh",
            address1: "Chor Bazaar",
            city: "Lucknow",
            state: "Uttar Pradesh",
          },
          status: "success",
        },
        isLoading: false,
        error: "",
      },
      viewCollectorProfileReducer: {
        data: {
          data: {
            firstName: "Shrey",
            lastName: "Singh",
            address1: "Chor Bazaar",
            city: "Lucknow",
            state: "Uttar Pradesh",
          },
          status: "success",
        },
        isLoading: false,
        error: "",
      },
      viewCustomerProfileReducer: {
        data: {
          data: {
            firstName: "Shrey",
            lastName: "Singh",
            address1: "Chor Bazaar",
            city: "Lucknow",
            state: "Uttar Pradesh",
          },
          status: "success",
        },
        isLoading: false,
        error: "",
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Popup {...props} />
      </Provider>
    );
    expect(wrapper.find(Formik).length).toEqual(1);
    expect(useSelectorMock).toHaveBeenCalled;
    expect(useStateSpy).toHaveBeenCalled;
  });
});
