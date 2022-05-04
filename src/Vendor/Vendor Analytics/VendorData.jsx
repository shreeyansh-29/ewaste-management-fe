import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {apicall} from "../../Utils/Api";
export const data = [
  ["name", "Count", {role: "style"}],
  ["Total Vendors", 56, "lightblue"],
  ["Vendors in your City", 13, "yellowgreen"],
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
  useEffect(() => {
    (async function () {
      try {
        const res = await apicall("vendordata");
        data[1][1] = res.data.allVendor;
        data[2][1] = res.data.vendorInCity;
      } catch (err) {
        console.log(err);
      }
    })();
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
