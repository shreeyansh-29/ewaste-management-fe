import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardFooter,
} from "mdb-react-ui-kit";

import img1 from "../../images/microwave.jpg";
import img2 from "../../images/printer1.jpeg";
import img3 from "../../images/tubelight1.jpg";
import img4 from "../../images/monitor.jpg";
import img5 from "../../images/img71.jpg";
import img6 from "../../images/machine1.jpg";
import img7 from "../../images/mobile1.jpg";
const image = [img1, img2, img3, img4, img5, img6, img7];
var min = 1;
var max = 7;

export default function Waste() {
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
          res.data.map((obj) => {
            if (obj.time === "10") {
              obj.time = "10:00-12:00";
            }
            if (obj.time === "12") {
              obj.time = "12:00-14:00";
            }
            if (obj.time === "14") {
              obj.time = "14:00-16:00";
            }
            if (obj.time === "16") {
              obj.time = "16:00-18:00";
            }
          });

          setData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const renderCard = (card) => {
    var random = parseInt(min + Math.random() * (max - min));
    return (
      <MDBCol className="col-sm-4">
        <MDBCard className="h-100">
          <MDBCardImage
            // src="https://mdbootstrap.com/img/new/standard/city/042.webp"
            src={image[random]}
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>{card.driveName}</MDBCardTitle>
            <MDBCardText>
              {card.description}
              <br></br>
              Items Accepted: {card.eWasteCategoryAccepted[0].categoryAccepted}
              <br></br>
              Organized by: {card.organizerName}
            </MDBCardText>
            <MDBCardFooter>
              <small>
                {" "}
                {card.location}
                <br></br>
                {card.date}
                <br></br>
                {card.time}
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
          <h2 style={{ textAlign: "center", margin:"100px" }}> No Upcoming drives </h2>
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
