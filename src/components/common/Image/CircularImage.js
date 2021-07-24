import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ShimmerCircularImage = ({ size, center, className }) => {
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
          [className]: className,
        })}
      ></div>
    </div>
  );
};

ShimmerCircularImage.propTypes = {
  size: PropTypes.number,
  center: PropTypes.bool,
  className: PropTypes.string,
};

ShimmerCircularImage.defaultProps = {
  center: false,
  size: 80,
};

export default ShimmerCircularImage;
