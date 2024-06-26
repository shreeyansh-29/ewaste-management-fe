/*
  @module requestSummary
*/
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import Popup from "../../../components/popUp/popUp";
import {FaUserCircle} from "react-icons/fa";
import {connect, useDispatch} from "react-redux";
import {collectorSummaryRequest} from "../../../redux/action/collector/collectorSummaryAction/collectorSummaryAction";
import {isEmpty} from "lodash";
import {
  ProfileIconBarStyle,
  ProfileIconStyle,
  TableTitle,
} from "../../../components/styles";
import "./collectorRequests.css";
import {requestSummaryColumns} from "./requestSummaryColumns";

export const ProfileIcon = FaUserCircle;

function collectorRequests({res1}) {
  const dispatch = useDispatch();

  const [data, setData] = useState();
  const [isOpen, setOpen] = useState(false);
  const [detail, setDetail] = useState();

  /* 
    @function togglePop
    @detail update the value of isopen variable
  */
  const togglePop = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    if (isEmpty(res1) !== true) {
      if (res1.status === "success") {
        handledata(res1);
        setData(res1.data);
      }
    }
  });
  /* 
    @function handleData
    @params {values} contain the pickUp and dropOff request data
    @detail updating the data according to the conditions
  */
  const handledata = (value) => {
    value?.data?.map((obj) => {
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
    dispatch(collectorSummaryRequest());
  }, []);

  return (
    <div>
      <div className="requestSummary">
        <TableTitle>My Requests </TableTitle>
        <MaterialTable
          align="center"
          columns={requestSummaryColumns}
          data={data}
          title=""
          icons={{
            Search: () => <SearchIcon className="request-searchBtn" />,
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
                <ProfileIconStyle onClick={togglePop} id="pop1">
                  <ProfileIconBarStyle>
                    <ProfileIcon />
                  </ProfileIconBarStyle>
                </ProfileIconStyle>
              ),

              onClick: (e, datas) => {
                e.preventDefault();

                setDetail(datas.customerUid);
              },
            },
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </div>
      <div>
        {isOpen && detail != null && (
          <Popup id="pop2" handleClose={togglePop} content={detail} />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    res1: state.collectorSummary?.data,
  };
};

export default connect(mapStateToProps)(collectorRequests);
