/*
  @module collectorData
*/
import React, {useEffect} from "react";
import {Chart} from "react-google-charts";
import {connect, useDispatch} from "react-redux";
import {vendorCollectorDataRequest} from "../../../redux/action/vendor/analyticsAction/vendorCollectorDataAction";
import {isEmpty} from "lodash";

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

const CollectorData = ({res}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(vendorCollectorDataRequest());
  }, []);
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      data[1][1] = res.data.data.allCollector;
      data[2][1] = res.data.data.collectorInCity;
    }
  }, [res]);
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.vendorCollectorData,
  };
};

export default connect(mapStateToProps)(CollectorData);
