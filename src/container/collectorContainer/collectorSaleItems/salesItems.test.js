/* eslint-disable no-undef */
import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, {mount, shallow} from "enzyme";
import SalesItems from "./salesItems";
import toJson from "enzyme-to-json";
import {Tabs} from "@mui/material";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

Enzyme.configure({adapter: new Adapter()});

describe("test salesItems", () => {
  it("should render SalesItems", () => {
    const wrapper = shallow(<SalesItems />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should test onChange", () => {
    const onChange = jest.fn();
    const event = {
      preventDefault() {},
    };
    const wrapper = shallow(<SalesItems handleChange={onChange} />);
    wrapper.find(Tabs).simulate("change", event);
    expect(onChange).toHaveBeenCalled;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  let store;
  store = mockStore({
    customerPendingRequest: {
      data: {
        status: "success",
        data: {
          id: 1,
        },
      },
    },
  });
  it("should test TabPanel", () => {
    const name = "TabPanel";
    const props = {children: "", index: "", other: ""};
    const TabPanel = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SalesItems {...props} TabPanel={TabPanel}>
            {name}
          </SalesItems>
        </BrowserRouter>
      </Provider>
    );
    wrapper.find(TabPanel).exists();
    expect(TabPanel).toHaveBeenCalled;
  });
});
