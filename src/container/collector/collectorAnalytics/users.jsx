import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import api from "../../../core/utilities/httpProvider";
import { COLLECTOR_ANALYTICS_V5 } from "../../constant/constant";
export const data = [
  ["name", "Registered Customers", {role: "style"}],
  ["Customers in your Country  ", 5, "hotpink"],
  ["Customers in your City  ", 3, "grey"],
];
export const options = {
  legend: {position: "none"},

  chartArea: {width: "45%"},

  axes: {
    x: {
      0: {scaleType: "decimal", label: "Registered Customer"},
    },
  },
  textStyle: {
    fontSize: 12,
    maxRotation: 80,
    minRotation: 80,
  },
};

export default function Users() {
  useEffect(() => {
    (async function () {
      try {
        const res = await api.get(COLLECTOR_ANALYTICS_V5);
        data[1][1] = res.data.customerAllCity;
        data[2][1] = res.data.customerCity;
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
      backgroundcolor="transparent"
    />
  );
}
