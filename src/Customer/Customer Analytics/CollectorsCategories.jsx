import React, {useEffect} from "react";
import {Chart} from "react-google-charts";

const data = [
  ["Category", "Collectors in your City", " Total Collectors"],
  ["Temperature Exchange Equipment", 1, 1],
  ["Screens and Monitors", 0, 3],
  ["Lamps", 1, 1],
  ["Large equipment", 1, 3],
  ["Small equipment", 0, 1],
  ["Small IT and Telecommunication", 2, 5],
];
const options = {
  chartArea: {width: "70%"},
  hAxis: {
    textStyle: {
      fontSize: 15,
      maxRotation: 80,
      minRotation: 80,
    },
  },
  width: "100%",
  height: "400px",
  colors: ["yellow", "green"],
};
export default function CollectorsCategories() {
  useEffect(() => {
    const tokens = localStorage.getItem("token");
    const email = document.cookie.split("=");
    (async function () {
      try {
        const response = await fetch(
          "http://localhost:8083/customer/analytics/v3",
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
        data[1][1] = res.data.TempCity;
        data[2][1] = res.data.ScreensCity;
        data[3][1] = res.data.LapmsCity;
        data[4][1] = res.data.LargeEqipCity;
        data[5][1] = res.data.SmallEquipCity;
        data[6][1] = res.data.SmallITCity;

        data[1][2] = res.data.TempTotal;
        data[2][2] = res.data.ScreensTotal;
        data[3][2] = res.data.LapmsTotal;
        data[4][2] = res.data.LargeEqipTotal;
        data[5][2] = res.data.SmallEquipTotal;
        data[6][2] = res.data.SmallITTotal;
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return <Chart chartType="LineChart" data={data} options={options} />;
}
