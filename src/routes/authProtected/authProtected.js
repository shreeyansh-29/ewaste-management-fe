/*
  @module authProtected
*/
import React from "react";
import {Navigate, Outlet} from "react-router-dom";

export default function AuthProtected() {
  const isAuthenticated = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <>
      {role === "CUSTOMER" && isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to="/404" />
      )}
      {role === "COLLECTOR" && isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to="/404" />
      )}
      {role === "VENDOR" && isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to="/404" />
      )}
    </>
  );
}
