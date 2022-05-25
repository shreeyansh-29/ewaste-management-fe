import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {
  NavLogoutBtn,
  NavNotiIcon,
} from "../../components/navbar/navbarelements";

import api from "../../../core/utilities/httpProvider";
import "../../customer/customer.css";
import "../Collector.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, NavDropdown, Container, Nav} from "react-bootstrap";
import {COLLECTOR_NOTIFICATION_MARKASREAD} from "../../constant/constant";
function CollectorNav() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [List, setList] = useState([]);
  var list = ["hh"];
  const c = localStorage.getItem("count");
  const name = localStorage.getItem("name");
  const markAsRead = async () => {
    try {
      var res = await api.post(COLLECTOR_NOTIFICATION_MARKASREAD);
      res = await res.json();

      if (res.status === "success") {
        for (var i = 0; i < res.data.length; i++) {
          list[i] = res.data[i].message;
        }
      } else {
        list = ["No New Notifications"];
      }
      setList(list);
      handle();
    } catch (err) {
      console.log(err);
    }
  };

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
          <Navbar.Brand href="./CollectorHome" style={{marginLeft: "0.5%"}}>
            <div className="welcome">Welcome {name}</div>
          </Navbar.Brand>
          <Nav.Item className="bell">
            <button
              style={{background: "#101522", border: "none"}}
              onClick={() => markAsRead()}
            >
              <div className="icon-button__badge1">
                {c === "0" ? (
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
                    {c}
                  </div>
                )}
                <NavNotiIcon
                  style={
                    c === "0" || c === null
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
                <NavDropdown.Item href="./CollectorRequests">
                  Request
                </NavDropdown.Item>
                <NavDropdown.Item href="./RequestSummary">
                  My Requests
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Drives"
                id="collasible-nav-dropdown"
                style={{padding: "10px"}}
              >
                <NavDropdown.Item href="./OrganizeDrive">
                  Organize Drive
                </NavDropdown.Item>
                <NavDropdown.Item href="./MyDrives">My Drives</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Sales"
                id="collasible-nav-dropdown"
                style={{padding: "10px"}}
              >
                <NavDropdown.Item href="./ItemsForSale">
                  On Sale
                </NavDropdown.Item>
                <NavDropdown.Item href="./SaleItems">Invoices</NavDropdown.Item>
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
                      navigate("/Signin");
                      localStorage.clear();
                      document.location.reload();
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
