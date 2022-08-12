import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import "../button/buttonStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {NavIcon, NavHomeIcon, NavLoginIcon} from "./navbar.styles";

const Navbars = () => {
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
          <Nav.Link href="/" className="navbarLink">
            <div className="title">
              <NavIcon />
              EWaste Management
            </div>
          </Nav.Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navbarNav">
              <Nav.Link href="/" className="navLinkHref">
                <NavHomeIcon />
              </Nav.Link>
              <Nav.Link
                href="/Signin"
                className="navLinkHref"
              >
                <NavLoginIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
