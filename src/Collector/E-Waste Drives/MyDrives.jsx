import React, { useEffect } from "react";
import MaterialTable from "material-table";

export default function MyDrives() {
  const { useState } = React;

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
      title: "Drive Name",
      field: "driveName",
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
      title: "Description",
      field: "description",
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
      title: "Items Accepted",
      field: "eWasteCategoryAccepted[0].categoryAccepted",
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
      title: "Address",
      field: "location",
      editable: "never",
      cellStyle: {
        fontSize: "13px",
      },
      headerStyle: {
        fontSize: "13px",
      },
    },
    {
      title: "Date",
      field: "date",
      editable: "never",
      type: "date",
      cellStyle: {
        fontSize: "13px",
      },
      headerStyle: {
        fontSize: "13px",
      },
    },
    {
      title: "Time",
      field: "time",
      editable: "never",
      lookup: {
        10: "8:00-16:00",
        12: "9:00-17:00",
        14: "10:00-18:00",
        16: "11:00-19:00",
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
      title: "Status",
      field: "status",
      lookup: {
        Upcoming: "Upcoming",
        Cancelled: "Cancelled",
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
  ]);
  const callApi = (newData) => {
    const tokens = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    (async function () {
      try {
        const response = await fetch(
          `http://localhost:8083/collector/drive/myDrive/edit?id=${newData.id}&status=${newData.status}`,
          {
            method: "PUT",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + tokens,
              EMAIL: email,
            },
          }
        );
        const res = await response.json();
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    })();
  };

  useEffect(() => {
    const tokens = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    (async function () {
      try {
        const response = await fetch(
          "http://localhost:8083/collector/drive/myDrive",
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
          res.data.map((obj) => {
            obj.id = "DR" + obj.id;
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
        My E-Waste Drives{" "}
      </h2>
      <MaterialTable
        title=""
        columns={columns}
        data={data}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                callApi(newData);
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
}
