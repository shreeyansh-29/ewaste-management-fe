import React from "react";
import MaterialTable from "material-table";
import {} from "@material-ui/icons";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import AddIcon from "@material-ui/icons/AddBox";
import "../Collector.css";
import { toast } from "react-toastify";
toast.configure();
export default function OrganizeDrive() {
  const { useState } = React;
  var maxDate = new Date();

  const [status, setStatus] = useState("");
  maxDate.setMonth(maxDate.getMonth() + 6);

  const [columns] = useState([
    {
      title: "Drive Name",
      field: "name",
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
      title: "Description",
      field: "description",

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
      title: "Categories Accepted",
      field: "itemsAcc",
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
      field: "date",
      type: "date",

      editComponent: ({ value, onChange }) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            format="dd/MM/yyyy"
            clearable
            value={value}
            onChange={onChange}
            minDate={new Date().toDateString()}
            maxDate={maxDate}
          />
        </MuiPickersUtilsProvider>
      ),

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
      field: "time",

      lookup: {
        10: "8:00-16:00",
        12: "9:00-17:00",
        14: "10:00-18:00",
        16: "11:00-19:00",
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
  ]);
  const dateformat = (datas) => {
    var scheduledate = datas.date.toString().split(" ");
    if (scheduledate[1] === "Jan") {
      scheduledate[1] = "01";
    } else if (scheduledate[1] === "Feb") {
      scheduledate[1] = "02";
    } else if (scheduledate[1] === "Mar") {
      scheduledate[1] = "03";
    } else if (scheduledate[1] === "Apr") {
      scheduledate[1] = "04";
    } else if (scheduledate[1] === "May") {
      scheduledate[1] = "05";
    } else if (scheduledate[1] === "Jun") {
      scheduledate[1] = "06";
    } else if (scheduledate[1] === "Jul") {
      scheduledate[1] = "07";
    } else if (scheduledate[1] === "Aug") {
      scheduledate[1] = "08";
    } else if (scheduledate[1] === "Sep") {
      scheduledate[1] = "09";
    } else if (scheduledate[1] === "Oct") {
      scheduledate[1] = "10";
    } else if (scheduledate[1] === "Nov") {
      scheduledate[1] = "11";
    } else if (scheduledate[1] === "Dec") {
      scheduledate[1] = "12";
    }
    scheduledate = scheduledate[3] + "-" + scheduledate[1] + "-" + scheduledate[2];
    return scheduledate;
  };
  const handleDone = async (e, datas) => {
    console.log(e);

    if (
      datas.itemsAcc === "" ||
      datas.address === "" ||
      datas.name === "" ||
      datas.date === "" ||
      datas.time === "" ||
      datas.description === undefined
    ) {
      toast.error("Enter all data", { position: toast.POSITION.TOP_RIGHT });
    } else {
      const tokens = localStorage.getItem("token");
      const email = localStorage.getItem("email");
      datas.date = dateformat(datas);
      try {
        const response = await fetch(
          "http://localhost:8083/collector/drive/organize",
          {
            method: "POST",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + tokens,
              EMAIL: email,
            },
            body: JSON.stringify({
              driveName: datas.name,
              description: datas.description,

              eWasteCategoryAccepted: [
                {
                  categoryAccepted: datas.itemsAcc,
                },
              ],
              date: datas.date,
              time: datas.time,
              location: datas.address,
              status: "Upcoming",
            }),
          }
        );
        const res = await response.json();
        toast.success(" Drive organized successfully", {
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
          Organize an E-Waste Drive{" "}
        </h2>
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          icons={{
            Add: () => <AddIcon style={{ fill: "#e75480" }} />,
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
                  disabled={status === "Upcoming" ? true : false}
                >
                  Done
                </button>
              ),
              onClick: (event, rowData) => handleDone(event, rowData),
            },
          ]}
          options={{
            actionsColumnIndex: -1,
            search: false,
          }}
        />
      </div>
    </div>
  );
}
