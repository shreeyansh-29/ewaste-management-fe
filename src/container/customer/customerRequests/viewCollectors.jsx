/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import MaterialTable from "material-table";
import {} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import "../customer.css";
import {TOAST_SUCCESS4} from "../../constant/constant";
import Toast from "../../../components/toast";
import {customerViewCollectorsRequest} from "../../../redux/action/customer/customerViewCollectorAction/customerViewCollectorAction";

const ViewCollectors = (props) => {
  const {useState} = React;
  const dispatch = useDispatch();
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

  const handleAccept = async (e, datas) => {
    e.preventDefault();
    const data = {
      category: props.customerdata[0].category,
      itemName: props.customerdata[0].itemName,
      quantity: props.customerdata[0].quantity,
      scheduledTime: datas.shopTime,
      scheduledDate: props.customerdata[0].date,
      collectorUid: datas.uid,
    };

    setdisable(true);

    dispatch(customerViewCollectorsRequest(data));
    Toast.success(TOAST_SUCCESS4);
  };

  return (
    <div>
      <div style={{padding: "50px 0 0 0"}}>
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
          data={props.data}
          actions={[
            {
              icon: () => (
                <button className="accept-btn" disabled={btndisable}>
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
};
export default ViewCollectors;
