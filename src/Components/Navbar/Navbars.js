import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../buttonStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavIcon, NavHomeIcon, NavLoginIcon } from "./Navbarelements";
function Navbars() {
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
          <Nav.Link href="/" style={{ color: "white" }}>
            <div className="title">
              <NavIcon />
              EWaste Management
            </div>
          </Nav.Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" style={{ marginRight: "1%" }}>
              <Nav.Link href="/" style={{ padding: "18px", color: "white" }}>
                <NavHomeIcon />
              </Nav.Link>
              <Nav.Link
                href="/Signin"
                style={{ padding: "18px", color: "white" }}
              >
                <NavLoginIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
