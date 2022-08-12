/*
  @module revenueChart
*/
import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {useDispatch, connect} from "react-redux";
import {collectorRevenueChartRequest} from "../../../redux/action/collector/analyticsAction/collectorRevenueChartAction";
import {isEmpty} from "lodash";

export const data = [
  ["Category", "Sales"],
  ["Temperature Exchange Equipment", 4000],
  ["Screens and Monitors", 500],
  ["Lamps", 0],
  ["Large equipment", 1980],
  ["Small equipment", 0],
  ["Small IT and Telecommunication", 0],
];
const options = {
  legend: "right",
  chartArea: {width: "65%"},
  colors: ["violet"],
  vAxis: {
    scaleType: "decimal",
    beginAtZero: true,
    title: "Amount (in Rupees)",
  },
  hAxis: {
    title: "Category",
    scaleType: "decimal",
    textStyle: {
      fontSize: 12,
      maxRotation: 80,
      minRotation: 80,
    },
  },
  backgroundColor: "transparent",
  width: "100%",
  height: "400px",
};

const Revenue = ({res}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(collectorRevenueChartRequest());
  }, []);
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      data[1][1] = res.data.data.Temp;
      data[2][1] = res.data.data.Screens;
      data[3][1] = res.data.data.Lapms;
      data[4][1] = res.data.data.LargeEqip;
      data[5][1] = res.data.data.SmallEquip;
      data[6][1] = res.data.data.SmallIT;
    }
  }, [res]);
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.collectorRevenueChart,
  };
};

export default connect(mapStateToProps)(Revenue);
