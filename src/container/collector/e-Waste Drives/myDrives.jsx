import React, {useEffect} from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import {collectorMyDrivesRequest} from "../../../redux/action/collector/collectorMyDrivesAction/collectorMyDrivesAction";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "lodash";
import {collectorMyDrivesStatusRequest} from "../../../redux/action/collector/collectorMyDrivesStatusAction/collectorMyDrivesStatusAction";
export default function myDrives() {
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
}

// import React, { useEffect } from "react";
// import MaterialTable from "material-table";
// import SearchIcon from "@material-ui/icons/Search";
// import api from "../../../core/utilities/httpProvider";
// import { COLLECTOR_DRIVE_MYDRIVE } from "../../constant/constant";
// export default function MyDrives() {
//   const { useState } = React;

//   const [columns] = useState([
//     {
//       title: "ID",

//       field: "id",

//       editable: "never",
//       cellStyle: {
//         textAlign: "center",
//         fontSize: "13px",
//       },
//       headerStyle: {
//         textAlign: "center",
//         fontSize: "13px",
//       },
//     },
//     {
//       title: "Drive Name",
//       field: "driveName",
//       editable: "never",
//       cellStyle: {
//         textAlign: "center",
//         fontSize: "13px",
//       },
//       headerStyle: {
//         textAlign: "center",
//         fontSize: "13px",
//       },
//     },
//     {
//       title: "Description",
//       field: "description",
//       editable: "never",
//       cellStyle: {
//         textAlign: "center",
//         fontSize: "13px",
//       },
//       headerStyle: {
//         textAlign: "center",
//         fontSize: "13px",
//       },
//     },
//     {
//       title: "Items Accepted",
//       field: "eWasteCategoryAccepted[0].categoryAccepted",
//       editable: "never",
//       cellStyle: {
//         textAlign: "center",
//         fontSize: "13px",
//       },
//       headerStyle: {
//         textAlign: "center",
//         fontSize: "13px",
//       },
//     },
//     {
//       title: "Address",
//       field: "location",
//       editable: "never",
//       cellStyle: {
//         fontSize: "13px",
//       },
//       headerStyle: {
//         fontSize: "13px",
//       },
//     },
//     {
//       title: "Date",
//       field: "date",
//       editable: "never",
//       type: "date",
//       cellStyle: {
//         fontSize: "13px",
//       },
//       headerStyle: {
//         fontSize: "13px",
//       },
//     },
//     {
//       title: "Time",
//       field: "time",
//       editable: "never",
//       lookup: {
//         10: "8:00-16:00",
//         12: "9:00-17:00",
//         14: "10:00-18:00",
//         16: "11:00-19:00",
//       },
//       cellStyle: {
//         textAlign: "center",
//         fontSize: "13px",
//       },
//       headerStyle: {
//         textAlign: "center",
//         fontSize: "13px",
//       },
//     },

//     {
//       title: "Status",
//       field: "status",
//       lookup: {
//         Upcoming: "Upcoming",
//         Cancelled: "Cancelled",
//         completed: "Completed",
//       },
//       cellStyle: {
//         textAlign: "center",
//         fontSize: "13px",
//       },
//       headerStyle: {
//         textAlign: "center",
//         fontSize: "13px",
//       },
//     },
//   ]);
//   const callApi = async (newData) => {
//     newData.id = newData.id.substring(2);
//     const res = await api.put(
//       `http://localhost:8083/collector/drive/myDrive/edit?id=${newData.id}&status=${newData.status}`
//     );
//     console.log(res);
//   };

//   useEffect(() => {
//     (async function () {
//       const res = await api.get(COLLECTOR_DRIVE_MYDRIVE);

//       if (res.status === "success") {
//         res.data.map((obj) => {
//           obj.id = "DR" + obj.id;
//         });

//         setData(res.data);
//       }
//     })();
//   }, []);
//   const [data, setData] = useState([]);

//   return (
//     <div style={{ padding: "150px 30px 0 30px" }}>
//       <h2
//         style={{
//           textAlign: "center",
//           fontSize: "30px",
//           padding: "2px,",
//           color: "white",
//           marginBottom: "2.5%",
//           backgroundColor: " rgb(30, 28, 54)",
//           borderRadius: "5px",
//         }}
//       >
//         {" "}
//         My E-Waste Drives{" "}
//       </h2>
//       <MaterialTable
//         title=""
//         columns={columns}
//         data={data}
//         icons={{
//           Search: () => <SearchIcon style={{ fill: "white" }} />,
//         }}
//         editable={{
//           onRowUpdate: (newData, oldData) =>
//             new Promise((resolve) => {
//               setTimeout(() => {
//                 const dataUpdate = [...data];
//                 const index = oldData.tableData.id;
//                 dataUpdate[index] = newData;
//                 callApi(newData);
//                 setData([...dataUpdate]);

//                 resolve();
//               }, 1000);
//             }),
//         }}
//         options={{
//           actionsColumnIndex: -1,
//         }}
//       />
//     </div>
//   );
// }
