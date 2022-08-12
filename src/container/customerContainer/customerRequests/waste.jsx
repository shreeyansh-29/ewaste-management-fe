import React, {useEffect, useState} from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import "../customer.css";
import "./customerRequests.scss";
import {useDispatch, connect} from "react-redux";
import {customerEWasteDrivesRequest} from "../../../redux/action/customer/customerEWasteAction/customerEWasteAction";

const Waste = ({res}) => {
  const dispatch = useDispatch();

  const handledate = (result) => {
    result.data.map((obj) => {
      if (obj.time === "10") {
        obj.time = " 10:00-12:00";
      } else if (obj.time === "12") {
        obj.time = " 12:00-14:00";
      } else if (obj.time === "14") {
        obj.time = " 14:00-16:00";
      } else if (obj.time === "16") {
        obj.time = " 16:00-18:00";
      }
    });
  };
  useEffect(() => {
    if (res?.data.status === "success") {
      handledate(res.data);
      setData(res.data.data);
    }
  });
  useEffect(() => {
    dispatch(customerEWasteDrivesRequest());
  }, []);

  const renderCard = (card) => {
    return (
      <MDBCol className="col-lg-4">
        <MDBCard className="mdbCard">
          <MDBCardBody className="mdbCard-Body">
            <MDBCardTitle className="mdbCard-Title">
              <strong>
                <h4>{card.driveName}</h4>
              </strong>
            </MDBCardTitle>
            <hr></hr>
            <MDBCardText className="mdbCard-Text">
              <em>{card.description}</em>
              <br></br>
              <br></br>
              <strong>Items Accepted:</strong>
              {card.eWasteCategoryAccepted[0].categoryAccepted}
              <br></br>
              <strong> </strong>
            </MDBCardText>
            <MDBCardFooter className="mdbCard-Footer">
              <small>
                <PersonOutlineOutlinedIcon className="personOutlineOutlinedIcon" />
                {"   "}
                {card.organizerName}
                <br></br>
                <LocationOnOutlinedIcon className="locationOnOut" />
                {"    "}
                {card.location}
                <br></br>
                <EventNoteOutlinedIcon className="locationOnOut" />
                {"    "}
                {card.date} {card.time}
              </small>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  };

  const [data, setData] = useState([]);
  return (
    <div>
      {data.length === 0 ? (
        <div>
          <h2 className="mdbCard-h2">No Upcoming drives</h2>
        </div>
      ) : (
        <MDBRow className="mdb-Row" export default function>
          {data.map(renderCard)}
        </MDBRow>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.customerEWasteDrives,
  };
};

export default connect(mapStateToProps)(Waste);
