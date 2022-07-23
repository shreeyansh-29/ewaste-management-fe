/*
  @module availableSales
*/
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import {connect, useDispatch} from "react-redux";
import {} from "@material-ui/icons";
import {collectorAvailableRequest} from "../../../redux/action/collector/collectorAvailableAction/collectorAvailableAction";
import SearchIcon from "@material-ui/icons/Search";
import {isEmpty} from "lodash";
import {availableSalesColumns} from "./availableSalesColumns";

const AvailableSales = ({res}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      res.data.map((obj) => {
        obj.id = "IS" + obj.id;
        obj.Totalprice = obj.price * obj.availableQuantity;
      });

      setData(res.data);
    }
  }, [res]);

  useEffect(() => {
    dispatch(collectorAvailableRequest());
  }, []);

  const [data, setData] = useState([]);

  return (
    <div>
      <MaterialTable
        title=""
        icons={{
          Search: () => <SearchIcon style={{fill: "white"}} />,
        }}
        columns={availableSalesColumns}
        data={data}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.collectorAvailable?.data,
  };
};

export default connect(mapStateToProps)(AvailableSales);
