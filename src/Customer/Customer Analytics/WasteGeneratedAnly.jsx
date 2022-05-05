import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import "../Customer.css";
import api from "../../api";
import { CUSTOMER_ANALYTICS_V1 } from "../../constant/constant";
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

export default function EWaste() {
  useEffect(() => {
    (async function () {
      try {
        const res = await api.get(CUSTOMER_ANALYTICS_V1);

        data[1][1] = res.data.orderInCity;
        data[2][1] = res.data.orderCustomer;
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
