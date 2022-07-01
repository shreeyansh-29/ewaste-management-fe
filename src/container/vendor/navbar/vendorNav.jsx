import React from "react";
import Swal from "sweetalert2";
import {NavLogoutBtn} from "../../components/navbar/navbarelements";
import {Navbar, NavDropdown, Container, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch} from "react-redux";
import {vendorNameRequest} from "../../../redux/action/vendor/vendorNameAction/vendorNameAction";
import {useSelector} from "react-redux";

const VendorNav = () => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.vendorName);
  // console.log(res);
  const name = res.data.payload;
  // console.log(name);

  React.useEffect(() => {
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
          <Navbar.Brand href="/VendorHome" style={{marginLeft: "2%"}}>
            <div className="welcome">Welcome {name}</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="respohttp://localhost:3000/VendorHomensive-navbar-nav">
            <Nav className="ms-auto" style={{marginRight: "1%"}}>
              <NavDropdown
                title="My Orders"
                id="collasible-nav-dropdown"
                style={{padding: "10px"}}
              >
                <NavDropdown.Item href="/MyOrders/PurchaseItems">
                  Purchase Items
                </NavDropdown.Item>
                <NavDropdown.Item href="/MyOrders/SalesSummary">
                  Items Summary
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/VendorProfile" style={{padding: "18px"}}>
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

export default VendorNav;
