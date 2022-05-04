/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useEffect} from "react";
import MaterialTable from "material-table";
import {} from "@material-ui/icons";

import "../Customer.css";
import {toast} from "react-toastify";
import { TOAST_SUCCESS4 } from "../../constant/constant";
toast.configure();
export default function ViewCollectors(props) {
  const {useState} = React;
  const [btndisable, setdisable] = useState(false);

  const [columns] = useState([
    {
      title: "Name",
      field: "firstName",
      editable: "never",
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
      title: "Address",
      field: "address1",
      editable: "never",
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
      title: "Pincode",
      field: "pinCode",
      editable: "never",
      cellStyle: {
        fontSize: "15px",
      },
      headerStyle: {
        fontSize: "15px",
      },
    },
    {
      title: "Time",
      field: "shopTime",
      editable: "never",
      cellStyle: {
        fontSize: "15px",
      },
      headerStyle: {
        fontSize: "15px",
      },
    },
  ]);
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    var address = props.data.map(function (obj) {
      return obj.address1 + " " + obj.city + " " + obj.state;
    });

    props.data.map((obj) =>
      address.map((obj1) => {
        obj.address1 = obj1;
      })
    );
  }, []);
  const [data] = useState([...props.data]);

  const handleAccept = async (e, datas) => {
    e.preventDefault();
    const tokens = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    setdisable(true);
    try {
      const response = await fetch(
        "http://localhost:8083/customer/request/dropOff",
        {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tokens,
            EMAIL: email,
          },
          body: JSON.stringify({
            category: props.customerdata[0].category,
            itemName: props.customerdata[0].itemName,
            quantity: props.customerdata[0].quantity,
            scheduledTime: datas.shopTime,
            scheduledDate: props.customerdata[0].date,
            collectorUid: datas.uid,
          }),
        }
      );

      console.log(response);

      toast.success(TOAST_SUCCESS4, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div style={{padding: "10px"}}>
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
          Collectors Available{" "}
        </h2>
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          actions={[
            {
              icon: () => (
                <button
                  className="accept-btn"
                  disabled={btndisable}
                  style={
                    btndisable === true
                      ? {color: "red", background: "grey"}
                      : {color: "white", background: "rgb(14, 185, 207)"}
                  }
                >
                  Accept
                </button>
              ),

              onClick: (e, datas) => handleAccept(e, datas),
            },
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </div>
    </div>
  );
}
