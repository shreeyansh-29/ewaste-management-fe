import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import Edit from "@material-ui/icons/Edit";
import PuchaseData from "./PuchaseData";
import "./vendor.css";
import Popup from ".././Customer/Popup";
import { FaUserCircle } from "react-icons/fa";
import SearchIcon from "@material-ui/icons/Search";
import {
  INVALID_QUANTITY,
  TOAST_ERROR5,
  TOAST_WARN3,
  VALID_QUANTITY,
  VENDOR_VIEW_ITEMS,
  VENDOR_ACCEPT_ITEMS
} from "../constant/constant";
import api from "../api";
import Toast from "../Components/Toast";
export const ProfileIcon = FaUserCircle;

export default function Sales() {
  const { useState } = React;
  const [details, setDetails] = useState([]);
  const [detail, setdetail] = useState();
  const [isopen2, setopen2] = useState(false);
  const [item, setItem] = useState();
  const [isopen, setopen] = useState(false);
  const [quantity, setQuantity] = useState();
  const [columns] = useState([
    {
      title: "Seller Profile",
      editable: "never",
      render: (rowData) => (
        <button
          style={{
            background: "white",
            border: "1px solid white",
            fontSize: "15px",
          }}
          onClick={() => profile(rowData)}
        >
          {" "}
          <ProfileIcon style={{ color: "#e75480" }} />
        </button>
      ),
      filtering: false,
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
      title: "Item Name",
      field: "itemName",
      editable: "never",
      filtering: false,
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
      field: "category",
      editable: "never",
      lookup: {
        Temp: "Temperature exchange equipment",
        Screens: "Screens, monitors ",
        Lapms: "Lamps ",
        LargeEqip: "Large equipment ",
        SmallEquip: "Small equipment ",
        SmallIT: "Small IT and telecommunication equipment ",
      },
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
      editable: "never",
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
      title: "Unit price",
      field: "price",
      editable: "never",
      type: "currency",
      currencySetting: { currencyCode: "INR" },
      filtering: false,
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
      title: "Purchase Quantity",
      field: "quantities",
      type: "numeric",
      initialEditValue: 0,

      validate: (rowData) =>
        parseInt(rowData.quantities) > 0 ||
        rowData.quantities === null ||
        rowData.quantities === undefined
          ? ""
          : VALID_QUANTITY,
      filtering: false,
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
      field: "purchaseprice",
      type: "currency",
      currencySetting: { currencyCode: "INR" },
      initialEditValue: 0,
      editable: "never",

      filtering: false,
      cellStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
    },
  ]);
  const profile = (e) => {
    if (e.id === null) {
      Toast.warn(TOAST_WARN3)
      
    } else {
      const id = e.id;
      setdetail(id);
    }
    togglepop();
  };

  useEffect(() => {
    (async function () {
      const res = await api.get(VENDOR_VIEW_ITEMS);

      if (res.status === "success") {
        res.data.map((obj) => {
          if (parseInt(obj.quantity) > parseInt(obj.availableQuantity)) {
            obj.quantity = obj.availableQuantity;
          }
        });
      }
      setData(res.data);
    })();
  }, []);

  const [data, setData] = useState([]);
  const CalTotal = (index, newData) => {
    if (parseInt(newData.quantities) > data[index].availableQuantity) {
      Toast.error(INVALID_QUANTITY);

      newData.quantities = null;
    } else {
      newData.purchaseprice = newData.price * newData.quantities;
      newData.quantities = newData.quantities.toString();

      var dataUpdate = [...data];
      dataUpdate[index] = newData;
      setData([...dataUpdate]);
    }
  };
  const handleBuy = async (e, datas) => {
    e.preventDefault();
    if (datas.quantities === 0 || datas.quantities === undefined) {
      Toast.error(TOAST_ERROR5);

      setopen(false);
    } else {
      setQuantity(datas.quantities);
      setItem(datas.itemName);

      const data = {
        id: datas.id,
        quantity: datas.quantities,
        price: datas.purchaseprice,
        date: new Date(),
      };
      const res = await api.post(VENDOR_ACCEPT_ITEMS, data);

      setDetails(res.data);
    }
  };
  const togglePop = () => {
    setopen(!isopen);
  };
  const togglepop = () => {
    setopen2(!isopen2);
  };
  return (
    <div style={{ padding: "150px 30px   " }}>
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
        Purchase Items{" "}
      </h2>
      <MaterialTable
        align="center"
        title=""
        columns={columns}
        data={data}
        icons={{
          Edit: () => <Edit style={{ color: "black", alignContent: "left" }} />,

          Search: () => <SearchIcon style={{ fill: "white" }} />,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                const indexs = oldData.tableData.id;
                const dataUpdate = [...data];

                dataUpdate[indexs] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
              const index = oldData.tableData.id;
              CalTotal(index, newData);
            }),
        }}
        actions={[
          {
            icon: () => (
              <button className="bttn" onClick={togglePop}>
                Purchase
              </button>
            ),
            onClick: (e, datas) => handleBuy(e, datas),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />

      <Link to={{ pathname: "/MyOrders", data: [details] }}></Link>
      <div>{isopen && <PuchaseData quantity={quantity} item={item} />}</div>
      <div>
        {isopen2 && detail != null && (
          <Popup handleClose={togglepop} cont={detail} />
        )}
      </div>
    </div>
  );
}
