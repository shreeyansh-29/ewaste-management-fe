import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {apicall} from "../../utils/Api";
const data = [
  ["Category", "Items Available", "Purchased Items"],
  ["Lamps", 16, 2],
  ["Temperature Equipment", 18, 7],
  ["Screens and Monitors", 16, 6],
  
  ["Large equipment", 13, 5],
  ["Small equipment", 22, 12],
  ["Small IT and Telecommunication", 12, 4],
];
const options = {
  legend: "right",
  chartArea: {width: "70%"},
  backgroundColor: "transparent",
  hAxis: {
    textStyle: {
      fontSize: 10,
      maxRotation: 80,
      minRotation: 80
    },
  },

  colors: ["yellow", "green"],
  width: "100%",
  height: "800px",
};

export default function Catg_Items() {
  useEffect(() => {
    (async function () {
      try {
        const res = await apicall("items");
        data[2][1] = res.data.TempCollectorSale;
        data[3][1] = res.data.ScreensCollectorSale;
        data[1][1] = res.data.LapmsCollectorSale;
        data[4][1] = res.data.LargeEqipCollectorSale;
        data[5][1] = res.data.SmallEquipCollectorSale;
        data[6][1] = res.data.SmallITCollectorSale;
        data[2][2] = res.data.TempVendor;
        data[3][2] = res.data.ScreensVendor;
        data[1][2] = res.data.LapmsVendor;
        data[4][2] = res.data.LargeEqipVendor;
        data[5][2] = res.data.SmallEquipVendor;
        data[6][2] = res.data.SmallITVendor;
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Chart
      chartType="ColumnChart"
      data={data}
      options={options}
      width="100%"
      height="500px"
    />
  );
}
