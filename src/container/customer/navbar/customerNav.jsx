import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavLogoutBtn,
  NavNotiIcon,
} from "../../components/navbar/navbarelements";
import "../Customer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import api from "../../../core/utilities/httpProvider";
import Swal from "sweetalert2";
import { CUSTOMER_NOTIFICATION_MARKASREAD } from "../../constant/constant";
function CustomerNav() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [List, setList] = useState([]);
  var list = ["hh"];
  const c = localStorage.getItem("count");
  const name = localStorage.getItem("name");

  const markAsRead = async () => {
    const res = await api.post(CUSTOMER_NOTIFICATION_MARKASREAD);

    if (res.status === "success") {
      for (var i = 0; i < res.data.length; i++) {
        list[i] = res.data[i].message;
      }
    } else {
      list = ["No New Notifications"];
    }
    setList(list);
    handle();
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
          <Navbar.Brand href="./CustomerHome" style={{ marginLeft: "1%" }}>
            <div className="welcome">Welcome {name}</div>
          </Navbar.Brand>

          <Nav.Item>
            <button
              style={{ background: "#101522", border: "none" }}
              onClick={() => markAsRead()}
              className="notification_button"
            >
              <div className="icon-button__badge">
                {c === "0" ? "" : <div className="navbarCount">{c}</div>}
                <NavNotiIcon
                  style={
                    c === "0" || c === null
                      ? { color: "white", marginLeft: "24.5px" }
                      : { color: "white", marginBottom: "20px" }
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
            <Nav className="ms-auto" style={{ marginRight: "2%" }}>
              <NavDropdown
                title="Requests"
                id="collasible-nav-dropdown"
                style={{ padding: "10px" }}
              >
                <NavDropdown.Item href="./PickUp">Pick Up</NavDropdown.Item>
                <NavDropdown.Item href="./DropOff">Drop Off</NavDropdown.Item>
                <NavDropdown.Item href="/MyRequests">
                  My Requests
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="./Waste" style={{ padding: "18px" }}>
                Drives
              </Nav.Link>
              <Nav.Link style={{ padding: "18px" }} href="./EditProfile">
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
                        navigate("/Signin");
                        document.location.reload();
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
}

export default CustomerNav;
