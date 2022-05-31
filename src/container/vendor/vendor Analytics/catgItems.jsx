import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import { VENDOR_ANALYTICS_V2 } from "../../constant/constant";
import api from "../../../core/utilities/httpProvider";
const data = [
  ["Category", "Items Available", "Purchased Items"],
  ["Temperature Exchange Equipment", 5, 3],
  ["Screens and Monitors", 2, 2],
  ["Lamps", 2, 2],
  ["Large equipment", 6, 5],
  ["Small equipment", 3, 1],
  ["Small IT and Telecommunication", 2, 1],
];
const options = {
  legend: "right",
  chartArea: { width: "70%" },
  backgroundColor: "transparent",
  hAxis: {
    textStyle: {
      fontSize: 13,
      maxRotation: 80,
      minRotation: 80,
    },
  },

  colors: ["yellow", "green"],
  width: "100%",
  height: "800px",
};
const setData = (res) => {
  data[1][1] = res.data.TempCollectorSale;
  data[2][1] = res.data.ScreensCollectorSale;
  data[3][1] = res.data.LapmsCollectorSale;
  data[4][1] = res.data.LargeEqipCollectorSale;
  data[5][1] = res.data.SmallEquipCollectorSale;
  data[6][1] = res.data.SmallITCollectorSale;
  data[1][2] = res.data.TempVendor;
  data[2][2] = res.data.ScreensVendor;
  data[3][2] = res.data.LapmsVendor;
  data[4][2] = res.data.LargeEqipVendor;
  data[5][2] = res.data.SmallEquipVendor;
  data[6][2] = res.data.SmallITVendor;
};
export default function Catg_Items() {
  useEffect(() => {
    (async function () {
      try {
        const res = await api.get(VENDOR_ANALYTICS_V2);
        setData(res);
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
