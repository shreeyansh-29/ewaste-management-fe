import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const AuthProtected = () => {
  const isAuthenticated = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  {
    role === "CUSTOMER" && isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to="/404" />
    );
  }
  {
    role === "COLLECTOR" && isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to="/404" />
    );
  }
  {
    role === "VENDOR" && isAuthenticated ? <Outlet /> : <Navigate to="/404" />;
  }
};

export default AuthProtected;
