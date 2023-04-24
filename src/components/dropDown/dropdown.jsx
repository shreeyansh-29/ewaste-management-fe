import React from "react";
import PropTypes from "prop-types";
import "./dropdown.css";

const Dropdown = (props) => {
  const {role, data, onChange} = props;
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div>
      <select className="dropdown1" value={role} onChange={handleChange}>
        <option>Select your Role</option>
        {data.map((item, key) => (
          <option key={key} value={item.label}>
            {item.label}
          </option>
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
