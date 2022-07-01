import React, {useEffect} from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import {collectorMyDrivesRequest} from "../../../redux/action/collector/collectorMyDrivesAction/collectorMyDrivesAction";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "lodash";
import {collectorMyDrivesStatusRequest} from "../../../redux/action/collector/collectorMyDrivesStatusAction/collectorMyDrivesStatusAction";

const MyDrives = () => {
  const {useState} = React;
  const dispatch = useDispatch();
  let res = useSelector((state) => state.collectorMyDrives);
  const [columns] = useState([
    {
      title: "ID",

      field: "id",

      editable: "never",
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
      title: "Drive Name",
      field: "driveName",
      editable: "never",
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
      title: "Description",
      field: "description",
      editable: "never",
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
      title: "Items Accepted",
      field: "eWasteCategoryAccepted[0].categoryAccepted",
      editable: "never",
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
      title: "Address",
      field: "location",
      editable: "never",
      cellStyle: {
        fontSize: "13px",
      },
      headerStyle: {
        fontSize: "13px",
      },
    },
    {
      title: "Date",
      field: "date",
      editable: "never",
      type: "date",
      cellStyle: {
        fontSize: "13px",
      },
      headerStyle: {
        fontSize: "13px",
      },
    },
    {
      title: "Time",
      field: "time",
      editable: "never",
      lookup: {
        "8:00-16:00": "8:00-16:00",
        "9:00-17:00": "9:00-17:00",
        "10:00-18:00": "10:00-18:00",
        "11:00-19:00": "11:00-19:00",
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
      title: "Status",
      field: "status",
      lookup: {
        Upcoming: "Upcoming",
        Cancelled: "Cancelled",
        completed: "Completed",
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
  ]);
  const callApi = async (newData) => {
    dispatch(collectorMyDrivesStatusRequest(newData));
  };
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      setData(res.data);
    }
  }, [res]);
  useEffect(() => {
    dispatch(collectorMyDrivesRequest());
  }, []);
  const [data, setData] = useState([]);

  return (
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
        My E-Waste Drives{" "}
      </h2>
      <MaterialTable
        title=""
        columns={columns}
        data={data}
        icons={{
          Search: () => <SearchIcon style={{fill: "white"}} />,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                callApi(newData);
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
};

export default MyDrives;
