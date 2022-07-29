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
      <div style={{padding: "150px 30px"}}>
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
          Items Summary
        </h2>
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
            Search: () => <SearchIcon style={{fill: "white"}} />,
          }}
          actions={[
            {
              icon: () => (
                <button
                  id="pop1"
                  style={{
                    background: "white",
                    border: "1px solid white",
                    fontSize: "15px",
                  }}
                  onClick={togglePop}
                >
                  <ProfileIcon style={{color: "#e75480"}} />
                </button>
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
