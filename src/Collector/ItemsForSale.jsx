import React from "react";
import MaterialTable from "material-table";
import AddIcon from "@material-ui/icons/AddBox";
import "./Collector.css";
import {toast} from "react-toastify";
toast.configure();
export default function ItemsForSale() {
  const {useState} = React;
  const [status, setStatus] = useState("");
  const [columns] = useState([
    {
      title: "Item Name",
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
      field: "category",

      lookup: {
        Temp: "Temperature exchange equipment (such as air conditioners, freezers)",
        Screens: "Screens, monitors (TVs, laptops)",
        Lapms: "Lamps (LED lamps, for example)",
        LargeEqip: "Large equipment (washing machines, electric stoves)",
        SmallEquip: "Small equipment (microwaves, electric shavers)",
        SmallIT:
          "Small IT and telecommunication equipment (such as mobile phones, printers)",
      },
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
      title: "Quantity",
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
      title: "Price/Item",
      field: "price",
      type: "currency",
      currencySetting: {currencyCode: "INR"},
      cellStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
    },
  ]);
  const handleSubmit = async (e, datas) => {
    e.preventDefault();
    const tokens = localStorage.getItem("token");
    const email = document.cookie.split("=");
    if (
      datas.itemName === "" ||
      datas.price === null ||
      datas.quantity === null ||
      datas.category === undefined
    ) {
      toast.error("Enter all data", {position: toast.POSITION.TOP_RIGHT});
    } else {
      try {
        const response = await fetch("http://localhost:8083/collector/sell", {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tokens,
            EMAIL: email[1],
          },

          body: JSON.stringify({
            itemName: datas.itemName,
            category: datas.category,
            quantity: datas.quantity,
            price: datas.price,
            status: "Available",
          }),
        });
        const res = await response.json();
        toast.success("Item is on sale", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setStatus(res.data.status);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const [data, setData] = useState([]);

  return (
    <div>
      <div style={{padding: "150px 30px 0 30px"}}>
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
          For Sale{" "}
        </h2>
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          icons={{
            Add: () => <AddIcon style={{fill: "#e75480"}} />,
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  setData([...data, newData]);
                  setStatus("");
                  resolve();
                }, 1000);
              }),
          }}
          actions={[
            {
              icon: () => (
                <button
                  className="bttn"
                  disabled={status === "Available" ? true : false}
                >
                  {" "}
                  Sale It{" "}
                </button>
              ),
              onClick: (e, datas) => {
                handleSubmit(e, datas);
              },
            },
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </div>
    </div>
  );
}
