/*
  @module pending
*/
import React, {useEffect} from "react";
import MaterialTable from "material-table";
import "../../customer.css";
import {FaUserCircle} from "react-icons/fa";
import SearchIcon from "@material-ui/icons/Search";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {customerPendingRequest} from "../../../../redux/action/customer/customerPendingRequestAction/customerPendingRequestAction";
import {customerPendingDeclineRequest} from "../../../../redux/action/customer/customerPendingRequestAction/customerPendingDeclineAction";
import Swal from "sweetalert2";

export const ProfileIcon = FaUserCircle;
toast.configure();

const Pending = () => {
  const dispatch = useDispatch();
  let res = useSelector((state) => state.customerPendingRequest);
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
  /* 
    @function handleDecline
    @params {e,datas} specifies the data of the request user wants to decline
    @detail dispatch deletePendingRequest from deletePendingAction
  */
  const handleDecline = async (e, datas) => {
    e.preventDefault();
    if (datas) {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#228B22",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(customerPendingDeclineRequest(datas.orderUid));
          document.location.reload();
        }
      });
    }
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
            data={res?.data.data}
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
export default Pending;
