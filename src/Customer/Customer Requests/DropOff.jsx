import React from "react";
import MaterialTable from "material-table";
import {} from "@material-ui/icons";
import "../Customer.css";
import ViewCollectors from "./ViewCollectors";
import AddIcon from "@material-ui/icons/AddBox";
import SearchIcon from "@material-ui/icons/Search";
import {toast} from "react-toastify";
toast.configure();
export default function DropOff() {
  const {useState} = React;
  const [expanded, setExpanded] = useState(false);
  const [collectors, setCollectors] = useState([]);
  const [isEditable, setEditable] = useState(true);

  const [columns] = useState([
    {
      title: "Request Name",
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
  ]);

  const [data, setData] = useState([]);

  const handleClick = async (event) => {
    event.preventDefault();
    
    if (
      data[0].category === undefined ||
      data[0].itemName === "" ||
      data[0].quantity === "" ||
      data[0].quantity === undefined
    ) {
      toast.error("Enter all fields", {position: toast.POSITION.TOP_RIGHT});
    } else if (
      data[0].quantity === 0 ||
      data[0].quantity > 20 ||
      data[0].quantity < 0
    ) {
      toast.warn("Enter quantity between 1 to 20", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const tokens = localStorage.getItem("token");
      const email = localStorage.getItem("email");
      try {
        const response = await fetch(
          `http://localhost:8083/customer/request/dropOff/viewCollectors?category=${data[0].category}`,
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

          setCollectors([...res.data]);
          setExpanded(true);
        } else {
          collectors.length = 0;
          setExpanded(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
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
          Drop-Off Requests{" "}
        </h2>

        <MaterialTable
          title=""
          columns={columns}
          data={data}
          icons={{
            Add: () => <AddIcon style={{fill: "#e75480"}} />,
            Search: ()=><SearchIcon style={{fill:"white"}}/>
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
          options={{pageSize: 1, actionsColumnIndex: -1, search:false}}
        />

        <div className="a">
          {" "}
          <a href="#" onClick={handleClick}>
            Search Drop-Off Locations
          </a>
        </div>
        {expanded && collectors.length === 0 ? (
          <div className="textStyle">
            <h4> No Collectors have been found in your area.</h4>
          </div>
        ) : (
          ""
        )}
        {expanded && collectors.length != 0 ? (
          <ViewCollectors data={collectors} customerdata={data} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
