/*
  @module requestSummary
*/
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import {} from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import Popup from "../../../components/popUp/popUp";
import {FaUserCircle} from "react-icons/fa";
import {TOAST_WARN3} from "../../constant/constant";
import Toast from "../../../components/toast";
import {collectorSummaryRequest} from "../../../redux/action/collector/collectorSummaryAction/collectorSummaryAction";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "lodash";
import {requestSummaryColumns} from "./requestSummaryColumns";
export const ProfileIcon = FaUserCircle;

const RequestSummary = () => {
  const dispatch = useDispatch();
  let res = useSelector((state) => state.collectorSummary);

  const [data, setData] = useState();
  const [isopen, setopen] = useState(false);
  const [detail, setdetail] = useState();

  /* 
    @function togglePop
    @detail update the value of isopen variable
  */
  const togglepop = () => {
    setopen(!isopen);
  };
  /* 
    @function handleData
    @params {values} contain the pickUp and dropOff request data
    @detail updating the data according to the conditions
  */
  const handledata = (res1) => {
    res1.data.map((obj) => {
      if (obj.requestType === "DropOff" && obj.status === "pending") {
        obj.status = "Scheduled";
      }
      if (obj.requestType === "DropOff") {
        obj.scheduledTime = "---";
        obj.scheduledDate = "---";
      }
    });
  };

  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      if (res.data.status === "success") handledata(res.data);
      setData(res.data.data);
    }
  });
  useEffect(() => {
    dispatch(collectorSummaryRequest());
  }, []);

  return (
    <div>
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
          My Requests{" "}
        </h2>
        <MaterialTable
          align="center"
          columns={requestSummaryColumns}
          data={data}
          title=""
          icons={{
            Search: () => <SearchIcon style={{fill: "white"}} />,
          }}
          localization={{
            header: {
              actions: "Profile",
            },
          }}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);

                  resolve();
                }, 1000);
              }),
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
                  <ProfileIcon style={{color: "#e75480"}} />{" "}
                </button>
              ),

              onClick: (datas) => {
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
};
export default RequestSummary;
