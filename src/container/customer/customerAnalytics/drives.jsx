import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import api from "../../../core/utilities/httpProvider";
import { CUSTOMER_ANALYTICS_V2 } from "../../constant/constant";
export const data = [
  ["name", "Count", {role: "style"}],
  ["E-Waste Drives Organized", 4, "hotpink"],
  ["E-Waste Drives in your City", 2, "grey"],
];
export const options = {
  chartArea: {width: "50%"},
  align: "center",
  legend: "none",
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

export default function Drives() {
  useEffect(() => {
    (async function () {
      try {
        const res = await api.get(CUSTOMER_ANALYTICS_V2);

        data[1][1] = res.data.eWasteDriveListAll;
        data[2][1] = res.data.eWasteDriveListCity;
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
