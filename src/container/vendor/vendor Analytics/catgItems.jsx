import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {useDispatch} from "react-redux";
import {vendorCatgItemsRequest} from "../../../redux/action/vendor/analyticsAction/vendorCatgItemsAction";
import {useSelector} from "react-redux";
import {isEmpty} from "lodash";
const data = [
  ["Category", "Items Available", "Purchased Items"],
  ["Temperature Exchange Equipment", 5, 3],
  ["Screens and Monitors", 2, 2],
  ["Lamps", 2, 2],
  ["Large equipment", 6, 5],
  ["Small equipment", 3, 1],
  ["Small IT and Telecommunication", 2, 1],
];
const options = {
  legend: "right",
  chartArea: {width: "70%"},
  backgroundColor: "transparent",
  hAxis: {
    textStyle: {
      fontSize: 13,
      maxRotation: 80,
      minRotation: 80,
    },
  },

  colors: ["yellow", "green"],
  width: "100%",
  height: "800px",
};

const Catg_Items = () => {
  const dispatch = useDispatch();

  let res = useSelector((state) => state.vendorCatgItems);
  useEffect(() => {
    dispatch(vendorCatgItemsRequest());
  }, []);
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      data[1][1] = res.data.data.TempCollectorSale;
      data[2][1] = res.data.data.ScreensCollectorSale;
      data[3][1] = res.data.data.LapmsCollectorSale;
      data[4][1] = res.data.data.LargeEqipCollectorSale;
      data[5][1] = res.data.data.SmallEquipCollectorSale;
      data[6][1] = res.data.data.SmallITCollectorSale;
      data[1][2] = res.data.data.TempVendor;
      data[2][2] = res.data.data.ScreensVendor;
      data[3][2] = res.data.data.LapmsVendor;
      data[4][2] = res.data.data.LargeEqipVendor;
      data[5][2] = res.data.data.SmallEquipVendor;
      data[6][2] = res.data.data.SmallITVendor;
    }
  }, [res]);
  return (
    <Chart
      chartType="ColumnChart"
      data={data}
      options={options}
      width="100%"
      height="500px"
    />
  );
};

export default Catg_Items;
