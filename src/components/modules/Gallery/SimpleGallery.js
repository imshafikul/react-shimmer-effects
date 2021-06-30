import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Thumbnail from "../../common/Image/Thumbnail";

const SimpleGallery = ({ row, col, gap, center, cssClasses }) => {
  const renderThumbnails = () => {
    const thumbnails = [];
    const items = row * col;

    for (let index = 0; index < items; index++) {
      thumbnails.push(<Thumbnail key={index} cssClasses="m-0" />);
    }

    return thumbnails;
  };

  return (
    <div
      className={classNames({
        "text-center": center,
      })}
    >
      <div
        className={classNames({
          grid: true,
          "grid-column-one-third": col === 3,
          "grid-column-one-fourth": col === 4,
          [`grid-gap-${gap}`]: true,
          [cssClasses]: true,
        })}
      >
        {renderThumbnails()}
      </div>
    </div>
  );
};

SimpleGallery.propTypes = {
  row: PropTypes.number,
  col: PropTypes.oneOf([3, 4]),
  gap: PropTypes.oneOf([20, 30]),
};

SimpleGallery.defaultProps = {
  row: 3,
  col: 3,
  gap: 20,
};

export default SimpleGallery;
