import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
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
  chartArea: {width: "65%"},
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
    const tokens = localStorage.getItem("token");
    const email = document.cookie.split("=");
    (async function () {
      try {
        const response = await fetch(
          "http://localhost:8083/collector/analytics/v6",
          {
            method: "GET",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + tokens,
              EMAIL: email[1],
            },
          }
        );
        const res = await response.json();
        data[1][1] = res.data.Temp;
        data[2][1] = res.data.Screens;
        data[3][1] = res.data.Lapms;
        data[4][1] = res.data.LargeEqip;
        data[5][1] = res.data.SmallEquip;
        data[6][1] = res.data.SmallIT;
      } catch (err) {
        console.log(err);
      }
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
