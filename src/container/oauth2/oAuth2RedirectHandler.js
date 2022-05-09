import React, { Component } from "react";import {
  COLLECTOR_AUTH_URL,
  COLLECTOR_NOTIFICATION_URL,
  CUSTOMER_AUTH_URL,
  CUSTOMER_NOTIFICATION_URL,
  VENDOR_AUTH_URL,
} from "../constant/constant";

import api from "../../core/utilities/httpProvider";
import jwt from "jwt-decode";
class OAuth2RedirectHandler extends Component {
  getUrlParameter(name) {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(window.location.href);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  apicall = async () => {
    var tokens = localStorage.getItem("token");
    tokens = jwt(tokens);
    localStorage.setItem("Roles", tokens.Roles[0]);
    localStorage.setItem("email", tokens.sub);
    const role = localStorage.getItem("Roles");
    var val;
    var result;

    if (role === "CUSTOMER") {
      val = await api.get(CUSTOMER_AUTH_URL);
      result = await api.get(CUSTOMER_NOTIFICATION_URL);
    }
    if (role === "COLLECTOR") {
      val = await api.get(COLLECTOR_AUTH_URL);
      result = await api.get(COLLECTOR_NOTIFICATION_URL);
    }
    if (role === "VENDOR") {
      val = await api.get(VENDOR_AUTH_URL);
    }
    localStorage.setItem("name", val.data.firstName);
    if (role === "CUSTOMER" || role === "COLLECTOR") {
      if (result.status === "fail") {
        localStorage.setItem("count", "0");
      } else if (result.status === "success") {
        localStorage.setItem("count", result.data.length);
      }
      console.log(localStorage.getItem("count"));
    }

    if (role === "CUSTOMER") {
      this.customerRedirect();
    } else if (role === "COLLECTOR") {
      this.collectorRedirect();
    } else if (role === "VENDOR") {
      this.vendorRedirect();
    }
  };
  customerRedirect = () => {
    window.location.href = "/CustomerHome";
  };
  collectorRedirect = () => {
    window.location.href = "/CollectorHome";
  };
  vendorRedirect = () => {
    window.location.href = "/VendorHome";
  };
  redirect = () => {
    window.location.href = "/Signin";
  };
  render() {
    const token = this.getUrlParameter("token");
    const error = this.getUrlParameter("error");
    if (token) {
      localStorage.setItem("token", token);
      return <div>{this.apicall()}</div>;
    } else if (error) {
      return <div>{this.redirect()}</div>;
    }
  }
}

export default OAuth2RedirectHandler;
