/* eslint-disable indent */
import React, {useEffect} from "react";
import MaterialTable from "material-table";
import Popup from "../../../components/popup";
import "../../customer.css";
import {FaUserCircle} from "react-icons/fa";
import SearchIcon from "@material-ui/icons/Search";
import {toast} from "react-toastify";
export const ProfileIcon = FaUserCircle;
import {useDispatch, useSelector} from "react-redux";
import {customerCompletedRequest} from "../../../../redux/action/customer/customerCompletedRequestAction/customerCompletedRequestAction";
toast.configure();

const CompletedRequest = () => {
  const dispatch = useDispatch();
  let res1 = useSelector((state) => state.customerCompletedRequest);
  console.log(res1);
  const {useState} = React;
  const [isopen, setopen] = useState(false);
  const [detail, setdetail] = useState();

  const [columns] = useState([
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

    {
      title: "Status",
      field: "status",
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

  const togglepop = () => {
    setopen(!isopen);
  };

  useEffect(() => {
    dispatch(customerCompletedRequest());
  }, []);

  return (
    <>
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
                  icon: () => (
                    <>
                      <button
                        style={{
                          background: "white",
                          border: "1px solid white",
                          fontSize: "15px",
                        }}
                        onClick={togglepop}
                      >
                        <ProfileIcon style={{color: "#e75480"}} />
                      </button>
                    </>
                  ),

                  onClick: (e, datas) => {
                    console.log(e);

                    setdetail(datas.collectorUid);
                  },
                },
              ]}
              options={{
                actionsColumnIndex: -1,
              }}
            />
          </div>
        </div>
        <div>
          {isopen && detail != null && (
            <Popup handleClose={togglepop} contents={detail} />
          )}
        </div>
      </div>
    </>
  );
};
export default CompletedRequest;
