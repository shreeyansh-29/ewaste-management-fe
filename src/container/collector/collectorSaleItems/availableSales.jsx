import React, {useEffect} from "react";
import MaterialTable from "material-table";
import {useDispatch, useSelector} from "react-redux";
import {} from "@material-ui/icons";
import {collectorAvailableRequest} from "../../../redux/action/collector/collectorAvailableAction/collectorAvailableAction";
import SearchIcon from "@material-ui/icons/Search";
import {isEmpty} from "lodash";

const AvailableSales = () => {
  const {useState} = React;
  const dispatch = useDispatch();
  let res = useSelector((state) => state.collectorAvailable);
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
        textAlign: "right",
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
      title: "Available Quantity",
      field: "availableQuantity",
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
      title: "Unit Price",
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
    {
      title: "Total Price",
      editable: "never",
      field: "Totalprice",
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
        columns={columns}
        data={data}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
};

export default AvailableSales;
