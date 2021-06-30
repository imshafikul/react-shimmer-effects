import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Thumbnail = ({ height, width, center, cssClasses }) => {
  const style = {};
  if (height) style.height = `${height}px`;
  if (width) style.width = `${width}px`;

  return (
    <div
      className={classNames({
        "text-center": center,
      })}
    >
      <div
        className={classNames({
          "shimmer shimmer-thumbnail": true,
          [cssClasses]: true,
        })}
        style={style}
      ></div>
    </div>
  );
};

Thumbnail.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  center: PropTypes.bool,
  cssClasses: PropTypes.string,
};

Thumbnail.defaultProps = {
  canter: false,
};

export default Thumbnail;
