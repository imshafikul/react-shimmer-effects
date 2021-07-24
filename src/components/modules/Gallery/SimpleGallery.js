import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ShimmerThumbnail, ShimmerCircularImage } from "../../common/Image";
import ShimmerTitle from "../../common/Title";
import ShimmerCard from "../../common/Card";

const ShimmerSimpleGallery = ({
  row,
  col,
  gap,
  className,
  fitOnFrame,
  imageType,
  imageHeight,
  caption,
  card,
}) => {
  const renderPhotos = () => {
    const photos = [];
    const items = row * col;

    for (let index = 0; index < items; index++) {
      photos.push(
        <div key={index}>
          {imageType === "thumbnail" && (
            <ShimmerThumbnail
              key={index}
              fitOnFrame={fitOnFrame}
              height={imageHeight}
              className={classNames({
                "m-0": true,
              })}
            />
          )}

          {imageType === "circular" && (
            <ShimmerCircularImage size={imageHeight} center />
          )}
          {caption && (
            <ShimmerTitle
              variant="secondary"
              className={classNames({
                "mt-15": imageType === "thumbnail",
                "w-50 ml-auto mr-auto circular-image-caption":
                  imageType === "circular",
              })}
            />
          )}
        </div>
      );
    }

    return photos;
  };

  if (!card)
    return (
      <div
        className={classNames({
          grid: true,
          [`grid-gap-${gap}`]: true,
          [`grid-column-${col}`]: true,
          [className]: className,
        })}
      >
        {renderPhotos()}
      </div>
    );

  return (
    <ShimmerCard paddingSize={20}>
      <div
        className={classNames({
          grid: true,
          [`grid-gap-${gap}`]: true,
          [`grid-column-${col}`]: true,
          [className]: className,
        })}
      >
        {renderPhotos()}
      </div>
    </ShimmerCard>
  );
};

ShimmerSimpleGallery.propTypes = {
  row: PropTypes.number,
  col: PropTypes.oneOf([2, 3, 4]),
  gap: PropTypes.oneOf([20, 30]),
  fitOnFrame: PropTypes.bool,
  imageType: PropTypes.oneOf(["thumbnail", "circular"]),
  imageHeight: PropTypes.number,
  caption: PropTypes.bool,
  card: PropTypes.bool,
};

ShimmerSimpleGallery.defaultProps = {
  row: 3,
  col: 3,
  gap: 20,
  fitOnFrame: false,
  imageType: "thumbnail",
  caption: false,
  card: false,
};

export default ShimmerSimpleGallery;
