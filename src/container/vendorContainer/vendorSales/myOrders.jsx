/*
  @module myOrders
*/
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import Popup from "../../../components/popUp/popUp";
import {FaUserCircle} from "react-icons/fa";
import SearchIcon from "@material-ui/icons/Search";
import {vendorMyOrdersRequest} from "../../../redux/action/vendor/vendorMyOrdersAction/vendorMyOrdersAction";
import {connect, useDispatch} from "react-redux";
import {isEmpty} from "lodash";
import {myOrdersColumn} from "./myOrdersColumn";
export const ProfileIcon = FaUserCircle;
import "../vendor.css";
import {
  ProfileIconBarStyle,
  ProfileIconStyle,
} from "../../../components/styles";

const MyOrders = ({res}) => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [detail, setDetail] = useState();
  const [value, setValue] = useState();

  /* 
    @function togglePop
    @detail updating the value of 'isopen' variable
  */
  const togglePop = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      res?.data.map((obj) => {
        const date = obj.date.split("T");
        obj.date = date[0];
        obj.id = "ORD" + obj.id;
      });

      setValue(res.data);
    }
  }, [res]);
  useEffect(() => {
    dispatch(vendorMyOrdersRequest());
  }, []);

  return (
    <div>
      <div className="myOrders">
        <h2 className="myOrders-h2">Items Summary</h2>
        <MaterialTable
          columns={myOrdersColumn}
          data={value}
          title=""
          localization={{
            header: {
              actions: "Profile",
            },
          }}
          icons={{
            Search: () => <SearchIcon className="myOrdersSearchBtn" />,
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
                const id = datas.id.split("D");
                setDetail(id[1]);
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
          <Popup id="pop2" handleClose={togglePop} c={detail} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.vendorMyOrders,
  };
};

export default connect(mapStateToProps)(MyOrders);
