/*
  @module collectorNav
*/
/* eslint-disable indent */
import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
import {NavLogoutBtn} from "../../../components/navbar/navbar.styles";
import "../../customerContainer/customer.css";
import "../collector.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, NavDropdown, Container, Nav} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {collectorNotificationCountRequest} from "../../../redux/action/collector/collectorNotificationAction/collectorNotificationCountAction";
import {isEmpty} from "lodash";
import {collectorNotificationDataRequest} from "../../../redux/action/collector/collectorNotificationAction/collectorNotificationDataAction";
import {NavbarButton} from "../../../components/styles";
import NotificationCount from "./notificationCount";
import {collectorNameRequest} from "../../../redux/action/collector/collectorNameAction/collectorNameAction";

function CollectorNav() {
  const res = useSelector((state) => state.collectorName?.data.firstName);
  const result1 = useSelector((state) => state.collectorNotificationCount);
  const result2 = useSelector((state) => state.collectorNotificationData);

  const [show, setShow] = useState(false);
  const [List, setList] = useState([]);
  var list = ["hh"];

  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  useEffect(() => {
    dispatch(collectorNameRequest());
    dispatch(collectorNotificationCountRequest());
  }, []);
  const markAsRead = () => {
    dispatch(collectorNotificationDataRequest());
    handle();
  };
  useEffect(() => {
    if (
      result1?.data.payload !== "No New Notification" &&
      isEmpty(result1?.data) !== true
    ) {
      localStorage.setItem("count", result1?.data?.payload.length);
      setCount(localStorage.getItem("count"));
    }
  }, [result1]);
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
  /* 
    @function displayNotification
    @params {n}  specifies the list of all the notifications
    @return display the list of notifications received
  */
  const displayNotification = (n) => {
    return (
      <h1>
        <span className="notification">{n}</span>
      </h1>
    );
  };
  /* 
    @function handle
    @detail update the value of show and accordingly updates the value of notification list
  */
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
          <Navbar.Brand href="/CollectorHome" style={{marginLeft: "0.5%"}}>
            <div className="welcome">Welcome {res}</div>
          </Navbar.Brand>
          <Nav.Item className="bell">
            <NavbarButton id="count" onClick={markAsRead}>
              <NotificationCount count={count} />
            </NavbarButton>

            {show ? (
              <div className="notifications1">
                {List.map((n) => displayNotification(n))}
              </div>
            ) : (
              ""
            )}
          </Nav.Item>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown
                title="Requests"
                id="collasible-nav-dropdown"
                style={{padding: "10px"}}
              >
                <NavDropdown.Item href="/Request/CollectorRequests">
                  Request
                </NavDropdown.Item>
                <NavDropdown.Item href="/Request/MyRequests">
                  My Requests
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Drives"
                id="collasible-nav-dropdown"
                style={{padding: "10px"}}
              >
                <NavDropdown.Item href="/Drive/OrganizeDrive">
                  Organize Drive
                </NavDropdown.Item>
                <NavDropdown.Item href="/Drive/MyDrives">
                  My Drives
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Sales"
                id="collasible-nav-dropdown"
                style={{padding: "10px"}}
              >
                <NavDropdown.Item href="/Sales/ItemsForSale">
                  On Sale
                </NavDropdown.Item>
                <NavDropdown.Item href="/Sales/SaleItems">
                  Sales Summary
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/CollectorProfile" style={{padding: "18px"}}>
                Profile
              </Nav.Link>
            </Nav>

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
                  }).then((results) => {
                    if (results.isConfirmed) {
                      window.location.href = "/Signin";
                      localStorage.clear();
                    }
                  });
                }}
              >
                <NavLogoutBtn />
              </button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CollectorNav;
