import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import { apicall} from "../../utils/Api";
export const data = [
  ["name", "Count", {role: "style"}],
  ["Total Collectors", 56, "blue"],
  ["Collectors in your City", 13, "orange"],
];
export const options = {
  chartArea: {width: "50%"},
  align: "center",
  legend: "none",
  scaleType: "decimal",
  textStyle: {
    fontSize: 12,
    maxRotation: 80,
    minRotation: 80,
  },
};
export default function CollectorData() {
  useEffect(() => {
    (async function () {
      try {
        const res = await apicall("collectordata");
        data[1][1] = res.data.allCollector;
        data[2][1] = res.data.collectorInCity;
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
