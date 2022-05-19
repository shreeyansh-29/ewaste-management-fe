/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MaterialTable from "material-table";
import {} from "@material-ui/icons";
import "../Customer.css";
import AddIcon from "@material-ui/icons/AddBox";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import api from "../../../core/utilities/httpProvider";
import "react-toastify/dist/ReactToastify.css";
import DateFnsUtils from "@date-io/date-fns";
import {
  CUSTOMER_PICKUP,
  TOAST_ERROR4,
  TOAST_SUCCESS3,
  TOAST_WARN1,
} from "../../constant/constant";
import Toast from "../../components/toast";
export default function PickUp() {
  const { useState } = React;
  const [expanded, setExpanded] = useState(false);
  const [collectors, setCollectors] = useState();
  const [isEditable, setEditable] = useState(true);
  const [disable, setDisable] = useState(false);
  var maxDate = new Date();

  maxDate.setMonth(maxDate.getMonth() + 6);

  const [columns] = useState([
    {
      title: "Item Name",
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
      type: "numeric",
      field: "quantity",

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
            id="date-picker-dialog"
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
        10: "10:00 -12:00",
        12: "12:00 -14:00",
        14: "14:00 -16:00",
        16: "16:00 -18:00",
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

  const [data, setData] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisable(true);
    var date = data[0].date.toString().split(" ");
    if (date[1] === "Jan") {
      date[1] = "01";
    } else if (date[1] === "Feb") {
      date[1] = "02";
    } else if (date[1] === "Mar") {
      date[1] = "03";
    } else if (date[1] === "Apr") {
      date[1] = "04";
    } else if (date[1] === "May") {
      date[1] = "05";
    } else if (date[1] === "Jun") {
      date[1] = "06";
    } else if (date[1] === "Jul") {
      date[1] = "07";
    } else if (date[1] === "Aug") {
      date[1] = "08";
    } else if (date[1] === "Sep") {
      date[1] = "09";
    } else if (date[1] === "Oct") {
      date[1] = "10";
    } else if (date[1] === "Nov") {
      date[1] = "11";
    } else if (date[1] === "Dec") {
      date[1] = "12";
    }
    date = date[3] + "-" + date[1] + "-" + date[2];
    data[0].date = date;
    const body = {
      category: data[0].category,
      itemName: data[0].name,
      quantity: data[0].quantity,

      scheduledDate: data[0].date,
      scheduledTime: data[0].time,
    };
    const res = await api.post(CUSTOMER_PICKUP, body);
    console.log(res);

    if (res.status === 200) {
      Toast.success(TOAST_SUCCESS3);
    }
  };
  const handleClick = async (event) => {
    event.preventDefault();

    if (
      data[0].category === undefined ||
      data[0].name === "" ||
      data[0].quantity === null ||
      data[0].date === undefined ||
      data[0].time === undefined
    ) {
      Toast.error(TOAST_ERROR4);
    } else if (
      data[0].quantity === 0 ||
      data[0].quantity > 20 ||
      data[0].quantity < 0
    ) {
      Toast.warn(TOAST_WARN1);
      
    } else {
      const res = await api.get(
        `http://localhost:8083/customer/request/pickUp/viewCollectors?category=${data[0].category}`
      );

      setCollectors(res);
      setExpanded(true);
    }
  };

  return (
    <div>
      <div style={{ padding: "150px 30px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            padding: "2px",
            marginBottom: "2.5%",
            color: "white",
            backgroundColor: " rgb(30, 28, 54)",
            borderRadius: "5px",
          }}
        >
          {" "}
          Pick-Up Requests{" "}
        </h2>

        <MaterialTable
          title=""
          columns={columns}
          data={data}
          icons={{
            Add: () => <AddIcon style={{ fill: "#e75480" }} />,
          }}
          editable={{
            onRowAdd: isEditable
              ? (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    setData([...data, newData]);
                    setEditable(false);
                    resolve();
                  }, 1000);
                })
              : null,
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
                  resolve();
                }, 1000);
              }),
          }}
          options={{
            pageSize: 1,
            actionsColumnIndex: -1,
            addRowPosition: "first",
            search: false,
          }}
        />

        <div className="a">
          {" "}
          <a href="#" onClick={handleClick}>
            Find Collectors
          </a>
        </div>

        {expanded && parseInt(collectors) === 0 ? (
          <div className="textStyle">
            <h4>
              No collectors found in your area. Please try using a Drop Off
              Request.{" "}
            </h4>
          </div>
        ) : (
          ""
        )}
        {expanded && parseInt(collectors) != 0 ? (
          <div className="textStyle">
            <h4> {collectors} collectors have been found in your area.</h4>
            <button
              onClick={handleSubmit}
              disabled={disable}
              style={{
                color: "white",
                background: "black",
                padding: "10px",
                borderRadius: "3px",
                border: "1px solid black",
              }}
            >
              Send Request
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}