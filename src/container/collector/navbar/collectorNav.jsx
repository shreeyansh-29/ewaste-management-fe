/* eslint-disable indent */
import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
import {
  NavLogoutBtn,
  NavNotiIcon,
} from "../../components/navbar/navbarelements";
import "../../customer/customer.css";
import "../Collector.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, NavDropdown, Container, Nav} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {collectorProfileRequest} from "../../../redux/action/collector/collectorProfileAction/collectorProfileAction";
import {collectorNotificationCountRequest} from "../../../redux/action/collector/collectorNotificationAction/collectorNotificationCountAction";
import {isEmpty} from "lodash";
import {collectorNotificationDataRequest} from "../../../redux/action/collector/collectorNotificationAction/collectorNotificationDataAction";

function collectorNav() {
  const dispatch = useDispatch();
  let res = useSelector((state) => state.collectorProfile);
  let result2 = useSelector((state) => state.collectorNotificationData);
  let result = useSelector((state) => state.collectorNotificationCount);
  const [count, setCount] = useState();
  useEffect(() => {
    dispatch(collectorProfileRequest());
    dispatch(collectorNotificationCountRequest());
  }, []);
  const markAsRead = () => {
    dispatch(collectorNotificationDataRequest());
    handle();
  };
  useEffect(() => {
    if (
      result?.data.payload !== "No New Notification" &&
      isEmpty(result?.data) !== true
    ) {
      localStorage.setItem("count", result?.data?.payload.length);
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
  const [show, setShow] = useState(false);
  const [List, setList] = useState([]);
  var list = ["hh"];
  const name = res.data.firstName;
  const displayNotification = (n) => {
    return (
      <h1>
        {" "}
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
          <Navbar.Brand href="/CollectorHome" style={{marginLeft: "0.5%"}}>
            <div className="welcome">Welcome {name}</div>
          </Navbar.Brand>
          <Nav.Item className="bell">
            <button
              style={{background: "#101522", border: "none"}}
              onClick={() => markAsRead()}
            >
              <div className="icon-button__badge1">
                {count === "" ||
                count === "undefined" ||
                count === null ||
                count === 0 ? (
                  ""
                ) : (
                  <div
                    style={{
                      color: "white",
                      marginLeft: "18px",
                      borderRadius: "17px",
                      width: "20px",
                      top: "7px",
                      left: "4px",
                      position: "relative",
                    }}
                  >
                    {count}
                  </div>
                )}
                <NavNotiIcon
                  style={
                    count === "" ||
                    count === null ||
                    count === "undefined" ||
                    count === 0
                      ? {color: "white"}
                      : {color: "white", marginBottom: "20px"}
                  }
                ></NavNotiIcon>
              </div>
            </button>

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
                  }).then((result) => {
                    if (result.isConfirmed) {
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

export default collectorNav;
