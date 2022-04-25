import styled from "styled-components";
import {BsPerson, BsBell} from "react-icons/bs";
import {GiGreenPower} from "react-icons/gi";
import {ImHome} from "react-icons/im";
import {Link} from "react-router-dom";
import {Container} from "../../globalStyles";

import {FiLogOut} from "react-icons/fi";

export const Nav = styled.nav`
  background: #101522;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  position: sticky;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  @media screen and (min-width: 370px) {
  @media screen and (max-width: 400px) {
    font-size:1.3rem;
  }
}
  @media screen and (min-width: 280px) {
    @media screen and (max-width: 360px) {
    font-size:0.8rem;
  }
}
`;

export const NavIcon = styled(GiGreenPower)`
  margin-right: 0.5rem;
`;
export const NavHomeIcon = styled(ImHome)`
  margin-right: 0.5rem;
  margin-top: 0.6rem;
`;
export const NavLoginIcon = styled(BsPerson)`
  margin-top: 0.6rem;
  margin-right: 0.5rem;
`;
export const NavNotiIcon = styled(BsBell)`
  margin-right: 0;
`;
export const NavLogoutBtn = styled(FiLogOut)`
  margin-right: 0.4rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: -7px;
    right: 20px;
    transform: translate(-100%, 60%);
    font-size: 1.7rem;
    cursor: pointer;
  }
  @media screen and (max-width: 400px) {
    display: block;
    position: absolute;
    top: 3.5px;
    font-size:1.3rem;
  }
  @media screen and (min-width: 280px) {
    @media screen and (max-width: 360px) {
    font-size:0.8rem;
    top:17px;
  }
}
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 60px;
    left: ${({click}) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 50px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
