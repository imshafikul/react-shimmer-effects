import React from "react";
import PropTypes from "prop-types";
import "./badge.scss";

const ShimmerBadge = ({ width }) => {
  const style = {};
  if (width) style.width = `${width}px`;

  return <div className="shimmer shimmer-badge" style={style} />;
};

ShimmerBadge.propTypes = {
  width: PropTypes.number,
};

export default ShimmerBadge;
