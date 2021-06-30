import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CircularImage = ({ size, center }) => {
  const style = {};
  if (size) {
    style.width = `${size}px`;
    style.height = `${size}px`;
  }

  return (
    <div
      className={classNames({
        "text-center": center,
      })}
    >
      <div className="shimmer shimmer-avatar" style={style}></div>
    </div>
  );
};

CircularImage.propTypes = {
  size: PropTypes.number,
  center: PropTypes.bool,
};

CircularImage.defaultProps = {
  canter: false,
};

export default CircularImage;
