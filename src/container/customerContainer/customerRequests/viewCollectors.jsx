/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from "react";
import MaterialTable from "material-table";
import {useDispatch} from "react-redux";
import "../customer.css";
// import "./customerRequests.scss";
import {TOAST_SUCCESS4} from "../../constant/constants";
import Toast from "../../../components/toast";
import {customerViewCollectorsRequest} from "../../../redux/action/customer/customerViewCollectorAction/customerViewCollectorAction";
import {viewCollectorsColumns} from "./viewCollectorsColumns";
import {TableTitle} from "../../../components/styles";

const ViewCollectors = (props) => {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);

  const handleAccept = async (e, datas) => {
    e.preventDefault();
    const data = {
      category: props.customerdata[0].category,
      itemName: props.customerdata[0].itemName,
      quantity: props.customerdata[0].quantity,
      scheduledTime: datas.shopTime,
      scheduledDate: props.customerdata[0].date,
      collectorUid: datas.uid,
    };

    setDisable(true);

    dispatch(customerViewCollectorsRequest(data));
    Toast.success(TOAST_SUCCESS4);
  };

  return (
    <div>
      <div className="viewCollector">
        <TableTitle>Collectors Available</TableTitle>
        <MaterialTable
          title=""
          columns={viewCollectorsColumns}
          data={props.data}
          actions={[
            {
              icon: () => (
                <button className="accept-btn" disabled={disable} id="bttn">
                  Accept
                </button>
              ),

              onClick: (e, datas) => handleAccept(e, datas),
            },
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </div>
    </div>
  );
};
export default ViewCollectors;
