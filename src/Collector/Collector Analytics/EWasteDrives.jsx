import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import api from "../../api";
import { COLLECTOR_ANALYTICS_V1 } from "../../constant/constant";
export const data = [
  ["name", "Organized", {role: "style"}],
  ["E-Waste Drives in the City", 4, "blue"],
  ["E-Waste Drives you organized", 3, "orange"],
];
export const options = {
  legend: {position: "none"},

  chartArea: {width: "40%"},

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

export default function EWasteDrives() {
  useEffect(() => {
    (async function () {
      try {
        const res = await api.get(COLLECTOR_ANALYTICS_V1);
        
        data[1][1] = res.data.EWasteDriveCity;
        data[2][1] = res.data.EWasteDriveCollector;
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
  );
}
