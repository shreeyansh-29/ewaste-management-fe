import React from "react";
import MaterialTable from "material-table";
import AddIcon from "@material-ui/icons/AddBox";
import "../Collector.css";
import {
  TOAST_ERROR4,
  TOAST_SUCCESS6,
  TOAST_WARN1,
} from "../../constant/constant";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "lodash";
import Toast from "../../../components/toast";
import {collectorForSaleRequest} from "../../../redux/action/collector/collectorForSaleAction/collectorForSaleAction";

const ItemsForSale = () => {
  const dispatch = useDispatch();
  let res = useSelector((state) => state.collectorForSale);
  console.log(res);
  const {useState} = React;
  const [status, setStatus] = useState("");
  const [columns] = useState([
    {
      title: "Item Name",
      field: "itemName",
      cellStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
    },
    {
      title: "Category",
      field: "category",

      lookup: {
        Temp: "Temperature exchange equipment (such as air conditioners, freezers)",
        Screens: "Screens, monitors (TVs, laptops)",
        Lapms: "Lamps (LED lamps, for example)",
        LargeEqip: "Large equipment (washing machines, electric stoves)",
        SmallEquip: "Small equipment (microwaves, electric shavers)",
        SmallIT:
          "Small IT and telecommunication equipment (such as mobile phones, printers)",
      },
      cellStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
    },
    {
      title: "Quantity",
      field: "quantity",
      type: "numeric",
      cellStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
    },

    {
      title: "Price/Item",
      field: "price",
      type: "currency",
      currencySetting: {currencyCode: "INR"},
      cellStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
      headerStyle: {
        textAlign: "center",
        fontSize: "15px",
      },
    },
  ]);
  React.useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      setStatus(res.data.status);
    }
  }, []);
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
      const data = {
        itemName: datas.itemName,
        category: datas.category,
        quantity: datas.quantity,
        price: datas.price,
        status: "Available",
      };
      dispatch(collectorForSaleRequest(data));
      Toast.success(TOAST_SUCCESS6);
    }
  };

  const [data, setData] = useState([]);

  return (
    <div>
      <div style={{padding: "150px 30px 0 30px"}}>
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
          On Sale{" "}
        </h2>
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          icons={{
            Add: () => <AddIcon style={{fill: "#e75480"}} />,
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
                  {" "}
                  Sale It{" "}
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

export default ItemsForSale;
