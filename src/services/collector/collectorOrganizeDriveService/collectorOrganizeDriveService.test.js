/* eslint-disable no-undef */
import React from "react";
import {collectorOrganizeDriveService} from "./collectorOrganizeDriveService";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

it("testing collectorOrganizeDriveService", () => {
  const categoryAccepted = {};
  const data = {
    payload: {
      driveName: "",
      description: "",
      data: "",
      time: "",
      eWasteCategoryAccepted: [categoryAccepted],
    },
  };
  const Service = collectorOrganizeDriveService;
  const wrapper = shallow(<Service {...data} />);
  expect.assertions(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
