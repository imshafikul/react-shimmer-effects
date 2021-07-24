import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ShimmerThumbnail = ({
  height,
  width,
  center,
  className,
  fitOnFrame,
  rounded,
}) => {
  const style = {};
  if (height) style.height = `${height}px`;
  if (width) style.width = `${width}px`;

  return (
    <div
      className={classNames({
        "h-100": fitOnFrame,
        "text-center ": center,
      })}
    >
      <div
        className={classNames({
          "h-100": fitOnFrame,
          "shimmer shimmer-thumbnail": true,
          "border-rounded": rounded,
          [className]: className,
        })}
        style={style}
      ></div>
    </div>
  );
};

ShimmerThumbnail.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  center: PropTypes.bool,
  className: PropTypes.string,
  fitOnFrame: PropTypes.bool,
  rounded: PropTypes.bool,
};

ShimmerThumbnail.defaultProps = {
  canter: false,
  fitOnFrame: false,
  rounded: false,
  height: 250,
};

export default ShimmerThumbnail;
