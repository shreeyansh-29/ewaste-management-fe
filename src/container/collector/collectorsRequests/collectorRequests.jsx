import React from "react";
import MaterialTable from "material-table";
import "../Collector.css";
import {TOAST_SUCCESS8} from "../../constant/constant";
import Toast from "../../../components/toast";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {collectorPendingRequest} from "../../../redux/action/collector/collectorPendingAction/collectorPendingAction";
import {isEmpty} from "lodash";
import {collectorPendingAcceptRequest} from "../../../redux/action/collector/collectorPendingAcceptAction/collectorPendingAcceptAction";

const CollectorRequests = () => {
  const dispatch = useDispatch();
  let res = useSelector((state) => state.collectorPending);
  console.log(res);
  React.useEffect(() => {
    dispatch(collectorPendingRequest());
  }, []);
  const {useState} = React;
  var orderid = 0;
  React.useEffect(() => {
    if (isEmpty(res?.data) !== true || res?.data.status === "success") {
      setData(res.data.data);
    }
  }, [res]);
  const [data, setData] = useState();
  const [columns] = useState([
    {
      title: "Request Name",
      editable: "never",
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
      editable: "never",
      field: "category",
      lookup: {
        Temp: "Temperature exchange equipment",
        Screens: "Screens, monitors ",
        Lapms: "Lamps ",
        LargeEqip: "Large equipment",
        SmallEquip: "Small equipment",
        SmallIT: "Small IT and telecommunication equipment ",
      },
      initialEditValue: "initial edit value",
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
      editable: "never",
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
    {
      title: "Date",
      editable: "never",
      field: "scheduleDate",
      type: "date",
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
      title: "Time",
      editable: "never",
      field: "scheduledTime",
      type: "date",
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
      field: "address",
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
  ]);

  const handleAccept = async (e, datas) => {
    e.preventDefault();
    orderid = datas.orderId;

    dispatch(collectorPendingAcceptRequest(orderid));
    Toast.success(TOAST_SUCCESS8, 1500);

    setTimeout(() => {
      window.location.href = "Request/MyRequests";
    }, 3000);
  };

  return (
    <div style={{padding: "150px 30px 0 30px"}}>
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
        Requests{" "}
      </h2>
      <MaterialTable
        align="center"
        columns={columns}
        title=""
        data={data}
        actions={[
          {
            icon: () => <button className="bttn"> Accept </button>,
            onClick: (e, datas) => handleAccept(e, datas),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
          search: false,
        }}
      />
    </div>
  );
};

export default CollectorRequests;
