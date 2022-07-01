import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {useDispatch, useSelector} from "react-redux";
import {vendorCategoryRequest} from "../../../redux/action/vendor/analyticsAction/vendorCategoryAction";
import {isEmpty} from "lodash";
export const data = [
  ["category", "quantity"],
  ["Temperature Exchange Equipment", 18],
  ["Screens and Monitors", 16],
  ["Lamps", 16],
  ["Large equipment", 13],
  ["Small equipment", 22],
  ["Small IT and Telecommunication", 12],
];
export const options = {
  backgroundColor: "transparent",
  legend: {position: "right"},
  chartArea: {width: "60%"},
  align: "right",
  scaleType: "decimal",
  textStyle: {
    fontSize: 12,
    maxRotation: 80,
    minRotation: 80,
  },
};

const CollectorCategory = () => {
  const dispatch = useDispatch();
  let res = useSelector((state) => state.vendorCategory);
  useEffect(() => {
    dispatch(vendorCategoryRequest());
  }, []);
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      data[1][1] = res.data.data.TempCity;
      data[2][1] = res.data.data.ScreensCity;
      data[3][1] = res.data.data.LapmsCity;
      data[4][1] = res.data.data.LargeEqipCity;
      data[5][1] = res.data.data.SmallEquipCity;
      data[6][1] = res.data.data.SmallITCity;
    }
  }, [res]);
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default CollectorCategory;
