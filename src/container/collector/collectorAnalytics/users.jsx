import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {useDispatch, useSelector} from "react-redux";
import {collectorUsersRequest} from "../../../redux/action/collector/analyticsAction/collectorUsersAction";
import {isEmpty} from "lodash";
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

const CustomerData = () => {
  const dispatch = useDispatch();
  let res = useSelector((state) => state.collectorUsers);

  useEffect(() => {
    dispatch(collectorUsersRequest());
  }, []);
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      data[1][1] = res?.data?.data.customerAllCity;
      data[2][1] = res?.data?.data.customerCity;
    }
  }, [res]);

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
};
export default CustomerData;
