import React, {useEffect} from "react";
import MaterialTable from "material-table";
import "../../customer.css";
import SearchIcon from "@material-ui/icons/Search";
import {toast} from "react-toastify";
import {customerExpiredRequest} from "../../../../redux/action/customer/customerExpiredRequestAction/customerExpiredRequestAction";
import {useDispatch, useSelector} from "react-redux";
toast.configure();

const Completed = () => {
  const {useState} = React;
  const dispatch = useDispatch();
  let res = useSelector((state) => state.customerExpiredRequest?.data);

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

  useEffect(() => {
    dispatch(customerExpiredRequest());
  }, []);

  return (
    <div>
      <div>
        <div style={{padding: " 10px 30px"}}>
          <MaterialTable
            align="center"
            title=""
            columns={columns}
            data={res?.data}
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
};
export default Completed;
