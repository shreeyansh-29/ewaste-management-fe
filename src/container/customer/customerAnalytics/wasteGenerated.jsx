/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import {Chart} from "react-google-charts";
import "../customer.css";
import {useDispatch, useSelector} from "react-redux";
import {customerWasteGeneratedRequest} from "../../../redux/action/customer/analyticsAction/customerWasteGeneratedAction";
import {isEmpty} from "lodash";

export const data = [
  ["name", "Count by Order", {role: "style"}],
  ["E-Waste Generated", 5, "yellowgreen"],
  ["E-Waste you Donated", 4, "lightblue"],
];
export const options = {
  chartArea: {width: "50%"},
  colors: ["yellowgreen", "lightblue"],
  legend: "none",
  align: "center",
  axes: {
    x: {
      0: {scaleType: "decimal", label: ""},
    },
  },
  textStyle: {
    fontSize: 12,
    maxRotation: 80,
    minRotation: 80,
  },
};

const EWaste = () => {
  let res = useSelector((state) => state.customerWasteGenerated);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(customerWasteGeneratedRequest());
  }, []);
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      data[1][1] = res?.data?.data.orderInCity;
      data[2][1] = res?.data?.data.orderCustomer;
    }
  }, [res]);

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
export default EWaste;
