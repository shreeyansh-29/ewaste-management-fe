/*
  @module PickUp
*/
/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import "../customer.css";
import "./customerRequests.css";
import {useDispatch, connect} from "react-redux";
import AddIcon from "@material-ui/icons/AddBox";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {dateMapping} from "../../../components/date/date";
import "react-toastify/dist/ReactToastify.css";
import DateFnsUtils from "@date-io/date-fns";
import {isEmpty} from "lodash";
import {TOAST_SUCCESS3} from "../../constant/constants";
import {customerCountCollRequest} from "../../../redux/action/customer/customerPickUpAction/customerCountCollAction";
import {customerPickUpRequest} from "../../../redux/action/customer/customerPickUpAction/customerPickUpAction";
import Toast from "../../../components/toast";
import {Button, TableTitle} from "../../../components/styles";
import {QuantityValidation} from "./quantityValidations";

function PickUp({result1}) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [collectors, setCollectors] = useState();
  const [isEditable, setEditable] = useState(true);
  const [data, setData] = useState([]);
  var maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);

  useEffect(() => {
    if (
      isEmpty(result1?.data) !== true ||
      result1?.type === "CUSTOMER_COUNT_COLL_SUCCESS"
    ) {
      setCollectors(result1.payload);
    }
  });

  const [columns] = useState([
    {
      title: "Item Name",
      field: "name",

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
      type: "numeric",
      field: "quantity",

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
      title: "Date",
      field: "date",
      type: "date",

      editComponent: ({value, onChange}) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            format="dd/MM/yyyy"
            clearable
            value={value}
            onChange={onChange}
            minDate={new Date().toDateString()}
            maxDate={maxDate}
          />
        </MuiPickersUtilsProvider>
      ),

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
      title: "Time",
      field: "time",
      lookup: {
        "10:00 -12:00": "10:00 -12:00",
        "12:00 -14:00": "12:00 -14:00",
        "14:00 -16:00": "14:00 -16:00",
        "16:00 -18:00": "16:00 -18:00",
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
  ]);

  /* 
    @function handleSubmit
    @params {event , value} contain the data required to request for PickUp service
    @detail dispatch the requestPickUp from PickUpAction 
    @return {void}
  */
  const handleSubmit = (event, value) => {
    event.preventDefault();

    var date = value[0].date.toString().split(" ");
    date[1] = dateMapping[date[1]];

    date = date[3] + "-" + date[1] + "-" + date[2];
    value[0].date = date;
    const datas = {
      category: value[0].category,
      itemName: value[0].name,
      quantity: value[0].quantity,
      scheduledDate: value[0].date,
      scheduledTime: value[0].time,
    };
    dispatch(customerPickUpRequest(datas));
    Toast.success(TOAST_SUCCESS3);
  };

  /* 
    @function handleClick
    @params {event} 
    @detail dispatch the pickUpCountRequest from PickUpAction after successful validation
    @return {void}
  */
  const handleClick = () => {
    if (QuantityValidation(data[0])) {
      dispatch(customerCountCollRequest(data[0].category));
      setExpanded(true);
    }
  };

  return (
    <div>
      <div className="pickUp">
        <TableTitle> Pick-Up Requests</TableTitle>
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          icons={{
            Add: () => <AddIcon className="pickUpAddBtn" />,
          }}
          editable={{
            onRowAdd: isEditable
              ? (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      setData([...data, newData]);
                      setEditable(false);
                      resolve();
                    }, 1000);
                  })
              : null,
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
                  resolve();
                }, 1000);
              }),
          }}
          options={{
            pageSize: 1,
            actionsColumnIndex: -1,
            addRowPosition: "first",
            search: false,
          }}
        />
        <div className="a">
          <a href="#" onClick={handleClick}>
            Find Collectors
          </a>
        </div>
        {expanded && collectors === 0 ? (
          <div className="textStyle">
            <h4>
              No collectors found in your area. Please try using a Drop Off
              Request.
            </h4>
          </div>
        ) : (
          ""
        )}
        {expanded && collectors !== 0 ? (
          <div className="textStyle">
            <h4> {collectors} collectors have been found in your area.</h4>
            <Button onClick={(e) => handleSubmit(e, data)}>Send Request</Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    result1: state.customerCountColl?.data,
  };
};

export default connect(mapStateToProps)(PickUp);
