import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {useDispatch, useSelector} from "react-redux";
import {collectorEWasteDrivesRequest} from "../../../redux/action/collector/analyticsAction/collectorEWasteDrivesAction";

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
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(false);
  let res = useSelector((state) => state.collectorEWasteDrives);
  useEffect(() => {
    dispatch(collectorEWasteDrivesRequest());
    setValue(true);
  }, []);
  useEffect(() => {
    if (value) {
      data[1][1] = res?.data?.data.EWasteDriveCity;
      data[2][1] = res?.data?.data.EWasteDriveCollector;
    }
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
