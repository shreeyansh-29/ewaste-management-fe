import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardFooter,
} from "mdb-react-ui-kit";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
export default function Waste() {
  return (
    <div>
      <MDBRow
        style={{
          marginTop: "100px",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <MDBCol className="col-lg-4">
          <MDBCard
            style={{
              borderRadius: "15px",
              boxShadow: "rgba(0, 0, 0, 0.55) 0px 5px 15px",
            }}
          >
            <MDBCardBody style={{ borderRadius: "15px" }}>
              <MDBCardTitle style={{ textAlign: "center" }}>
                <strong>
                  <h4>Request ID: CD1</h4>
                </strong>
              </MDBCardTitle>
              <hr></hr>
              <MDBCardText style={{ fontStyle: "Poppins" }}>
                <strong> Customer Name:</strong> Robert McFrier
                <br></br>
                <strong> Request Type:</strong> Drop-off Request
                <br></br>
                <strong> Items Accepted:</strong> Small Equipment
                <br></br>
                <strong> Quantity:</strong> 3
                <br></br>
                <strong> Request Status:</strong> Completed
                <br></br>
              </MDBCardText>
              <MDBCardFooter
                style={{
                  backgroundColor: "rgb(30, 28, 54)",
                  color: "white",
                  borderRadius: " 0px 0px 17px 17px",
                  height:"70px"
                }}
              >
                <small>
                  {"   "}
                  Excellent (5-Star Rating)
                  
                  <br></br>
                </small>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="col-lg-4">
          <MDBCard
            style={{
              borderRadius: "15px",
              boxShadow: "rgba(0, 0, 0, 0.55) 0px 5px 15px",
            }}
          >
            <MDBCardBody style={{ borderRadius: "15px" }}>
              <MDBCardTitle style={{ textAlign: "center" }}>
                <strong>
                  <h4>Request ID: TD2</h4>
                </strong>
              </MDBCardTitle>
              <hr></hr>
              <MDBCardText style={{ fontStyle: "Poppins" }}>
                <strong>Customer Name:</strong> Ellen Degeneres
                <br></br>
                <strong>Request Type:</strong> Pick-Up Request
                <br></br>
                <strong> Items Accepted:</strong> IT Equipment
                <br></br>
                <strong> Quantity:</strong> 3
                <br></br>
                <strong>Request Status:</strong> Cancelled
                <br></br>
              </MDBCardText>
              <MDBCardFooter
                style={{
                  backgroundColor: "rgb(30, 28, 54)",
                  color: "white",
                  borderRadius: " 0px 0px 17px 17px",
                  height:"70px"
                }}
              >
                <small>
                  {"   "}
                  Bad ( 2-Star Rating)
                  
                  <br></br>
                </small>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
