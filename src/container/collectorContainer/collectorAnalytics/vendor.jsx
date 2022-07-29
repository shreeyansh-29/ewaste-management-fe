/*
  @module vendor
*/
import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {connect, useDispatch} from "react-redux";
import {collectorVendorRequest} from "../../../redux/action/collector/analyticsAction/collectorVendorAction";
import {isEmpty} from "lodash";

export const data = [
  ["name", "Registered Vendors", {role: "style"}],
  ["Vendors in the Country", 5, "lightblue"],
  ["Vendors in your City", 2, "yellowgreen"],
];
export const options = {
  legend: {position: "none"},
  chartArea: {width: "45%"},
  scaleType: "decimal",
  axes: {
    x: {
      0: {scaleType: "decimal", label: "Registered Vendors"},
    },
  },

  textStyle: {
    fontSize: 12,
    maxRotation: 80,
    minRotation: 80,
  },
};
const VendorData = ({res}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(collectorVendorRequest());
  }, []);
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      data[2][1] = res.data.data.vendorCity;
      data[1][1] = res.data.data.vendorAllCity;
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
    res: state.collectorVendor,
  };
};

export default connect(mapStateToProps)(VendorData);
