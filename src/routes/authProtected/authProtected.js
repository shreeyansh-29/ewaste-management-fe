/*
  @module authProtected
*/
import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {renderRole} from "../../components/renderRole/renderRole";

export default function AuthProtected() {
  const isAuthenticated = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <>
      {role === renderRole.CUSTOMER && isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to="/404" />
      )}
      {role === renderRole.COLLECTOR && isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to="/404" />
      )}
      {role === renderRole.VENDOR && isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to="/404" />
      )}
    </>
  );
}
