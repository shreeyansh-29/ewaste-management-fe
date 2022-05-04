import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {apicall} from "../../Utils/Api";
export const data = [
  ["Category", "Requests Accepted", "Items Sold"],
  ["Temperature Exchange Equipment", 1, 1],
  ["Screens and Monitors", 1, 0],
  ["Lamps", 1, 0],
  ["Large equipment", 0, 0],
  ["Small equipment", 0, 0],
  ["Small IT and Telecommunication", 0, 0],
];

const options = {
  legend: "right",
  chartArea: {width: "65%"},
  colors: ["yellow", "green"],
  vAxis: {
    scaleType: "decimal",
    beginAtZero: true,
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

export default function EWasteOrg() {
  useEffect(() => {
    (async function () {
      try {
        const res = await apicall("ewaste");
        data[1][1] = res.data.TempCollected;
        data[2][1] = res.data.ScreensCollected;
        data[3][1] = res.data.LapmsCollected;
        data[4][1] = res.data.LargeEqipCollected;
        data[5][1] = res.data.SmallEquipCollected;
        data[6][1] = res.data.SmallITCollected;
        data[1][2] = res.data.TempSell;
        data[2][2] = res.data.ScreensSell;
        data[3][2] = res.data.LapmsSell;
        data[4][2] = res.data.LargeEqipSell;
        data[5][2] = res.data.SmallEquipSell;
        data[6][2] = res.data.SmallITSell;
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
