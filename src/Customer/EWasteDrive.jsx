import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import {} from "@material-ui/icons";
export default function EWasteDrive() {
  const [columns] = useState([
    {
      title: "S.No",
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
      title: "Organizer",
      field: "organizerName",
      cellStyle: {
        fontSize: "13px",
      },
      headerStyle: {
        fontSize: "13px",
      },
    },
    {
      title: "Address",
      field: "location",
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
  ]);

  useEffect(() => {
    const tokens = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    (async function () {
      try {
        const response = await fetch(
          "http://localhost:8083/customer/viewDrives",
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
  const [data, setData] = useState();
  return (
    <div style={{padding: "150px 30px"}}>
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
        Upcoming Drives{" "}
      </h2>
      <MaterialTable
        align="center"
        columns={columns}
        data={data}
        title=""
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
}
