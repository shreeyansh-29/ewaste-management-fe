import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import api from "../../api";
import { COLLECTOR_ANALYTICS_V4 } from "../../constant/constant";
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
  useEffect(() => {
    (async function () {
      try {
        const res = await api.get(COLLECTOR_ANALYTICS_V4);
        data[2][1] = res.data.vendorCity;
        data[1][1] = res.data.vendorAllCity;
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
