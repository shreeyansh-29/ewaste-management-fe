/*
  @module pending
*/
import React, {useEffect} from "react";
import MaterialTable from "material-table";
import "../../customer.css";
import {FaUserCircle} from "react-icons/fa";
import SearchIcon from "@material-ui/icons/Search";
import {useDispatch, connect} from "react-redux";
import {customerPendingRequest} from "../../../../redux/action/customer/customerPendingRequestAction/customerPendingRequestAction";
import {customerPendingDeclineRequest} from "../../../../redux/action/customer/customerPendingRequestAction/customerPendingDeclineAction";
import {pendingColumns} from "./pendingColumns";
export const ProfileIcon = FaUserCircle;

const Pending = ({res}) => {
  const dispatch = useDispatch();
  /* 
    @function handleDecline
    @params {e,datas} specifies the data of the request user wants to decline
    @detail dispatch deletePendingRequest from deletePendingAction
  */
  const handleDecline = async (e, datas) => {
    e.preventDefault();

    dispatch(customerPendingDeclineRequest(datas.orderUid));
    document.location.reload();
  };
  useEffect(() => {
    dispatch(customerPendingRequest());
  }, []);

  return (
    <div>
      <div>
        <div className="pending">
          <MaterialTable
            align="center"
            title=""
            columns={pendingColumns}
            data={res?.data.data}
            icons={{
              Search: () => <SearchIcon className="pendingBtn" />,
            }}
            localization={{
              header: {
                actions: "Actions",
              },
            }}
            actions={[
              {
                icon: () => <button className="bttn"> Decline </button>,
                onClick: (e, datas) => handleDecline(e, datas),
              },
            ]}
            options={{
              actionsColumnIndex: -1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.customerPendingRequest,
  };
};

export default connect(mapStateToProps)(Pending);
