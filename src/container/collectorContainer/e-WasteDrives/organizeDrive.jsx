/*
  @module organizeDrive
*/
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import {useDispatch, connect} from "react-redux";
import {organizeDriveColumn} from "./organizeDriveColumn"
import AddIcon from "@material-ui/icons/AddBox";
import "../collector.css";
import {TOAST_ERROR4, TOAST_SUCCESS7} from "../../constant/constants";
import Toast from "../../../components/toast";
import {collectorOrganizeDriveRequest} from "../../../redux/action/collector/collectorOrganizeDriveAction/collectorOrganizeDriveAction";
import {dateMapping} from "../../../components/date/date";

const OrganizeDrive = ({res}) => {
  var maxDate = new Date();
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (res?.status === "success") {
      setStatus(res.data.status);
    }
  });
  maxDate.setMonth(maxDate.getMonth() + 6);

  /* 
    @function dateformat
    @params {datas}  contain the scheduledate of drive
    @detail updating the format of scheduledate
    @return scheduledate
  */
  const dateformat = (datas) => {
    let scheduledate = datas.date.toString().split(" ");

    scheduledate[1] = dateMapping[scheduledate[1]];
    scheduledate =
      scheduledate[3] + "-" + scheduledate[1] + "-" + scheduledate[2];
    return scheduledate;
  };
  /* 
    @function handleDone
    @params {e,datas}  contain the data required to organize a drive
    @detail dispatch organizeDriveRequest from organizeDriveAction after successful validation of datas 
  */
  const handleDone = async (e, datas) => {
    e.preventDefault();

    if (
      datas.itemsAcc === "" ||
      datas.address === "" ||
      datas.name === "" ||
      datas.date === "" ||
      datas.time === "" ||
      datas.description === undefined
    ) {
      Toast.error(TOAST_ERROR4);
    } else {
      datas.date = dateformat(datas);
      const data1 = {
        driveName: datas.name,
        description: datas.description,

        eWasteCategoryAccepted: [
          {
            categoryAccepted: datas.itemsAcc,
          },
        ],
        date: datas.date,
        time: datas.time,
      };
      dispatch(collectorOrganizeDriveRequest(data1));
      Toast.success(TOAST_SUCCESS7);
    }
  };

  return (
    <div>
      <div className="organizeDrive">
        <h2 className="organizeDrive-h2">Organize an E-Waste Drive</h2>
        <MaterialTable
          title=""
          columns={organizeDriveColumn}
          data={data}
          icons={{
            Add: () => <AddIcon className="organizeDriveAddBtn" />,
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  setData([...data, newData]);
                  setStatus("");
                  resolve();
                }, 1000);
              }),
          }}
          actions={[
            {
              icon: () => (
                <button
                  className="bttn"
                  disabled={status === "Upcoming" ? true : false}
                >
                  Done
                </button>
              ),
              onClick: (event, rowData) => handleDone(event, rowData),
            },
          ]}
          options={{
            actionsColumnIndex: -1,
            search: false,
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.collectorOrganizeDrive?.data,
  };
};

export default connect(mapStateToProps)(OrganizeDrive);
