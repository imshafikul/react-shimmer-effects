import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Thumbnail from "../../common/Image/Thumbnail";

const SimpleGallery = ({ row, col, gap, cssClasses, fitOnFrame }) => {
  const renderThumbnails = () => {
    const thumbnails = [];
    const items = row * col;

    for (let index = 0; index < items; index++) {
      thumbnails.push(
        <Thumbnail
          key={index}
          cssClasses={classNames({
            "m-0": true,
            "h-100": fitOnFrame,
          })}
        />
      );
    }

    return thumbnails;
  };

  return (
    <div
      className={classNames({
        grid: true,
        [`grid-gap-${gap}`]: true,
        [`grid-column-${col}`]: true,
        [cssClasses]: cssClasses,
      })}
    >
      {renderThumbnails()}
    </div>
  );
};

SimpleGallery.propTypes = {
  row: PropTypes.number,
  col: PropTypes.oneOf([2, 3, 4]),
  gap: PropTypes.oneOf([20, 30]),
  fitOnFrame: PropTypes.bool,
};

SimpleGallery.defaultProps = {
  row: 3,
  col: 3,
  gap: 20,
  fitOnFrame: false,
};

export default SimpleGallery;
