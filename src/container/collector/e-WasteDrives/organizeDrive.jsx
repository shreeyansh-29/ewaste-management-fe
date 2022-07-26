/*
  @module organizeDrive
*/
import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import {} from "@material-ui/icons";
import {useDispatch, connect} from "react-redux";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import AddIcon from "@material-ui/icons/AddBox";
import "../Collector.css";
import {toast} from "react-toastify";
import {TOAST_ERROR4, TOAST_SUCCESS7} from "../../constant/constant";
import Toast from "../../../components/toast";
import {collectorOrganizeDriveRequest} from "../../../redux/action/collector/collectorOrganizeDriveAction/collectorOrganizeDriveAction";
import DateFormat from "../../../components/date/date";
toast.configure();

const OrganizeDrive = ({res}) => {
  var maxDate = new Date();
  const dispatch = useDispatch();
  useEffect(() => {
    if (res?.status === "success") {
      setStatus(res.data.status);
    }
  });
  const [status, setStatus] = useState("");
  maxDate.setMonth(maxDate.getMonth() + 6);

  const [columns] = useState([
    {
      title: "Drive Name",
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
      title: "Description",
      field: "description",

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
      title: "Categories Accepted",
      field: "itemsAcc",
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
        "8:00-16:00": "8:00-16:00",
        "9:00-17:00": "9:00-17:00",
        "10:00-18:00": "10:00-18:00",
        "11:00-19:00": "11:00-19:00",
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
    @function dateformat
    @params {datas}  contain the scheduledate of drive
    @detail updating the format of scheduledate
    @return scheduledate
  */
  const dateformat = (datas) => {
    let scheduledate = datas.date.toString().split(" ");

    scheduledate[1] = DateFormat(scheduledate[1]);
    scheduledate =
      scheduledate[3] + "-" + scheduledate[1] + "-" + scheduledate[2];
    return scheduledate;
  };
  /* 
    @function handleDone
    @params {e,datas}  contain the data required to organize a drive
    @detail dispatch organizeDriveRequest from organizeDriveAction after successful validation of datas 
  */
  const handleDone = async (e, datas) => {
    e.preventDefault();

    if (
      datas.itemsAcc === "" ||
      datas.address === "" ||
      datas.name === "" ||
      datas.date === "" ||
      datas.time === "" ||
      datas.description === undefined
    ) {
      Toast.error(TOAST_ERROR4);
    } else {
      datas.date = dateformat(datas);
      const data1 = {
        driveName: datas.name,
        description: datas.description,

        eWasteCategoryAccepted: [
          {
            categoryAccepted: datas.itemsAcc,
          },
        ],
        date: datas.date,
        time: datas.time,
      };
      dispatch(collectorOrganizeDriveRequest(data1));
      Toast.success(TOAST_SUCCESS7);
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
          Organize an E-Waste Drive{" "}
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
                  disabled={status === "Upcoming" ? true : false}
                >
                  Done
                </button>
              ),
              onClick: (event, rowData) => handleDone(event, rowData),
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
    res: state.collectorOrganizeDrive,
  };
};

export default connect(mapStateToProps)(OrganizeDrive);
