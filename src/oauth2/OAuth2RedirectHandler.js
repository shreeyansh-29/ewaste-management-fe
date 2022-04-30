import React, { Component } from "react";
import { notificationcount } from "../utils/notificationcount";
import { profile } from "../utils/profile";
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
    localStorage.setItem("exp",tokens.exp);
    console.log(tokens);
    localStorage.setItem("email", tokens.sub);
    if (localStorage.getItem("Roles") === "CUSTOMER") {
      let val = await profile("customer");
      localStorage.setItem("name", val.data.firstName);

      let result = await notificationcount("customer");
      if (result.status === "fail") {
        localStorage.setItem("count", "0");
      } else if (result.status === "success") {
        localStorage.setItem("count", result.data.length);
      }
    }
    if (localStorage.getItem("Roles") === "COLLECTOR") {
      try {
        let res1 = await profile("collector");

        localStorage.setItem("name", res1.data.firstName);

        let result = await notificationcount("collector");
        if (result.status === "fail") {
          localStorage.setItem("count", "0");
        } else if (result.status === "success") {
          localStorage.setItem("count", result.data[0].length);
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (localStorage.getItem("Roles") === "VENDOR") {
      try {
        let ress = await profile("vendor");

        localStorage.setItem("name", ress.data.firstName);
      } catch (err) {
        console.log(err);
      }
    }
    if (localStorage.getItem("Roles") === "CUSTOMER") {
      this.customerRedirect();
    } else if (localStorage.getItem("Roles") === "COLLECTOR") {
      this.collectorRedirect();
    } else if (localStorage.getItem("Roles") === "VENDOR") {
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
  redirect=()=>{
    window.location.href = "/Signin";
  }
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
