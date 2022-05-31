import React, {useEffect} from "react";
import MaterialTable from "material-table";
import {} from "@material-ui/icons";
import Popup from "../../customer/popup";
import {FaUserCircle} from "react-icons/fa";
import {toast} from "react-toastify";
import SearchIcon from "@material-ui/icons/Search";
import {TOAST_WARN3, VENDOR_SUMMARY} from "../../constant/constant";
import api from "../../../core/utilities/httpProvider";
toast.configure();
export const ProfileIcon = FaUserCircle;
export default function MyOrders() {
  const {useState} = React;
  const [isopen, setopen] = useState(false);
  const [detail, setdetail] = useState();

  const [columns] = useState([
    {
      title: "   ID",
      field: "id",
      editable: false,
      filtering: false,
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
      title: "Item Name",
      field: "itemName",
      editable: false,
      filtering: false,
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
      lookup: {
        Temp: "Temperature exchange equipment ",
        Screens: "Screens, monitors ",
        Lapms: "Lamps ",
        LargeEqip: "Large equipment",
        SmallEquip: "Small equipment ",
        SmallIT: "Small IT and telecommunication equipment ",
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
      type: "numeric",
      filtering: false,
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
      title: "Price",
      field: "price",
      filtering: false,
      type: "currency",
      currencySetting: {currencyCode: "INR"},
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
      title: "Address",
      field: "address",
      editable: false,
      cellStyle: {
        fontSize: "13px",textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
    },
    {
      title: "Date of Purchase",
      field: "date",
      editable: false,
      cellStyle: {
        fontSize: "13px",textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
    },
    {
      title: "Status",
      editable: false,
      field: "status",
      lookup: {
        Open: "Open",
        completed: "Completed",
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
  ]);
  const togglepop = () => {
    setopen(!isopen);
  };
  useEffect(() => {
    (async function () {
      const res = await api.get(VENDOR_SUMMARY);

      if (res.status === "success") {
        res.data.map((obj) => {
          const date = obj.date.split("T");
          obj.date = date[0];
          obj.id = "ORD" + obj.id;
        });

        setData(res.data);
      }
    })();
  }, []);

  const [data, setData] = useState();

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
          Items Summary{" "}
        </h2>
        <MaterialTable
          columns={columns}
          data={data}
          title=""
          localization={{
            header: {
              actions: "Profile",
            },
          }}
          icons={{
            Search: () => <SearchIcon style={{fill: "white"}} />,
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
                  <ProfileIcon style={{color: "#e75480"}} />
                </button>
              ),

              onClick: (e, datas) => {
                console.log(e);
                if (datas.id === null) {
                  toast.warn(TOAST_WARN3, {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                } else {
                  const id = datas.id.split("D");

                  setdetail(id[1]);
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
          <Popup handleClose={togglepop} c={detail} />
        )}
      </div>
    </div>
  );
}
