import React from "react";
import {SelectStyle} from "../../components/styles";
import {statesCity} from "./states";
import "./signUp.css";

function signUpStateField({...props}) {
  return (
    <>
      <div className="inputGroup">
        <label>
          State <i className="text-danger">*</i>
        </label>
        <SelectStyle
          id="state"
          className="form-select"
          value={props.state1}
          onChange={(e) => props.changeState(e)}
        >
          <option value="Select State">{"Select State"} </option>
          {statesCity.map((e, key) => {
            return (
              <option key={key} id="selectedState">
                {e.name}
              </option>
            );
          })}
        </SelectStyle>
        {props.touched.state && props.errors.state ? (
          <div className="formErrors">{props.errors.state}</div>
        ) : null}
      </div>
    </>
  );
}

export default signUpStateField;
