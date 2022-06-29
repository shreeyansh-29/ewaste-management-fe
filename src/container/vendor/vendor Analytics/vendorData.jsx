import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {useDispatch, useSelector} from "react-redux";
import {vendorVendorDataRequest} from "../../../redux/action/vendor/analyticsAction/vendorVendorDataAction";
import {isEmpty} from "lodash";

export const data = [
  ["name", "Count", {role: "style"}],
  ["Total Vendors", 5, "lightblue"],
  ["Vendors in your City", 1, "yellowgreen"],
];
export const options = {
  chartArea: {width: "50%"},
  align: "center",
  legend: "none",
  scaleType: "decimal",
  textStyle: {
    fontSize: 12,
    maxRotation: 80,
    minRotation: 80,
  },
};

const Drives = () => {
  const dispatch = useDispatch();
  let res = useSelector((state) => state.vendorData);

  useEffect(() => {
    dispatch(vendorVendorDataRequest());
  }, []);
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      data[1][1] = res.data.data.allVendor;
      data[2][1] = res.data.data.vendorInCity;
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

export default Drives;
