/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import "./Customer.css";

function Popup(props) {
  const [data, setData] = useState();
  const [add, setadd] = useState();
  const [mobile, setmobile] = useState();
  let url;
  useEffect(() => {
    (async function () {
      const tokens = localStorage.getItem("token");
      const email = localStorage.getItem("email");
      if (props.content) {
        url = `http://localhost:8083/collector/request/pending/customerProfile?id=${props.content}`;
      } else if (props.contents) {
        url = `http://localhost:8083/customer/request/all/collectorProfile?id=${props.contents}`;
      } else if (props.c) {
        url = `http://localhost:8083/vendor/view/items/accept/collectorProfile?id=${props.c}`;
      } else if (props.cont) {
        url = `http://localhost:8083/vendor/view/items/collectorProfile?id=${props.cont}`;
      }
      try {
        const response = await fetch(url, {
          method: "GET",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tokens,
            EMAIL: email,
          },
        });
        const res = await response.json();

        if (res.status === "success") {
          const name = res.data.firstName + " " + res.data.lastName;
          const address1 =
            res.data.address1 + " " + res.data.city + " " + res.data.state;
          setmobile(res.data.mobileNo);
          setData(name);
          setadd(address1);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <div className="popup-box">
        <div className="box">
          <button className="btn-close" onClick={props.handleClose}>
            x
          </button>
          <form>
            <div className="customersprofile">
              <h1
                style={{
                  textAlign: "center",
                  padding: "7px",
                  fontSize: "2.5rem",
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                Profile
              </h1>
            </div>
            <div className="popupbody">
              <label>Name</label>
              <div className="inputGroup3">
                <input
                  name="lastName"
                  style={{
                    fontWeight: "bold",
                    textDecorationColor: "black",
                    borderRadius: "17px",
                    padding: "10px",
                  }}
                  disabled
                  value={data}
                />
              </div>
              <div className="inputGroup3">
                <label>Address</label>

                <input
                  name="address"
                  disabled
                  style={{
                    fontWeight: "bold",
                    textDecorationColor: "black",
                    borderRadius: "17px",
                    padding: "10px",
                  }}
                  value={add}
                />
              </div>
              <div className="inputGroup3">
                <label>Contact Number</label>
                <input
                  name="mobileNo"
                  style={{
                    fontWeight: "bold",
                    textDecorationColor: "black",
                    borderRadius: "17px",
                    padding: "10px",
                  }}
                  disabled
                  value={mobile}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Popup;
