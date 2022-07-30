/*
  @module sales
*/
import React, {useEffect,useState} from "react";
import MaterialTable from "material-table";
import {Link} from "react-router-dom";
import Edit from "@material-ui/icons/Edit";
import PuchaseData from "./purchaseData";
import "../vendor.css";
import Popup from "../../../components/popUp/popUp";
import {connect, useDispatch} from "react-redux";
import {FaUserCircle} from "react-icons/fa";
import SearchIcon from "@material-ui/icons/Search";
import {vendorViewItemsRequest} from "../../../redux/action/vendor/vendorSalesAction/vendorViewItemsAction";
import {vendorAcceptItemsRequest} from "../../../redux/action/vendor/vendorSalesAction/vendorAcceptItemsAction";
import {
  INVALID_QUANTITY,
  TOAST_ERROR5,
  VALID_QUANTITY,
} from "../../constant/constants";
import {isEmpty} from "lodash";
import Toast from "../../../components/toast";
export const ProfileIcon = FaUserCircle;

const Sales = ({res, res2}) => {
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState();
  const [isOpen2, setOpen2] = useState(false);
  const [item, setItem] = useState();
  const [isOpen, setOpen] = useState(false);
  const [quantity, setQuantity] = useState();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [columns] = useState([
    {
      title: "Seller Profile",
      editable: "never",
      render: (rowData) => (
        <button
          id="pop1"
          style={{
            background: "white",
            border: "1px solid white",
            fontSize: "15px",
          }}
          onClick={() => profile(rowData)}
        >
          <ProfileIcon style={{color: "#e75480"}} />
        </button>
      ),
      filtering: false,
      cellStyle: {
        fontSize: "13px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "13px",
        textAlign: "center",
      },
    },

    {
      title: "Item Name",
      field: "itemName",
      editable: "never",
      filtering: false,
      cellStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
    },
    {
      title: "Category",
      field: "category",
      editable: "never",
      lookup: {
        Temp: "Temperature exchange equipment",
        Screens: "Screens, monitors ",
        Lapms: "Lamps ",
        LargeEqip: "Large equipment ",
        SmallEquip: "Small equipment ",
        SmallIT: "Small IT and telecommunication equipment ",
      },
      cellStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
    },
    {
      title: "Available Quantity",
      field: "availableQuantity",
      editable: "never",
      type: "numeric",
      cellStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
    },
    {
      title: "Unit price",
      field: "price",
      editable: "never",
      type: "currency",
      currencySetting: {currencyCode: "INR"},
      filtering: false,
      cellStyle: {
        fontSize: "13px",
        textAlign: "center",
      },
      headerStyle: {
        fontSize: "13px",
        textAlign: "center",
      },
    },

    {
      title: "Purchase Quantity",
      field: "quantities",
      type: "numeric",
      initialEditValue: 0,

      validate: (rowData) =>
        parseInt(rowData.quantities) > 0 ||
        rowData.quantities === null ||
        rowData.quantities === undefined
          ? ""
          : VALID_QUANTITY,
      filtering: false,
      cellStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
    },

    {
      title: "Total Price",
      field: "purchaseprice",
      type: "currency",
      currencySetting: {currencyCode: "INR"},
      initialEditValue: 0,
      editable: "never",

      filtering: false,
      cellStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "13px",
      },
    },
  ]);

  /* 
    @function profile
    @params {e}
    @detail updating the value of 'id' 
  */
  const profile = (e) => {
    const id = e.id;
    setDetail(id);
    togglePop2();
  };

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

  /* 
    @function togglePop2
    @detail updating the value of isOpen variable
  */
  const togglePop2 = () => {
    setOpen2(!isOpen2);
  };
  return (
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
        Purchase Items
      </h2>
      <MaterialTable
        align="center"
        title=""
        columns={columns}
        data={data}
        icons={{
          Edit: () => <Edit style={{color: "black", alignContent: "left"}} />,

          Search: () => <SearchIcon style={{fill: "white"}} />,
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
      <div>
        {isOpen2 && detail != null && (
          <Popup handleClose={togglePop2} cont={detail} />
        )}
      </div>
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
