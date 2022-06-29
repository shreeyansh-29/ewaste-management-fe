import React, {useEffect} from "react";
import MaterialTable from "material-table";
import {collectorSoldRequest} from "../../../redux/action/collector/collectorSoldAction/collectorSoldAction";
import {} from "@material-ui/icons";
import {isEmpty} from "lodash";
import SearchIcon from "@material-ui/icons/Search";

import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
export default function SoldItems() {
  const {useState} = React;
  const dispatch = useDispatch();

  let res = useSelector((state) => state.collectorSold);
  console.log(res);
  const [columns] = useState([
    {
      title: "ID",
      field: "id",
      editable: "never",
      cellStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
    },
    {
      title: "Item Name",
      editable: "never",
      field: "itemName",
      cellStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
    },
    {
      title: "Category",
      editable: "never",
      field: "category",
      lookup: {
        Temp: "Temperature exchange equipment ",
        Screens: "Screens, monitors ",
        Lapms: "Lamps ",
        LargeEqip: "Large equipment ",
        SmallEquip: "Small equipment ",
        SmallIT: "Small IT and telecommunication equipment ",
      },
      initialEditValue: "initial edit value",
      cellStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
    },
    {
      title: " Sold Quantity",
      editable: "never",
      field: "quantity",
      type: "numeric",
      cellStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
    },
    {
      title: "Total Price",
      editable: "never",
      field: "price",
      type: "currency",
      currencySetting: {currencyCode: "INR"},
      cellStyle: {
        fontSize: "13px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "13px",
        textAlign: "center",
      },
    },
  ]);

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
        columns={columns}
        data={data}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
}
