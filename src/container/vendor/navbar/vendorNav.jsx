import React from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {NavLogoutBtn} from "../../components/navbar/navbarelements";
import {Navbar, NavDropdown, Container, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch} from "react-redux";
import {vendorNameRequest} from "../../../redux/action/vendor/vendorNameAction/vendorNameAction";
import {useSelector} from "react-redux";

function VendorNav() {
  const navigate = useNavigate();
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
          <Navbar.Brand href="./VendorHome" style={{marginLeft: "2%"}}>
            <div className="welcome">Welcome {name}</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" style={{marginRight: "1%"}}>
              <NavDropdown
                title="My Orders"
                id="collasible-nav-dropdown"
                style={{padding: "10px"}}
              >
                <NavDropdown.Item href="./Sales">
                  Purchase Items
                </NavDropdown.Item>
                <NavDropdown.Item href="../MyOrders">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default VendorNav;
