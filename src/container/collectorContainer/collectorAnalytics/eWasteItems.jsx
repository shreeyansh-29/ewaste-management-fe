/*
  @module eWasteItems
*/
import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {connect, useDispatch} from "react-redux";
import {collectorEWasteItemsRequest} from "../../../redux/action/collector/analyticsAction/collectorEWasteItemsAction";
import {isEmpty} from "lodash";

export const data = [
  ["Category", "Requests Accepted", "Items Sold"],
  ["Lamps", 1, 0],
  ["Temperature Exchange Equipment", 1, 1],
  ["Screens and Monitors", 1, 0],

  ["Large equipment", 0, 0],
  ["Small equipment", 0, 0],
  ["Small IT and Telecommunication", 0, 0],
];

const options = {
  legend: "right",
  chartArea: {width: "65%"},
  colors: ["yellow", "green"],
  vAxis: {
    scaleType: "decimal",
    beginAtZero: true,
  },
  hAxis: {
    scaleType: "decimal",
    textStyle: {
      fontSize: 12,
      maxRotation: 80,
      minRotation: 80,
    },
  },
  backgroundColor: "transparent",
  width: "100%",
  height: "800px",
};

const EWasteOrg = ({res}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(collectorEWasteItemsRequest());
  }, []);

  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      data[1][1] = res?.data?.data.TempCollected;
      data[2][1] = res?.data?.data.ScreensCollected;
      data[3][1] = res?.data?.data.LapmsCollected;
      data[4][1] = res?.data?.data.LargeEqipCollected;
      data[5][1] = res?.data?.data.SmallEquipCollected;
      data[6][1] = res?.data?.data.SmallITCollected;
      data[1][2] = res?.data?.data.TempSell;
      data[2][2] = res?.data?.data.ScreensSell;
      data[3][2] = res?.data?.data.LapmsSell;
      data[4][2] = res?.data?.data.LargeEqipSell;
      data[5][2] = res?.data?.data.SmallEquipSell;
      data[6][2] = res?.data?.data.SmallITSell;
    }
  }, []);
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.collectorEWasteItems,
  };
};

export default connect(mapStateToProps)(EWasteOrg);
