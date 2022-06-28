import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {useDispatch, useSelector} from "react-redux";
import {vendorVendorDataRequest} from "../../../redux/action/vendor/analyticsAction/vendorVendorDataAction";
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

export default function Drives() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(false);
  let res = useSelector((state) => state.vendorData);
  useEffect(() => {
    dispatch(vendorVendorDataRequest());
    setValue(true);
  }, []);
  useEffect(() => {
    if (value) {
      data[1][1] = res?.data?.data.allVendor;
      data[2][1] = res?.data?.data.vendorInCity;
    }
  }, []);
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
