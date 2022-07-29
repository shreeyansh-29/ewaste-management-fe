/*
  @module completed
 */
/* eslint-disable indent */
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import Popup from "../../../../components/popUp/popUp";
import "../../customer.css";
import {
  ProfileIconBarStyle,
  ProfileIconStyle,
} from "../../../../components/styles";
import {FaUserCircle} from "react-icons/fa";
import SearchIcon from "@material-ui/icons/Search";
import {toast} from "react-toastify";
export const ProfileIcon = FaUserCircle;
import {useDispatch, connect} from "react-redux";
import {customerCompletedRequest} from "../../../../redux/action/customer/customerCompletedRequestAction/customerCompletedRequestAction";
import {isEmpty} from "lodash";
import {completedColumns} from "./completedColumns";
toast.configure();

function completed({res}) {
  const dispatch = useDispatch();
  const [isopen, setopen] = useState(false);
  const [detail, setdetail] = useState();

  /* 
    @function togglepop
    @detail update the value of isopen
    @return {void}
  */
  const togglepop = () => {
    setopen(!isopen);
  };
  const handledata = (res1) => {
    res1.map((obj) => {
      if (obj.scheduledDate !== null) {
        const date = obj.scheduledDate.split("T");
        obj.scheduledDate = date[0];
      }
    });
  };
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      handledata(res?.data.data);
    }
  });
  useEffect(() => {
    dispatch(customerCompletedRequest());
  }, []);

  return (
    <>
      <div>
        <div>
          <div style={{padding: " 10px 30px"}}>
            <MaterialTable
              align="center"
              title=""
              columns={completedColumns}
              data={res?.data.data}
              icons={{
                Search: () => <SearchIcon style={{fill: "white"}} />,
              }}
              localization={{
                header: {
                  actions: "Actions",
                },
              }}
              actions={[
                {
                  icon: () => (
                    <>
                      <ProfileIconStyle onClick={togglepop} id="pop1">
                        <ProfileIconBarStyle>
                          <ProfileIcon></ProfileIcon>
                        </ProfileIconBarStyle>
                      </ProfileIconStyle>
                    </>
                  ),

                  onClick: (e, datas) => {
                    e.preventDefault();
                    setdetail(datas.collectorUid);
                  },
                },
              ]}
              options={{
                actionsColumnIndex: -1,
              }}
            />
          </div>
        </div>
        <div>
          {isopen && detail != null && (
            <Popup id="pop" handleClose={togglepop} contents={detail} />
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    res: state.customerCompletedRequest,
  };
};

export default connect(mapStateToProps)(completed);
