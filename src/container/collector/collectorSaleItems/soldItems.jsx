/*
  @module soldItems
*/
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import {collectorSoldRequest} from "../../../redux/action/collector/collectorSoldAction/collectorSoldAction";
import {} from "@material-ui/icons";
import {isEmpty} from "lodash";
import SearchIcon from "@material-ui/icons/Search";
import {soldItemsColumns} from "./soldItemsColumns";
import {useDispatch, connect} from "react-redux";

const SoldItems = ({res}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      res.data.map((obj) => {
        obj.id = "IS" + obj.id;
      });

      setData(res.data);
    }
  }, [res]);

  useEffect(() => {
    dispatch(collectorSoldRequest());
  }, []);

  const [data, setData] = useState([]);

  return (
    <div>
      <MaterialTable
        title=""
        icons={{
          Search: () => <SearchIcon style={{fill: "white"}} />,
        }}
        columns={soldItemsColumns}
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
    res: state.collectorSold,
  };
};

export default connect(mapStateToProps)(SoldItems);
