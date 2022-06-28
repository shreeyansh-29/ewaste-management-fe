import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {useDispatch, useSelector} from "react-redux";
import {collectorUsersRequest} from "../../../redux/action/collector/analyticsAction/collectorUsersAction";
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
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(false);
  let res = useSelector((state) => state.collectorUsers);
  useEffect(() => {
    dispatch(collectorUsersRequest());
    setValue(true);
  }, []);
  useEffect(() => {
    if (value) {
      data[1][1] = res?.data?.data.customerAllCity;
      data[2][1] = res?.data?.data.customerCity;
    }
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
