/* eslint-disable indent */
import React from "react";
import {SelectStyle} from "../../components/styles";
import {isEmpty} from "lodash";
import "./signUp.css";

function signUpCityField({...props}) {
  return (
    <>
      <div className="inputGroup">
        <label id="city">
          City <i className="text-danger">*</i>
        </label>
        <SelectStyle
          id="city"
          className="form-select"
          value={props.city}
          onChange={(e) => props.changeCity(e)}
        >
          <option value="Select City">{"Select city"}</option>
          {isEmpty(props.initialCities) !== true
            ? props.initialCities?.cities.map((e, key) => {
                return <option key={key}>{e}</option>;
              })
            : ""}
        </SelectStyle>
        {props.touched.city && props.errors.city ? (
          <div className="formErrors">{props.errors.city}</div>
        ) : null}
      </div>
    </>
  );
}

export default signUpCityField;
