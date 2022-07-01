import React, {useEffect} from "react";
import MaterialTable from "material-table";
import "../../customer.css";
import {FaUserCircle} from "react-icons/fa";
import SearchIcon from "@material-ui/icons/Search";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {customerPendingRequest} from "../../../../redux/action/customer/customerPendingRequestAction/customerPendingRequestAction";
export const ProfileIcon = FaUserCircle;
toast.configure();

const PendingRequest = () => {
  const dispatch = useDispatch();
  let res1 = useSelector((state) => state.customerPendingRequest);
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
  const handleDecline = async (e, datas) => {
    const tokens = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    const response = await fetch(
      `http://localhost:8083/customer/deleteById?orderId=${datas.orderUid}`,
      {
        method: "DELETE",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + tokens,
          EMAIL: email,
        },
      }
    );
    console.log(response);
    document.location.reload();
  };
  useEffect(() => {
    dispatch(customerPendingRequest());
  }, []);

  return (
    <div>
      <div>
        <div style={{padding: " 10px 30px"}}>
          <MaterialTable
            align="center"
            title=""
            columns={columns}
            data={res1?.data.data}
            icons={{
              Search: () => <SearchIcon style={{fill: "white"}} />,
            }}
            localization={{
              header: {
                actions: "Actions",
              },
            }}
            actions={[
              {
                icon: () => <button className="bttn"> Decline </button>,
                onClick: (e, datas) => handleDecline(e, datas),
              },
            ]}
            options={{
              actionsColumnIndex: -1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PendingRequest;
