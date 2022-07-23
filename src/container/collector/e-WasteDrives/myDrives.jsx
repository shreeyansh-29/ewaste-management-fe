/*
  @module myDrives
*/
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import {collectorMyDrivesRequest} from "../../../redux/action/collector/collectorMyDrivesAction/collectorMyDrivesAction";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "lodash";
import {collectorMyDrivesStatusRequest} from "../../../redux/action/collector/collectorMyDrivesStatusAction/collectorMyDrivesStatusAction";
import {myDrivesColumns} from "./myDrivesColumns";

const MyDrives = () => {
  const dispatch = useDispatch();
  let res = useSelector((state) => state.collectorMyDrives);

  /* 
    @function callApi
    @params {newData}  contains the updated status of the drive
    @detail dispatch myDriveStatusRequest from myDrivesAction  
  */
  const callApi = async (newData) => {
    dispatch(collectorMyDrivesStatusRequest(newData));
  };
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      setData(res.data);
    }
  }, [res]);
  useEffect(() => {
    dispatch(collectorMyDrivesRequest());
  }, []);
  const [data, setData] = useState([]);

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
        My E-Waste Drives{" "}
      </h2>
      <MaterialTable
        title=""
        columns={myDrivesColumns}
        data={data}
        icons={{
          Search: () => <SearchIcon style={{fill: "white"}} />,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                callApi(newData);
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
};

export default MyDrives;
