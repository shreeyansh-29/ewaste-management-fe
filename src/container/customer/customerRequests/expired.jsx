import React, {useEffect} from "react";
import MaterialTable from "material-table";
import "../customer.css";
import SearchIcon from "@material-ui/icons/Search";
import {toast} from "react-toastify";

toast.configure();
export default function Completed() {
  const {useState} = React;

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
      title: "Request Name",
      field: "itemName",
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
      title: "Category",
      field: "category",
      editable: "never",
      lookup: {
        Temp: "Temperature exchange equipment ",
        Screens: "Screens, monitors ",
        Lapms: "Lamps ",
        LargeEqip: "Large equipment",
        SmallEquip: "Small equipment ",
        SmallIT:
          "Small IT and telecommunication equipment (such as mobile phones, printers)",
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
      title: "Quantity",
      field: "quantity",
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
      title: "Request Type",
      field: "requestType",
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
      title: "Date",
      field: "scheduledDate",
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
      title: "Time",
      field: "scheduledTime",
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
  ]);
  const handledate = (res) => {
    res.data.map((obj) => {
      if (obj.requestType === "PickUp") {
        if (obj.scheduledTime === "10") {
          obj.scheduledTime = " 10:00-12:00";
        } else if (obj.scheduledTime === "12") {
          obj.scheduledTime = " 12:00-14:00";
        } else if (obj.scheduledTime === "14") {
          obj.scheduledTime = " 14:00-16:00";
        } else if (obj.scheduledTime === "16") {
          obj.scheduledTime = " 16:00-18:00";
        }
      }
    });
  };
  const handledata = (res) => {
    handledate(res);
    res.data.map((obj) => {
      if (obj.scheduledDate !== null) {
        const date = obj.scheduledDate.split("T");
        obj.scheduledDate = date[0];
      }
      if (obj.requestType === "PickUp") {
        obj.id = "CP" + obj.id;
      }
      if (obj.requestType === "DropOff") {
        obj.id = "CD" + obj.id;
      }
      if (obj.requestType === "DropOff" && obj.status === "pending") {
        obj.status = "Scheduled";
      }
      if (obj.requestType === "PickUp" && obj.status === "pending") {
        obj.status = "Pending";
      }
    });
  };
  useEffect(() => {
    const tokens = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    (async function () {
      try {
        const response = await fetch(
          "http://localhost:8083/customer/request/all",
          {
            method: "GET",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + tokens,
              EMAIL: email,
            },
          }
        );
        const res = await response.json();
        if (res.status === "success") {
          handledata(res);
          setData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const [data, setData] = useState();

  return (
    <div>
      <div>
        <div style={{padding: " 10px 30px"}}>
         
          <MaterialTable
            align="center"
            title=""
            columns={columns}
            data={data}
            icons={{
              Search: () => <SearchIcon style={{fill: "white"}} />,
            }}
                      
            options={{
              actionsColumnIndex: -1,
            }}
          />
        </div>
      </div>
    </div>
  );
}