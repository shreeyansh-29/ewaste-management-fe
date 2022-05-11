import React, { useEffect } from "react";
import MaterialTable from "material-table";
import api from "../../../core/utilities/httpProvider";
import {} from "@material-ui/icons";

import SearchIcon from "@material-ui/icons/Search";
import { COLLECTOR_SELL_SUMMARY } from "../../constant/constant";
export default function SummarySales() {
  const { useState } = React;

  const [columns] = useState([
    {
      title: "ID",

      field: "id",

      editable: "never",
      cellStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
    },
    {
      title: "Item Name",
      editable: "never",
      field: "itemName",
      cellStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "15px",
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
        fontSize: "15px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
    },
    {
      title: "Available Quantity",
      editable: "never",
      field: "quantity",
      type: "numeric",
      cellStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
    },

    {
      title: "Unit Price",
      editable: "never",
      field: "price",
      type: "currency",
      currencySetting: { currencyCode: "INR" },
      cellStyle: {
        fontSize: "15px",
      },
      headerStyle: {
        fontSize: "15px",
      },
    },
    {
      title: "Total Price",
      editable: "never",
      field: "price",
      type: "currency",
      currencySetting: { currencyCode: "INR" },
      cellStyle: {
        fontSize: "15px",
      },
      headerStyle: {
        fontSize: "15px",
      },
    },
  ]);

  useEffect(() => {
    (async function () {
      try {
        const res = await api.get(COLLECTOR_SELL_SUMMARY);
        
        if (res.status === "success") {
          res.data.map((obj) => {
            obj.id = "IS" + obj.id;
            obj.price = obj.price * obj.quantity;
            if (obj.availableQuantity === "0") {
              obj.status = "Sold";
            }
          });

          setData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const [data, setData] = useState([]);

  return (
    <div>
      <div style={{ padding: "20px 30px 0 30px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            padding: "2px,",
            color: "white",
            marginBottom: "2.5%",
            backgroundColor: " rgb(30, 28, 54)",
            borderRadius: "5px",
          }}
        >
          {" "}
          Sales Summary{" "}
        </h2>
        <MaterialTable
          title=""
          icons={{
            Search: () => <SearchIcon style={{ fill: "white" }} />,
          }}
          columns={columns}
          data={data}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </div>
    </div>
  );
}
