import React, { useEffect } from "react";
import MaterialTable from "material-table";
import Popup from "../popup";
import "../customer.css";
import api from "../../../core/utilities/httpProvider";
import { FaUserCircle } from "react-icons/fa";
import FeedbackPopup from "./feedbackPopup";
import SearchIcon from "@material-ui/icons/Search";
import { toast } from "react-toastify";
import { CUSTOMER_REQUEST_ALL } from "../../constant/constant";
export const ProfileIcon = FaUserCircle;

toast.configure();
export default function Completed() {
  const { useState } = React;
  const [isopen, setopen] = useState(false);
  const [detail, setdetail] = useState();
  const [feedback, setfeedback] = useState([]);

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
  const handledate = (res) => {
    res.data.map((obj) => {
      if (obj.requestType === "PickUp") {
        if (obj.scheduledTime === "10") {
          obj.scheduledTime = " 10:00-12:00";
        } else if (obj.scheduledTime === "12") {
          obj.scheduledTime = " 12:00-14:00";
        } else if (obj.scheduledTime === "14") {
          obj.scheduledTime = " 14:00-16:00";
        } else if (obj.scheduledTime === "16") {
          obj.scheduledTime = " 16:00-18:00";
        }
      }
    });
  };
  const handledata = (res) => {
    handledate(res);
    res.data.map((obj) => {
      if (obj.scheduledDate !== null) {
        const date = obj.scheduledDate.split("T");
        obj.scheduledDate = date[0];
      }
      if (obj.requestType === "DropOff" && obj.status === "pending") {
        obj.status = "Scheduled";
      }
      if (obj.requestType === "PickUp" && obj.status === "pending") {
        obj.status = "Pending";
      }
    });
  };
  useEffect(() => {
    (async function () {
      const res = await api.get(CUSTOMER_REQUEST_ALL);

      if (res.status === "success") {
        handledata(res);
        setData(res.data);
      }
    })();
  }, []);
  const [data, setData] = useState();

  return (
    <>
      <div>
        <div>
          <div style={{ padding: " 10px 30px" }}>
            <MaterialTable
              align="center"
              title=""
              columns={columns}
              data={data}
              icons={{
                Search: () => <SearchIcon style={{ fill: "white" }} />,
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
                        <ProfileIcon style={{ color: "#e75480" }} />
                      </button>
                    </>
                  ),

                  onClick: (e, datas) => {
                    console.log(e);

                    setdetail(datas.collectorUid);
                  },
                },
                (rowData) =>
                  rowData.status === "Scheduled"
                    ? {
                      icon: () => (
                        <>
                          <button
                            style={{
                              background: "white",
                              color: "blue",
                              border: "1px solid white",
                              fontSize: "10px",
                            }}
                            onClick={togglepop}
                            disabled 
                          >
                              Feedback
                          </button>
                        </>
                      ),
                      onClick: (e, datas) => {
                        console.log(e);
                        setfeedback(datas);
                      },
                    }
                    : {
                      icon: () => (
                        <>
                          <button
                            style={{
                              background: "white",
                              color: "blue",
                              border: "1px solid white",
                              fontSize: "10px",
                            }}
                            onClick={togglepop}
                          >
                              Feedback
                          </button>
                        </>
                      ),
                      onClick: (e, datas) => {
                        console.log(e);
                        setfeedback(datas);
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
          {isopen && feedback != null && (
            <FeedbackPopup handleClose={togglepop} contents={feedback} />
          )}
        </div>
      </div>
    </>
  );
}
