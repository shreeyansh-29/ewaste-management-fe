import React from "react";
import PropTypes from "prop-types";
import "./buttonStyles.css";

const InputField = ({value, label, placeholder, type, onChange}) => {
  const handleChange = (event) => {
    const {value} = event.target;

    onChange(value);
  };
  return (
    <div className="form-group">
      {label && <label htmlFor="app-input-field">{label}</label>}

      <input
        style={{borderRadius: "17px", width: "300px"}}
        type={type}
        value={value}
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: "",
  label: "",
  placeholder: "",
  type: "text",
};

export default InputField;
