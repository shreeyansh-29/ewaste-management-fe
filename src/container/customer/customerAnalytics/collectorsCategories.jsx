/* eslint-disable no-unused-vars */
import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {isEmpty} from "lodash";
import {useDispatch} from "react-redux";
import {customerCollectorCategoriesRequest} from "../../../redux/action/customer/analyticsAction/customerCollectorCategoriesAction";
import {useSelector} from "react-redux";

const data = [
  ["Category", "Collectors in your City", " Total Collectors"],
  ["Temperature Exchange Equipment", 1, 1],
  ["Screens and Monitors", 0, 3],
  ["Lamps", 1, 1],
  ["Large equipment", 1, 3],
  ["Small equipment", 0, 1],
  ["Small IT and Telecommunication", 2, 5],
];
const options = {
  chartArea: {width: "70%"},
  hAxis: {
    textStyle: {
      fontSize: 13,
      maxRotation: 80,
      minRotation: 80,
    },
  },
  width: "100%",
  height: "400px",
  colors: ["yellow", "green"],
};
export default function CollectorsCategories() {
  const dispatch = useDispatch();
  let res = useSelector((state) => state.customerCollectorCategories);

  useEffect(() => {
    dispatch(customerCollectorCategoriesRequest());
  }, []);

  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      data[1][1] = res?.data?.data.TempCity;
      data[2][1] = res?.data?.data.ScreensCity;
      data[3][1] = res?.data?.data.LapmsCity;
      data[4][1] = res?.data?.data.LargeEqipCity;
      data[5][1] = res?.data?.data.SmallEquipCity;
      data[6][1] = res?.data?.data.SmallITCity;

      data[1][2] = res?.data?.data.TempTotal;
      data[2][2] = res?.data?.data.ScreensTotal;
      data[3][2] = res?.data?.data.LapmsTotal;
      data[4][2] = res?.data?.data.LargeEqipTotal;
      data[5][2] = res?.data?.data.SmallEquipTotal;
      data[6][2] = res?.data?.data.SmallITTotal;
    }
  }, [res]);

  return <Chart chartType="LineChart" data={data} options={options} />;
}
