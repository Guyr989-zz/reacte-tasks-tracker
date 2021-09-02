import React from "react";
import PropTypes from "prop-types";

function Button({ text, color, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: "red",
  fontSize: "20px",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
