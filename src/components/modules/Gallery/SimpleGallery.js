import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Thumbnail, CircularImage } from "../../common/Image";
import Title from "../../common/Title";
import Card from "../../common/Card";

const SimpleGallery = ({
  row,
  col,
  gap,
  cssClasses,
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
            <Thumbnail
              key={index}
              fitOnFrame={fitOnFrame}
              height={imageHeight}
              cssClasses={classNames({
                "m-0": true,
              })}
            />
          )}

          {imageType === "circular" && (
            <CircularImage size={imageHeight} center />
          )}
          {caption && (
            <Title
              variant="secondary"
              cssClasses={classNames({
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
          [cssClasses]: cssClasses,
        })}
      >
        {renderPhotos()}
      </div>
    );

  return (
    <Card paddingSize={20}>
      <div
        className={classNames({
          grid: true,
          [`grid-gap-${gap}`]: true,
          [`grid-column-${col}`]: true,
          [cssClasses]: cssClasses,
        })}
      >
        {renderPhotos()}
      </div>
    </Card>
  );
};

SimpleGallery.propTypes = {
  row: PropTypes.number,
  col: PropTypes.oneOf([2, 3, 4]),
  gap: PropTypes.oneOf([20, 30]),
  fitOnFrame: PropTypes.bool,
  imageType: PropTypes.oneOf(["thumbnail", "circular"]),
  imageHeight: PropTypes.number,
  caption: PropTypes.bool,
  card: PropTypes.bool,
};

SimpleGallery.defaultProps = {
  row: 3,
  col: 3,
  gap: 20,
  fitOnFrame: false,
  imageType: "thumbnail",
  caption: false,
  card: false,
};

export default SimpleGallery;
