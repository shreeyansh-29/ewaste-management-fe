import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {useDispatch, useSelector} from "react-redux";
import {collectorVendorRequest} from "../../../redux/action/collector/analyticsAction/collectorVendorAction";

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
export default function Data() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(false);
  let res = useSelector((state) => state.collectorVendor);
  console.log(res);
  useEffect(() => {
    dispatch(collectorVendorRequest());
    setValue(true);
  }, []);
  useEffect(() => {
    if (value) {
      data[2][1] = res.data.data.vendorCity;
      data[1][1] = res.data.data.vendorAllCity;
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
