/*
  @module soldItems
*/
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import {collectorSoldRequest} from "../../../redux/action/collector/collectorSoldAction/collectorSoldAction";
import {isEmpty} from "lodash";
import SearchIcon from "@material-ui/icons/Search";
import {soldItemsColumns} from "./soldItemsColumns";
import {useDispatch, connect} from "react-redux";
import "./collectorSales.css";

const SoldItems = ({res}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
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

  return (
    <div>
      <MaterialTable
        title=""
        icons={{
          Search: () => <SearchIcon className="sold-searchbtn" />,
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
