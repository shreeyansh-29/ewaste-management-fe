/* eslint-disable no-undef */
import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import ViewCollectors from "./viewCollectors";
import MaterialTable from "material-table";
import {BrowserRouter} from "react-router-dom";

Enzyme.configure({adapter: new Adapter()});

const mockedUsedDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedUsedDispatch,
}));

describe("View Collectors Request", () => {
  it("test ViewCollectors", () => {
    const wrapper = shallow(<ViewCollectors />);
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test for Material Table", () => {
    const wrapper = mount(<ViewCollectors />);
    expect(wrapper.find(MaterialTable).length).toEqual(1);
  });
  it("should have accept button", () => {
    let props = {
      status: "success",
      customerdata: [
        {
          category: "Temp",
          itemName: "tv",
          quantity: "3",
        },
      ],
      data: [
        {
          city: "Mahendragarh",
          email: "coll@gmail.com",
          firstName: "Harry",
          gstNo: "07FFFFF0000B2Z9",
          id: "2",
          lastName: "Potter",
          mobileNo: "9090909987",
        },
      ],
    };
    const mockFn = jest.fn();
    const wrapper = mount(
      <BrowserRouter>
        <ViewCollectors {...props} handleAccept={mockFn} />
      </BrowserRouter>
    );
    wrapper.find("#bttn").simulate("click");
    expect(mockedUsedDispatch).toHaveBeenCalled;
  });
});
