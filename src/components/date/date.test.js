/* eslint-disable no-undef */
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Date from "./date";

Enzyme.configure({adapter: new Adapter()});

describe("test date", () => {
  let month;
  beforeEach(() => {
    shallow(<Date {...month} />);
  });
  it("test for Jan", () => {
    month = "Jan";
    const result = Date(month);
    expect(result).toEqual("01");
  });
  it("test for Feb", () => {
    month = "Feb";
    const result = Date(month);
    expect(result).toEqual("02");
  });
  it("test for Mar", () => {
    month = "Mar";
    const result = Date(month);
    expect(result).toEqual("03");
  });
  it("test for Apr", () => {
    month = "Apr";
    const result = Date(month);
    expect(result).toEqual("04");
  });
  it("test for May", () => {
    month = "May";
    const result = Date(month);
    expect(result).toEqual("05");
  });
  it("test for Jun", () => {
    month = "Jun";
    const result = Date(month);
    expect(result).toEqual("06");
  });
  it("test for Jul", () => {
    month = "Jul";
    const result = Date(month);
    expect(result).toEqual("07");
  });
  it("test for Aug", () => {
    month = "Aug";
    const result = Date(month);
    expect(result).toEqual("08");
  });
  it("test for Sep", () => {
    month = "Sep";
    const result = Date(month);
    expect(result).toEqual("09");
  });
  it("test for Oct", () => {
    month = "Oct";
    const result = Date(month);
    expect(result).toEqual("10");
  });
  it("test for Nov", () => {
    month = "Nov";
    const result = Date(month);
    expect(result).toEqual("11");
  });
  it("test for Dec", () => {
    month = "Dec";
    const result = Date(month);
    expect(result).toEqual("12");
  });
});