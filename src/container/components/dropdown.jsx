import React from "react";
import PropTypes from "prop-types";
import "../signIn/signIn";

const Dropdown = ({values, data, placeholder, onChange, label}) => {
  const handleChange = (event) => {
    const {value} = event.target;
    onChange(value);
  };

  return (
    <div>
      <label>{label}</label>
      <select
        className="dropdown"
        value={values}
        onChange={handleChange}
        style={{
          marginLeft: "-7px",
          borderRadius: "17px",
          padding: "7px",
          width: "300px",
          background: "white",
          border: "1px solid lightgrey",
        }}
      >
        <option value="">{placeholder}</option>
        {data.map((item, key) => (
          <option key={key}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  value: "",
  placeholder: "",
};

export default Dropdown;
