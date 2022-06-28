import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {useDispatch, useSelector} from "react-redux";
import {vendorCollectorDataRequest} from "../../../redux/action/vendor/analyticsAction/vendorCollectorDataAction";

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
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(false);
  let res = useSelector((state) => state.vendorCollectorData);
  useEffect(() => {
    dispatch(vendorCollectorDataRequest());
    setValue(true);
  }, []);
  useEffect(() => {
    if (value) {
      data[1][1] = res?.data?.data.allCollector;
      data[2][1] = res?.data?.data.collectorInCity;
    }
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
