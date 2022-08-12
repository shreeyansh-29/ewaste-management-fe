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
  const [isOpen, setOpen] = useState(false);
  const [detail, setDetail] = useState();

  /* 
    @function togglepop
    @detail update the value of isopen
    @return {void}
  */
  const togglePop = () => {
    setOpen(!isOpen);
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
          <div className="completed">
            <MaterialTable
              align="center"
              title=""
              columns={completedColumns}
              data={res?.data.data}
              icons={{
                Search: () => <SearchIcon className="completedSearchBtn" />,
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
                      <ProfileIconStyle onClick={togglePop} id="pop1">
                        <ProfileIconBarStyle>
                          <ProfileIcon></ProfileIcon>
                        </ProfileIconBarStyle>
                      </ProfileIconStyle>
                    </>
                  ),

                  onClick: (e, datas) => {
                    e.preventDefault();
                    setDetail(datas.collectorUid);
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
          {isOpen && detail != null && (
            <Popup id="pop" handleClose={togglePop} contents={detail} />
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
