/*
  @module drives
*/
/* eslint-disable no-unused-vars */
import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {useDispatch, connect} from "react-redux";
import {customerDrivesRequest} from "../../../redux/action/customer/analyticsAction/customerDrivesAction";
import {isEmpty} from "lodash";

export const data = [
  ["name", "Count", {role: "style"}],
  ["E-Waste Drives Organized", 4, "hotpink"],
  ["E-Waste Drives in your City", 2, "grey"],
];
export const options = {
  chartArea: {width: "50%"},
  align: "center",
  legend: "none",
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

const Drives = ({res}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customerDrivesRequest());
  }, []);
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      data[1][1] = res?.data?.data.eWasteDriveListAll;
      data[2][1] = res?.data?.data.eWasteDriveListCity;
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

const mapStateToProps = (state) => {
  return {
    res: state.customerDrives,
  };
};

export default connect(mapStateToProps)(Drives);
