/*
  @module vendorNav
*/

import React, {useEffect} from "react";
import Swal from "sweetalert2";
import {NavLogoutBtn} from "../../../components/navbar/navbar.styles";
import {Navbar, NavDropdown, Container, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {connect, useDispatch} from "react-redux";
import {vendorNameRequest} from "../../../redux/action/vendor/vendorNameAction/vendorNameAction";
import "../vendor.css";

const VendorNav = ({res}) => {
  const dispatch = useDispatch();
  const name = res.firstName;

  useEffect(() => {
    dispatch(vendorNameRequest());
  }, []);

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
          <Navbar.Brand href="/VendorHome" className="vendorNavBrand">
            <div className="welcome">Welcome {name}</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="respohttp://localhost:3000/VendorHomensive-navbar-nav">
            <Nav className="ms-auto vendorNav">
              <NavDropdown
                title="My Orders"
                id="collasible-nav-dropdown"
                className="vendorNavDropDown"
              >
                <NavDropdown.Item href="/MyOrders/PurchaseItems">
                  Purchase Items
                </NavDropdown.Item>
                <NavDropdown.Item href="/MyOrders/SalesSummary">
                  Items Summary
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/VendorProfile" className="vendorNavLink">
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
                        window.location.href = "/Signin";
                        localStorage.clear();
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
    res: state.vendorName?.data,
  };
};

export default connect(mapStateToProps)(VendorNav);
