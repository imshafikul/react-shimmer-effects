import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./button.scss";

const Button = ({ size }) => (
  <div
    className={classNames({
      "shimmer shimmer-button": true,
      [`shimmer-button--${size}`]: true,
    })}
  />
);

Button.propTypes = {
  size: PropTypes.oneOf(["lg", "md", "sm"]),
};

Button.defaultProps = {
  size: "md",
};

export default Button;
