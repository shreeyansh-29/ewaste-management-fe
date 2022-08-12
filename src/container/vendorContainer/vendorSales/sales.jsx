/*
  @module sales
*/
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import {Link} from "react-router-dom";
import Edit from "@material-ui/icons/Edit";
import PuchaseData from "./purchaseData";
import "../vendor.css";
import {connect, useDispatch} from "react-redux";
import {FaUserCircle} from "react-icons/fa";
import SearchIcon from "@material-ui/icons/Search";
import {vendorViewItemsRequest} from "../../../redux/action/vendor/vendorSalesAction/vendorViewItemsAction";
import {vendorAcceptItemsRequest} from "../../../redux/action/vendor/vendorSalesAction/vendorAcceptItemsAction";
import {INVALID_QUANTITY, TOAST_ERROR5} from "../../constant/constants";
import {isEmpty} from "lodash";
import Toast from "../../../components/toast";
import {salesColumn} from "./salesColumn";
export const ProfileIcon = FaUserCircle;

const Sales = ({res, res2}) => {
  const [details, setDetails] = useState([]);
  const [item, setItem] = useState();
  const [isOpen, setOpen] = useState(false);
  const [quantity, setQuantity] = useState();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(res?.obj) !== true || isEmpty(res?.data) !== true) {
      res.data.map((obj) => {
        if (parseInt(obj.quantity) > parseInt(obj.availableQuantity)) {
          obj.quantity = obj.availableQuantity;
        }
      });
      setData(res.data);
    }
  }, [res]);
  useEffect(() => {
    dispatch(vendorViewItemsRequest());
  }, []);

  /* 
    @function CalTotal
    @params {index, newData} represent the index and the data of the items put on sale
    @detail updating the purchase quantity after successful validation
  */
  const CalTotal = (index, newData) => {
    if (parseInt(newData.quantities) > data[index].availableQuantity) {
      Toast.error(INVALID_QUANTITY);

      newData.quantities = null;
    } else {
      newData.purchaseprice = newData.price * newData.quantities;
      newData.quantities = newData.quantities.toString();
      var dataUpdate = [...data];
      dataUpdate[index] = newData;
      setData([...dataUpdate]);
    }
  };

  /* 
    @function handleBuy
    @params {e,datas} represent the data of the item vendor is purchasing
    @detail dispatch salesAcceptRequest from salesAcceptAction after validating the purchase quantity
  */
  const handleBuy = async (e, datas) => {
    e.preventDefault();
    if (datas.quantities === 0 || datas.quantities === undefined) {
      Toast.error(TOAST_ERROR5);

      setOpen(false);
    } else {
      setQuantity(datas.quantities);
      setItem(datas.itemName);

      const data1 = {
        id: datas.id,
        quantity: datas.quantities,
        price: datas.purchaseprice,
        date: new Date(),
      };
      dispatch(vendorAcceptItemsRequest(data1));

      setDetails(res2.data);
    }
  };

  /* 
    @function togglePop
    @detail updating the value of isOpen variable
  */
  const togglePop = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="sales">
      <h2 className="sales-h2">Purchase Items</h2>
      <MaterialTable
        align="center"
        title=""
        columns={salesColumn}
        data={data}
        icons={{
          Edit: () => <Edit className="sales-Edit" />,

          Search: () => <SearchIcon className="sales-Search" />,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                const indexs = oldData.tableData.id;
                const dataUpdate = [...data];

                dataUpdate[indexs] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
              const index = oldData.tableData.id;
              CalTotal(index, newData);
            }),
        }}
        actions={[
          {
            icon: () => (
              <button className="bttn" onClick={togglePop}>
                Purchase
              </button>
            ),
            onClick: (e, datas) => handleBuy(e, datas),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />

      <Link to={{pathname: "/MyOrders/SalesSummary", data: [details]}}></Link>
      <div>{isOpen && <PuchaseData quantity={quantity} item={item} />}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.vendorViewItems?.data,
    res2: state.vendorAcceptItems,
  };
};

export default connect(mapStateToProps)(Sales);
