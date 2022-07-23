/* 
  @module DropOff
*/
/* eslint-disable indent */
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import {} from "@material-ui/icons";
import "../customer.css";
import {useDispatch, useSelector} from "react-redux";
import ViewCollectors from "./viewCollectors";
import AddIcon from "@material-ui/icons/AddBox";
import SearchIcon from "@material-ui/icons/Search";
import {TOAST_ERROR4, TOAST_WARN1} from "../../constant/constant";
import Toast from "../../../components/toast";
import {isEmpty} from "lodash";
import {dropOffColumns} from "./dropOffColumns";
import {customerDropOffRequest} from "../../../redux/action/customer/customerDropOffAction/customerDropOffAction";

const DropOff = () => {
  const dispatch = useDispatch();
  let res1 = useSelector((state) => state.customerDropOff?.data);

  const [expanded, setExpanded] = useState(false);
  const [collectors, setCollectors] = useState([]);
  const [isEditable, setEditable] = useState(true);

  useEffect(() => {
    if (isEmpty(res1) !== true || res1.status === "success") {
      setCollectors(res1?.data);
    } else {
      collectors.length = 0;
    }
  }, [res1]);

  const [value, setValue] = useState([]);

  /* 
    @function handleClick
    @params {datas} contain the data required to request for drop off service
    @detail dispatch the dropOffRequest from DropOffAction after successful validation
    @return {void}
  */
  const handleClick = (data) => {
    if (
      data[0].category === undefined ||
      data[0].itemName === "" ||
      data[0].quantity === "" ||
      data[0].quantity === undefined
    ) {
      Toast.error(TOAST_ERROR4);
    } else if (
      data[0].quantity === 0 ||
      data[0].quantity > 20 ||
      data[0].quantity < 0
    ) {
      Toast.warn(TOAST_WARN1);
    } else {
      dispatch(customerDropOffRequest(data[0].category));
      setExpanded(true);
    }
  };

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
          {" "}
          Drop-Off Requests{" "}
        </h2>

        <MaterialTable
          title=""
          columns={dropOffColumns}
          data={value}
          icons={{
            Add: () => <AddIcon style={{fill: "#e75480"}} />,
            Search: () => <SearchIcon style={{fill: "white"}} />,
          }}
          editable={{
            onRowAdd: isEditable
              ? (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      setValue([...value, newData]);
                      setEditable(false);
                      resolve();
                      handleClick([newData]);
                    }, 1000);
                  })
              : null,
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  const dataUpdate = [...value];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setValue([...dataUpdate]);

                  resolve();
                }, 1000);
              }),
          }}
          options={{pageSize: 1, actionsColumnIndex: -1, search: false}}
        />
        {expanded && collectors?.length === 0 ? (
          <div className="textStyle">
            <h4> No Collectors have been found in your area.</h4>
          </div>
        ) : (
          ""
        )}
        {expanded && collectors?.length != 0 && isEmpty(collectors) !== true ? (
          <ViewCollectors data={collectors} customerdata={value} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default DropOff;
