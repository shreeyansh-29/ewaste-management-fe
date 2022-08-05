import React from "react";
import "./signUp.css";
import Dropdown from "../../components/dropDown/dropdown";

function signUpRoleField({...props}) {
  return (
    <div className="inputGroup">
      <label id="role">
        Role <i className="text-danger">*</i>
      </label>
      <div id="role" className="role">
        <>
          <Dropdown
            data={[
              {label: "Customer"},
              {label: "Collector"},
              {label: "Vendor"},
            ]}
            name="role"
            value={props.role}
            className="signUpField"
            placeholder="Select your Role"
            onChange={(e) => props.handleDropdown(e)}
          />
        </>
      </div>
    </div>
  );
}

export default signUpRoleField;
