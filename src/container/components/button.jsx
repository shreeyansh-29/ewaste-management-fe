import React from "react";
import PropTypes from "prop-types";

import "./signin.css";

const Button = ({value, onClick}) => (
  <button className="app-button1" onClick={(event) => onClick(event)}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
