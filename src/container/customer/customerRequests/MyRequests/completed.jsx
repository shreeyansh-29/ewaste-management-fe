/* eslint-disable indent */
import React, {useEffect} from "react";
import MaterialTable from "material-table";
import Popup from "../../../../components/popup";
import "../../customer.css";
import {
  ProfileIconBarStyle,
  ProfileIconStyle,
} from "../../../../components/styles";
import {FaUserCircle} from "react-icons/fa";
import SearchIcon from "@material-ui/icons/Search";
import {toast} from "react-toastify";
export const ProfileIcon = FaUserCircle;
import {useDispatch, useSelector} from "react-redux";
import {customerCompletedRequest} from "../../../../redux/action/customer/customerCompletedRequestAction/customerCompletedRequestAction";
import {isEmpty} from "lodash";
toast.configure();

export default function completed() {
  const dispatch = useDispatch();
  let res = useSelector((state) => state.customerCompletedRequest);
  const {useState} = React;
  const [isopen, setopen] = useState(false);
  const [detail, setdetail] = useState();

  const [columns] = useState([
    {
      title: "Request Name",
      field: "itemName",
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
      title: "Category",
      field: "category",
      editable: "never",
      lookup: {
        Temp: "Temperature exchange equipment ",
        Screens: "Screens, monitors ",
        Lapms: "Lamps ",
        LargeEqip: "Large equipment",
        SmallEquip: "Small equipment ",
        SmallIT:
          "Small IT and telecommunication equipment (such as mobile phones, printers)",
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
      title: "Quantity",
      field: "quantity",
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
      title: "Request Type",
      field: "requestType",
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
      title: "Date",
      field: "scheduledDate",
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
      title: "Time",
      field: "scheduledTime",
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
      title: "Status",
      field: "status",
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
  ]);

  const togglepop = () => {
    setopen(!isopen);
  };
  const handledata = (res1) => {
    res1.map((obj) => {
      if (obj.scheduledDate !== null) {
        const date = obj.scheduledDate.split("T");
        obj.scheduledDate = date[0];
      }
    });
  };
  useEffect(() => {
    if (isEmpty(res?.data) !== true) {
      handledata(res?.data.data);
    }
  });
  useEffect(() => {
    dispatch(customerCompletedRequest());
  }, []);

  return (
    <>
      <div>
        <div>
          <div style={{padding: " 10px 30px"}}>
            <MaterialTable
              align="center"
              title=""
              columns={columns}
              data={res?.data.data}
              icons={{
                Search: () => <SearchIcon style={{fill: "white"}} />,
              }}
              localization={{
                header: {
                  actions: "Actions",
                },
              }}
              actions={[
                {
                  icon: () => (
                    <>
                      <ProfileIconStyle onClick={togglepop}>
                        <ProfileIconBarStyle>
                          <ProfileIcon></ProfileIcon>
                        </ProfileIconBarStyle>
                      </ProfileIconStyle>
                    </>
                  ),

                  onClick: (e, datas) => {
                    e.preventDefault();
                    setdetail(datas.collectorUid);
                  },
                },
              ]}
              options={{
                actionsColumnIndex: -1,
              }}
            />
          </div>
        </div>
        <div>
          {isopen && detail != null && (
            <Popup handleClose={togglepop} contents={detail} />
          )}
        </div>
      </div>
    </>
  );
}
