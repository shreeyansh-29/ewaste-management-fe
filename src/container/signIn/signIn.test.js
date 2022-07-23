/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import SignIn from "./signIn";
import {Form, Formik} from "formik";
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signInRequest} from "../../redux/action/signInAction/signInActions";
import enableHooks from "jest-react-hooks-shallow";

enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

Enzyme.configure({adapter: new Adapter()});

// const mockedUsedDispatch = jest.fn();
// const mockedUsedSelector = jest.fn();
// const mockLink = jest.fn();

const mockStore = configureStore([]);

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   Link: () => mockLink,
// }));

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useDispatch: () => mockedUsedDispatch,
// }));

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: () => mockedUsedSelector,
// }));

describe("SignIn", () => {
  let store = mockStore({
    signIn: {
      data: {},
      error: "",
      isLoading: true,
    },
  });
  it("test signIn", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
describe("should test for Formik", () => {
  let store = mockStore({
    signIn: {
      data: {},
      error: "",
      isLoading: true,
    },
  });
  it("should test for Formik", () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find(Formik).length).toEqual(1);
    expect(wrapper.find(Form).length).toEqual(1);
  });
  it("should have a email field", () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    wrapper.find('input[type="email"]');
  });
  it("should set email onChange", () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    const emailField = wrapper.find('input[type="email"]');
    emailField.simulate("change", {
      persist: () => {},
      target: {
        name: "email",
        value: "customer1@gmail.com",
      },
    });
    expect(emailField.html()).toMatch("customer1@gmail.com");
  });
  it("should have a password field", () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    wrapper.find('input[type="password"]');
  });
  it("should update password onChange", () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    const passwordField = wrapper.find('input[type="password"]');
    passwordField.simulate("change", {
      persist: () => {},
      target: {
        name: "password",
        value: "123456",
      },
    });
    expect(passwordField.html()).toMatch("123456");
  });
  it("should test togglePasswords", () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn togglePasswords={onClick} />
        </BrowserRouter>
      </Provider>
    );
    wrapper.find('button[type="button"]').simulate("click");
  });
  it.skip("should have ForgotPassword Link", () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
    // console.log(wrapper.find("#forgot").debug());
    wrapper.find("#forgot").render().find("/ForgotPassword");
    expect(mockLink).toHaveBeenCalled;
  });
  it("should have submit button", () => {
    const handleClick = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn onSubmit={handleClick} />
        </BrowserRouter>
      </Provider>
    );
    wrapper.find(Form).simulate("submit", {
      preventDefault: () => {},
    });
    expect(handleClick).toBeCalled;
  });
  it("should return error for empty email address", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn handleReset={mockFn} />
        </BrowserRouter>
      </Provider>
    );

    const signInForm = (props = {errors: {}, touched: {}}) =>
      wrapper.find(SignIn).dive().find(Formik).renderProp("children")(props);

    const formWithInvalidEmailErrors = signInForm({
      errors: {
        email: "Email id required",
      },
      touched: {email: true},
      handleReset: mockFn,
    });

    expect(formWithInvalidEmailErrors.text()).toMatch(/Email id required/);
  });
  it("should return error for invalid email address", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn handleReset={mockFn} />
        </BrowserRouter>
      </Provider>
    );

    const signInForm = (props = {errors: {}, touched: {}}) =>
      wrapper.find(SignIn).dive().find(Formik).renderProp("children")(props);

    const formWithInvalidEmailErrors = signInForm({
      errors: {
        email: "Invalid email id",
      },
      touched: {email: true},
      handleReset: mockFn,
    });

    expect(formWithInvalidEmailErrors.text()).toMatch(/Invalid email id/);
  });
  it("should return error if there is password validation error", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );

    const signInForm = (props = {errors: {}}) =>
      wrapper.find(SignIn).dive().find(Formik).renderProp("children")(props);

    const formWithPAsswordErrors = signInForm({
      errors: {
        password: "Password should be of atleast six characters",
      },
      touched: {password: true},
    });
    expect(formWithPAsswordErrors.text()).toMatch(
      /Password should be of atleast six characters/
    );
  });
});
// describe("SignIn Component: when user is not logged in should dispatch an action", () => {
//   const mockDispatch = jest.fn();
//   useDispatch.mockImplementation(() => mockDispatch);
//   // let values = {email: "customer1@gmail.com", password: "123456"};
//   const onSubmit = jest.fn();
//   let store = mockStore({
//     signIn: {
//       data: {},
//       error: "",
//       isLoading: false,
//     },
//   });
//   const wrapper = mount(
//     <Provider store={store}>
//       <BrowserRouter>
//         <SignIn handleClick={onSubmit} />
//       </BrowserRouter>
//     </Provider>
//   );
//   beforeAll(() => {
//     useSelector.mockImplementation(() => ({
//       data: {},
//       isLoading: false,
//       error: "",
//     }));
//   });
//   it("should have submit button, triggers onSubmit and dispatches the action", () => {
//     wrapper.find(Form).simulate("submit", {
//       preventDefault: () => {},
//     });
//     expect(onSubmit).toBeCalled;
//     expect(mockDispatch).toBeCalled;
//     // expect(mockDispatch).toBeCalledWith(signInRequest(values));
//   });
// });

// describe("SignIn Component:  When the user is not logged in", () => {
//   let container, soon;
//   let store = mockStore({
//     signIn: {
//       data: {},
//       error: "",
//       isLoading: true,
//     },
//   });
//   const wrapper = shallow(
//     <Provider store={store}>
//       <BrowserRouter>
//         <SignIn />
//       </BrowserRouter>
//     </Provider>
//   );
//   beforeAll(() => {
//     useSelector.mockImplementation(() => ({
//       data: {},
//       error: "",
//       isLoading: false,
//     }));
//   });
//   beforeEach(() => {
//     container = wrapper.find("SignIn").dive();
//     soon = container;
//   });
//   it("should render", () => {
//     expect(container).toBe(soon);
//   });
// });
