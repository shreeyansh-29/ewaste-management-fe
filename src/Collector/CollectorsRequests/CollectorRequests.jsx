import React, { useEffect } from "react";
import MaterialTable from "material-table";
import "../Collector.css";
import {
  COLLECTOR_REQUEST_PENDING,
  TOAST_SUCCESS8,
} from "../../constant/constant";
import api from "../../api";
import Toast from "../../Components/Toast";
export default function CollectorRequests() {
  const { useState } = React;
  var orderid = 0;
  const [data, setData] = useState();
  const [columns] = useState([
    {
      title: "Request Name",
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
        Temp: "Temperature exchange equipment",
        Screens: "Screens, monitors ",
        Lapms: "Lamps ",
        LargeEqip: "Large equipment",
        SmallEquip: "Small equipment",
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
      title: "Quantity",
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
      title: "Date",
      editable: "never",
      field: "scheduleDate",
      type: "date",
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
      title: "Time",
      editable: "never",
      field: "scheduledTime",
      type: "date",
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
      title: "Address",
      field: "address",
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
  ]);

  const handleAccept = async (e, datas) => {
    e.preventDefault();
    orderid = datas.orderId;

    await api.post(
      `http://localhost:8083/collector/request/pending/accept?order=${orderid}`
    );
    Toast.success(TOAST_SUCCESS8,1500);

    setTimeout(() => {
      window.location.href = "/RequestSummary";
    }, 3000);
  };
  const handledate = (res) => {
    res.map((obj) => {
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
  useEffect(() => {
    (async function () {
      const res = await api.get(COLLECTOR_REQUEST_PENDING);
      if (res.status === "success") {
        handledate(res.data);
        setData(res.data);
      }
    })();
  }, []);

  return (
    <div style={{ padding: "150px 30px 0 30px" }}>
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
        Requests{" "}
      </h2>
      <MaterialTable
        align="center"
        columns={columns}
        title=""
        data={data}
        actions={[
          {
            icon: () => <button className="bttn"> Accept </button>,
            onClick: (e, datas) => handleAccept(e, datas),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
          search: false,
        }}
      />
    </div>
  );
}
