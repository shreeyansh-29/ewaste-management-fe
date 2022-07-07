/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import ForgotPassword from "../../../container/forgotPassword/forgotPassword";

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

describe("Forgot Password", () => {
  let store;
  store = mockStore({
    forgotPassword: {
      data: {
        status: 200,
      },
    },
  });
  it("test forgotPassword", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ForgotPassword />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
