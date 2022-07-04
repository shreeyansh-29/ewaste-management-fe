/* eslint-disable indent */
import React, {useEffect, useState} from "react";
import {
  NavLogoutBtn,
  NavNotiIcon,
} from "../../../components/navbar/navbarelements";
import ".././customer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, NavDropdown, Nav, Container} from "react-bootstrap";
import Swal from "sweetalert2";
import {useDispatch, connect} from "react-redux";
import {customerProfileRequest} from "../../../redux/action/customer/customerProfileAction/customerProfileAction";
import {customerNotificationDataRequest} from "../../../redux/action/customer/customerNotificationAction/customerNotificationDataAction";
import {customerNotificationCountRequest} from "../../../redux/action/customer/customerNotificationAction/customerNotificationCountAction";
import {isEmpty} from "lodash";

const CustomerNav = ({res, result, result2}) => {
  // console.log(result2);
  const dispatch = useDispatch();
  const name = res.firstName;
  useEffect(() => {
    dispatch(customerProfileRequest());
    dispatch(customerNotificationCountRequest());
  }, []);
  const markAsRead = () => {
    dispatch(customerNotificationDataRequest());
    handle();
  };
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [List, setList] = useState([]);
  var list = ["No New Notifications"];
  useEffect(() => {
    if (result?.payload !== "No New Notification" && isEmpty(result) !== true) {
      localStorage.setItem("count", result?.payload.length);
      setCount(localStorage.getItem("count"));
    }
  }, [result]);

  useEffect(() => {
    if (result2?.data.status === "success") {
      for (var i = 0; i < result2.data.data.length; i++) {
        list[i] = result2.data.data[i].message;
      }
      setList(list);
    } else {
      list = ["No New Notifications"];
      setList(list);
    }
  }, [result2]);
  const displayNotification = (n) => {
    return (
      <h1>
        <span className="notification">{n}</span>
      </h1>
    );
  };
  const handle = () => {
    setShow(!show);
    if (show) {
      list = ["No New Notifications"];
      setList(list);
    }
    localStorage.removeItem("count");
    setCount(0);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="myblue"
        variant="dark"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="/CustomerHome" style={{marginLeft: "1%"}}>
            <div className="welcome">Welcome {name}</div>
          </Navbar.Brand>

          <Nav.Item>
            <button
              style={{background: "#101522", border: "none"}}
              onClick={() => markAsRead()}
              className="notification_button"
            >
              <div className="icon-button__badge">
                {count === "" ||
                count === "undefined" ||
                count === null ||
                count === 0 ? (
                  ""
                ) : (
                  <div className="navbarCount">{count}</div>
                )}
                <NavNotiIcon
                  style={
                    count === "" ||
                    count === null ||
                    count === "undefined" ||
                    count === 0
                      ? {color: "white", marginLeft: "24.5px"}
                      : {color: "white", marginBottom: "20px"}
                  }
                ></NavNotiIcon>
              </div>
            </button>

            {show ? (
              <div className="notifications">
                {List.map((n) => displayNotification(n))}
              </div>
            ) : (
              ""
            )}
          </Nav.Item>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" style={{marginRight: "2%"}}>
              <NavDropdown
                title="Requests"
                id="collasible-nav-dropdown"
                style={{padding: "10px"}}
              >
                <NavDropdown.Item href="/Request/PickUp">
                  Pick Up
                </NavDropdown.Item>
                <NavDropdown.Item href="/Request/DropOff">
                  Drop Off
                </NavDropdown.Item>
                <NavDropdown.Item href="/Request/MyRequests">
                  My Requests
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Drives/Waste" style={{padding: "18px"}}>
                Drives
              </Nav.Link>
              <Nav.Link style={{padding: "18px"}} href="/CustomerProfile">
                Profile
              </Nav.Link>
              <Nav.Link>
                <button
                  className="Btn"
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#228B22",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Logout",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        localStorage.clear();
                        window.location.href = "/Signin";
                      }
                    });
                  }}
                >
                  <NavLogoutBtn />
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.customerProfile?.data,
    result: state.customerNotificationCount?.data,
    result2: state.customerNotificationData,
  };
};

export default connect(mapStateToProps)(CustomerNav);
