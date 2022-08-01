/*
  @module customerNavbar
*/
import React, {useEffect, useState} from "react";
import {NavLogoutBtn} from "../../../components/navbar/navbar.styles";
import "../customer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, NavDropdown, Nav, Container} from "react-bootstrap";
import Swal from "sweetalert2";
import {useDispatch, connect} from "react-redux";
import {customerNotificationDataRequest} from "../../../redux/action/customer/customerNotificationAction/customerNotificationDataAction";
import {customerNotificationCountRequest} from "../../../redux/action/customer/customerNotificationAction/customerNotificationCountAction";
import {isEmpty} from "lodash";
import {NavbarButton} from "../../../components/styles";
import NotificationCount from "../../collectorContainer/navbar/notificationCount";
import {customerNameRequest} from "../../../redux/action/customer/customerNameAction/customerNameAction";

const CustomerNav = ({res, result1, result2}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customerNameRequest());
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
    if (
      result1?.payload !== "No New Notification" &&
      isEmpty(result1) !== true
    ) {
      localStorage.setItem("count", result1?.payload.length);
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
          <Navbar.Brand href="/CustomerHome" className="navbarBrand">
            <div className="welcome">Welcome {res}</div>
          </Navbar.Brand>

          <Nav.Item>
            <NavbarButton
              onClick={() => markAsRead()}
              className="notification_button"
            >
              <NotificationCount count={count} />
            </NavbarButton>

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
            <Nav className="ms-auto customerNav">
              <NavDropdown
                title="Requests"
                id="collasible-nav-dropdown"
                className="customerNavDropDown"
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
              <Nav.Link href="/Drives/Waste" className="customerNavLink">
                Drives
              </Nav.Link>
              <Nav.Link className="customerNavLink" href="/CustomerProfile">
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
    res: state.customerName?.data.firstName,
    result: state.customerNotificationCount?.data,
    result2: state.customerNotificationData,
  };
};

export default connect(mapStateToProps)(CustomerNav);
