import React from "react";
import PropTypes from "prop-types";
import "./badge.scss";

const Badge = ({ width }) => {
  const style = {};
  if (width) style.width = `${width}px`;

  return <div className="shimmer shimmer-badge" style={style} />;
};

Badge.propTypes = {
  width: PropTypes.number,
};

export default Badge;
