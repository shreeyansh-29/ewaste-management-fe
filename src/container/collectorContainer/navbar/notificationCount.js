/* 
  @module notificationCount
*/
/* eslint-disable indent */
import React from "react";
import {NavNotiIcon} from "../../../components/navbar/navbar.styles";
export default function NotificationCount(props) {
  return (
    <div>
      <div className="icon-button__badge1">
        {props.count == "" ||
        props.count == "undefined" ||
        props.count === null ||
        props.count === 0 ? (
          ""
        ) : (
          <div className="navbar-Count">{props.count}</div>
        )}
        <NavNotiIcon
          style={
            props.count == "" ||
            props.count === null ||
            props.count == "undefined" ||
            props.count === 0
              ? {color: "white"}
              : {color: "white", marginBottom: "20px"}
          }
        ></NavNotiIcon>
      </div>
    </div>
  );
}
