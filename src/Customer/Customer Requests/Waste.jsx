import React, { useEffect, useState } from "react";
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
import "../Customer.css";
export default function Waste() {
  const handledate = (res) => {
    res.data.map((obj) => {
      if (obj.scheduledTime === "10") {
        obj.scheduledTime = " 10:00-12:00";
      } else if (obj.scheduledTime === "12") {
        obj.scheduledTime = " 12:00-14:00";
      } else if (obj.scheduledTime === "14") {
        obj.scheduledTime = " 14:00-16:00";
      } else if (obj.scheduledTime === "16") {
        obj.scheduledTime = " 16:00-18:00";
      }
    });
  };
  useEffect(() => {
    const tokens = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    (async function () {
      try {
        const response = await fetch(
          "http://localhost:8083/customer/viewDrives",
          {
            method: "GET",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + tokens,
              EMAIL: email,
            },
          }
        );
        const res = await response.json();
        console.log(response);
        console.log(res);
        if (res.status === "success") {
          handledate(res);

          setData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const renderCard = (card) => {
    return (
      <MDBCol className="col-lg-4">
        <MDBCard style={{ borderRadius: "15px" , boxShadow: "rgba(0, 0, 0, 0.55) 0px 5px 15px"}}>
          <MDBCardBody style={{ borderRadius: "15px" }}>
            <MDBCardTitle style={{ textAlign: "center" }}>
              <strong>
                <h4>{card.driveName}</h4>
              </strong>
            </MDBCardTitle>
            <hr></hr>
            <MDBCardText style={{ fontStyle: "Poppins" }}>
              <em>{card.description}</em>
              <br></br>
              <br></br>
              <strong>Items Accepted:</strong>{" "}
              {card.eWasteCategoryAccepted[0].categoryAccepted}
              <br></br>
              <strong> </strong>
            </MDBCardText>
            <MDBCardFooter
              style={{
                backgroundColor: "rgb(30, 28, 54)",
                color: "white",
                borderRadius: " 0px 0px 17px 17px",
              }}
            >
              <small>
                <PersonOutlineOutlinedIcon style={{ fontSize: "large" }} />
                {"   "}
                {card.organizerName}
                <br></br>
                <LocationOnOutlinedIcon style={{ fontSize: "medium" }} />
                {"    "}
                {card.location}
                <br></br>
                <EventNoteOutlinedIcon style={{ fontSize: "medium" }} />
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
  console.log("data", data);
  return (
    <div>
      {data.length === 0 ? (
        <div>
          <h2 style={{ textAlign: "center", margin: "100px" }}>
            {" "}
            No Upcoming drives{" "}
          </h2>
        </div>
      ) : (
        <MDBRow
          style={{
            marginTop: "100px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          {data.map(renderCard)}
        </MDBRow>
      )}
    </div>
  );
}
//textAlign:"center",color:"white", backgroundColor:"rgb(30, 28, 54)"
//padding: "7px"
