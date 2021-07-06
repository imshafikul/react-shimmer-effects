import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CircularImage = ({ size, center, cssClasses }) => {
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
      <div
        style={style}
        className={classNames({
          "shimmer shimmer-avatar": true,
          [cssClasses]: cssClasses,
        })}
      ></div>
    </div>
  );
};

CircularImage.propTypes = {
  size: PropTypes.number,
  center: PropTypes.bool,
  cssClasses: PropTypes.string,
};

CircularImage.defaultProps = {
  canter: false,
};

export default CircularImage;
