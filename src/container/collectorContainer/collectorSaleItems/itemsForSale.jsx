/*
  @module itemsForSale
*/
import React, {useState, useEffect} from "react";
import MaterialTable from "material-table";
import AddIcon from "@material-ui/icons/AddBox";
import "../collector.css";
import "./collectorSales.css";
import {
  TOAST_ERROR4,
  TOAST_SUCCESS6,
  TOAST_WARN1,
} from "../../constant/constants";
import {useDispatch, connect} from "react-redux";
import {isEmpty} from "lodash";
import Toast from "../../../components/toast";
import {collectorForSaleRequest} from "../../../redux/action/collector/collectorForSaleAction/collectorForSaleAction";
import {ItemsForSaleColumns} from "./itemsForSalesColumns";

const ItemsForSale = ({res}) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      setStatus(res.data.status);
    }
  }, []);

  /* 
    @function handleSubmit
    @params {e,datas} contain the data required to put the item on sale
    @detail dispatch itemsForSalesRequest from itemsForSaleAction after successful validation 
  */
  const handleSubmit = async (e, datas) => {
    e.preventDefault();
    if (
      datas.itemName === "" ||
      datas.price === null ||
      datas.quantity === null ||
      datas.quantity === undefined ||
      datas.category === undefined
    ) {
      Toast.error(TOAST_ERROR4);
    } else if (
      data[0].quantity === 0 ||
      data[0].quantity > 20 ||
      data[0].quantity < 0
    ) {
      Toast.warn(TOAST_WARN1);
    } else {
      const data1 = {
        itemName: datas.itemName,
        category: datas.category,
        quantity: datas.quantity,
        price: datas.price,
        status: "Available",
      };
      dispatch(collectorForSaleRequest(data1));
      Toast.success(TOAST_SUCCESS6);
    }
  };

  return (
    <div>
      <div className="sale">
        <h2 className="sale-h2">On Sale</h2>
        <MaterialTable
          title=""
          columns={ItemsForSaleColumns}
          data={data}
          icons={{
            Add: () => <AddIcon className="sale-addbtn" />,
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
                  disabled={status === "Available" ? true : false}
                >
                  Sale It
                </button>
              ),
              onClick: (e, datas) => {
                handleSubmit(e, datas);
              },
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
    res: state.collectorForSale,
  };
};

export default connect(mapStateToProps)(ItemsForSale);
