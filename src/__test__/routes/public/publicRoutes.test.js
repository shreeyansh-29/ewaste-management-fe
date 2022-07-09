/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adatper from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";
import PublicRoutes from "../../../routes/public/publicRoutes";

Enzyme.configure({adapter: new Adatper()});

describe("testing authProtected", () => {
  let props;
  const wrapper = shallow(<PublicRoutes {...props} />);

  it("test", () => {
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
