import React from "react";
import PropTypes from "prop-types";
import "../../container/signIn/signIn";

const Dropdown = (props) => {
  const {role, data, onChange} = props;
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div>
      <select
        className="dropdown"
        value={role}
        onChange={handleChange}
        style={customStyles}
      >
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

const customStyles = {
  marginLeft: "-7px",
  borderRadius: "17px",
  padding: "7px",
  width: "300px",
  background: "white",
  border: "1px solid lightgrey",
};

export default Dropdown;
