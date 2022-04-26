// import React, {useState} from "react";
// import {FaBars, FaTimes} from "react-icons/fa";
// import {IconContext} from "react-icons/lib";
// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   NavIcon,
//   MobileIcon,
//   NavMenu,
//   NavItem,
//   NavLinks,
//   NavHomeIcon,
//   NavLoginIcon,
// } from "./Navbarelements";

// function Navbar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   return (
//     <>
//       <IconContext.Provider value={{color: "#fff"}}>
//         <Nav>
//           <NavbarContainer>
//             <NavLogo to="/" onClick={closeMobileMenu}>
//               <NavIcon />
//               EWaste Management
//             </NavLogo>
//             <MobileIcon onClick={handleClick}>
//               {click ? <FaTimes /> : <FaBars />}
//             </MobileIcon>
//             <NavMenu onClick={handleClick} click={click}>
//               <NavItem>
//                 <NavLinks to="/" onClick={closeMobileMenu}>
//                   <NavHomeIcon />
//                 </NavLinks>
//               </NavItem>
//               <NavItem>
//                 <NavLinks to="/Signin" onClick={closeMobileMenu}>
//                   <NavLoginIcon />
//                 </NavLinks>
//               </NavItem>
//             </NavMenu>
//           </NavbarContainer>
//         </Nav>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default Navbar;
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
