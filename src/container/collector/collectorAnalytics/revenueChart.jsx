import React, { useEffect } from "react";
import { Chart } from "react-google-charts";

import api from "../../../core/utilities/httpProvider";
import { COLLECTOR_ANALYTICS_V6 } from "../../constant/constant";
export const data = [
  ["Category", "Sales"],
  ["Temperature Exchange Equipment", 4000],
  ["Screens and Monitors", 500],
  ["Lamps", 0],
  ["Large equipment", 1980],
  ["Small equipment", 0],
  ["Small IT and Telecommunication", 0],
];
const options = {
  legend: "right",
  chartArea: { width: "65%" },
  colors: ["violet"],
  vAxis: {
    scaleType: "decimal",
    beginAtZero: true,
    title: "Amount (in Rupees)",
  },
  hAxis: {
    title: "Category",
    scaleType: "decimal",
    textStyle: {
      fontSize: 12,
      maxRotation: 80,
      minRotation: 80,
    },
  },
  backgroundColor: "transparent",
  width: "100%",
  height: "400px",
};

export default function Revenue() {
  useEffect(() => {
    (async function () {
      const res = await api.get(COLLECTOR_ANALYTICS_V6);

      data[1][1] = res.data.Temp;
      data[2][1] = res.data.Screens;
      data[3][1] = res.data.Lapms;
      data[4][1] = res.data.LargeEqip;
      data[5][1] = res.data.SmallEquip;
      data[6][1] = res.data.SmallIT;
    })();
  }, []);
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
