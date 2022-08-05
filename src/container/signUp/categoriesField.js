import React from "react";
import ReactTooltip from "react-tooltip";
import Select from "react-select";
import "./signUp.css"

function CategoriesField({...props}) {
  return (
    <>
      <label
        htmlFor="categories"
        data-tip
        data-for="Tip"
        className="categoriesLabel"
      >
        Categories <i className="text-danger">*</i>
      </label>
      <ReactTooltip id="Tip" place="bottom" effect="solid">
        Select the categories of ewaste you can collect from customers
      </ReactTooltip>
      {props.categoryAccepted.map((v, i) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="inputGroups categories">
            <Select
              value={props.categoryAccepted.category}
              options={props.data}
              placeholder="Select Categories"
              onChange={(e) => props.handleInputChange(e, i)}
              isMulti
            />
          </div>
        );
      })}
      {() => {
        if (props.errors.category) {
          <div className="formErrors">{props.errors.category}</div>;
        }
      }}
    </>
  );
}

export default CategoriesField;
