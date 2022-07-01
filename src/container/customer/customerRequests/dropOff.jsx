/* eslint-disable indent */
import React, {useEffect} from "react";
import MaterialTable from "material-table";
import {} from "@material-ui/icons";
import "../customer.css";
import {useDispatch, useSelector} from "react-redux";
import ViewCollectors from "./viewCollectors";
import AddIcon from "@material-ui/icons/AddBox";
import SearchIcon from "@material-ui/icons/Search";
import {TOAST_ERROR4, TOAST_WARN1} from "../../constant/constant";
import Toast from "../../components/toast";
import {customerDropOffRequest} from "../../../redux/action/customer/customerDropOffAction/customerDropOffAction";

const DropOffRequest = () => {
  const {useState} = React;

  const dispatch = useDispatch();
  let res1 = useSelector((state) => state.customerDropOff);
  const [expanded, setExpanded] = useState(false);
  const [collectors, setCollectors] = useState([]);
  const [isEditable, setEditable] = useState(true);
  useEffect(() => {
    if (res1?.data?.data !== "") {
      setCollectors(res1?.data?.data);
    } else {
      collectors.length = 0;
    }
  }, [res1]);

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

  const handleClick = (data) => {
    if (
      data[0].category === undefined ||
      data[0].itemName === "" ||
      data[0].quantity === "" ||
      data[0].quantity === undefined
    ) {
      Toast.error(TOAST_ERROR4);
    } else if (
      data[0].quantity === 0 ||
      data[0].quantity > 20 ||
      data[0].quantity < 0
    ) {
      Toast.warn(TOAST_WARN1);
    } else {
      dispatch(customerDropOffRequest(data[0].category));
      setExpanded(true);
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
            Search: () => <SearchIcon style={{fill: "white"}} />,
          }}
          editable={{
            onRowAdd: isEditable
              ? (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      setData([...data, newData]);
                      setEditable(false);
                      resolve();
                      handleClick([newData]);
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
          options={{pageSize: 5, actionsColumnIndex: -1, search: false}}
        />
        {console.log("dd", collectors)}
        {expanded && collectors?.length === 0 ? (
          <div className="textStyle">
            <h4> No Collectors have been found in your area.</h4>
          </div>
        ) : (
          ""
        )}
        {expanded && collectors?.length != 0 ? (
          <ViewCollectors data={collectors} customerdata={data} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DropOffRequest;
