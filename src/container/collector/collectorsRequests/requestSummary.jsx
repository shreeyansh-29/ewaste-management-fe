import React, { useEffect } from "react";
import MaterialTable from "material-table";
import {} from "@material-ui/icons";
import api from "../../../core/utilities/httpProvider";
import SearchIcon from "@material-ui/icons/Search";
import Popup from "../../customer/popup";
import { FaUserCircle } from "react-icons/fa";
import { COLLECTOR_REQUEST_SUMMARY, TOAST_WARN3 } from "../../constant/constant";
import Toast from "../../components/toast";


export const ProfileIcon = FaUserCircle;
export default function CollectorRequests() {
  const { useState } = React;
  const [data, setData] = useState();
  const [isopen, setopen] = useState(false);
  const [detail, setdetail] = useState();
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
      editable: "never",
      field: "itemName",
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
      editable: "never",
      field: "category",
      lookup: {
        Temp: "Temperature exchange equipment ",
        Screens: "Screens, monitors",
        Lapms: "Lamps",
        LargeEqip: "Large equipment ",
        SmallEquip: "Small equipment ",
        SmallIT: "Small IT and telecommunication equipment ",
      },
      initialEditValue: "initial edit value",
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
      editable: "never",
      field: "quantity",
      type: "numeric",
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
      editable: "never",
      field: "scheduledDate",
      type: "date",
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
      title: "Request Type",
      editable: "never",
      field: "requestType",

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
    })
  };
  const handledata=(res)=>{
    handledate(res);
    res.data.map((obj) => {
      if (obj.requestType === "PickUp") {
        obj.id = "CP" + obj.id;
      }
      if (obj.requestType === "DropOff") {
        obj.id = "CD" + obj.id;
      }
      if (obj.requestType === "DropOff" && obj.status === "pending") {
        obj.status = "Scheduled";
      }
      if (obj.requestType === "DropOff") {
        obj.scheduledTime = "---";
        obj.scheduledDate = "---";
      }
    });
  }
  useEffect(() => {
    (async function () {
      try {
        const res = await api.get(COLLECTOR_REQUEST_SUMMARY);
        if (res.status === "success") {
          handledata(res);
          
          setData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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
          My Requests{" "}
        </h2>
        <MaterialTable
          align="center"
          columns={columns}
          data={data}
          title=""
          icons={{
            Search: () => <SearchIcon style={{ fill: "white" }} />,
          }}
          localization={{
            header: {
              actions: "Profile",
            },
          }}
          actions={[
            {
              icon: () => (
                <button
                  style={{
                    background: "white",
                    border: "1px solid white",
                    fontSize: "15px",
                  }}
                  onClick={togglepop}
                >
                  {" "}
                  <ProfileIcon style={{ color: "#e75480" }} />{" "}
                </button>
              ),

              onClick: (e, datas) => {
                console.log(e);

                setdetail(datas.customerUid);
                if (datas.customerUid === null) {
                  Toast.warn(TOAST_WARN3);
                }
              },
            },
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </div>
      <div>
        {isopen && detail != null && (
          <Popup handleClose={togglepop} content={detail} />
        )}
      </div>
    </div>
  );
}
