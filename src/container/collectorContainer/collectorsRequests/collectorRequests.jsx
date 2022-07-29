/*
  @module collectorRequests
*/
import React, {useState, useEffect} from "react";
import MaterialTable from "material-table";
import "../collector.css";
import {TOAST_SUCCESS8} from "../../constant/constants";
import Toast from "../../../components/toast";
import {useDispatch, connect} from "react-redux";
import {collectorPendingRequest} from "../../../redux/action/collector/collectorPendingAction/collectorPendingAction";
import {isEmpty} from "lodash";
import {collectorPendingAcceptRequest} from "../../../redux/action/collector/collectorPendingAcceptAction/collectorPendingAcceptAction";
import {collectorRequestsColumns} from "./collectorRequestsColumns";

const CollectorRequests = ({res}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState();

  useEffect(() => {
    dispatch(collectorPendingRequest());
  }, []);

  var orderid = 0;
  useEffect(() => {
    if (isEmpty(res) !== true || res?.status === "success") {
      setData(res.data);
    }
  }, [res]);

  /* 
    @function handleAccept
    @params {e,datas}  contains the data of the pickUp request collector is accepting
    @detail dispatch acceptPendingRequest from acceptPendingAction  
  */
  const handleAccept = async (e, datas) => {
    e.preventDefault();
    orderid = datas.orderId;

    dispatch(collectorPendingAcceptRequest(orderid));
    Toast.success(TOAST_SUCCESS8, 1500);

    setTimeout(() => {
      window.location.href = "/Request/MyRequests";
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
        Requests
      </h2>
      <MaterialTable
        align="center"
        columns={collectorRequestsColumns}
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

const mapStateToProps = (state) => {
  return {
    res: state.collectorPending?.data,
  };
};

export default connect(mapStateToProps)(CollectorRequests);
