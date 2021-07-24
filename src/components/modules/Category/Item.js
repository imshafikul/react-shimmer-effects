import React from "react";
import { ShimmerCircularImage, ShimmerThumbnail } from "../../common/Image";
import ShimmerText from "../../common/Text";
import Title from "../../common/Title";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../../common/Button";

const ShimmerCategoryItem = ({
  hasImage,
  imageType,
  imageWidth,
  imageHeight,
  title,
  text,
  cta,
  contentCenter,
}) => {
  return (
    <div>
      {!hasImage ? (
        <div>
          <Title variant="secondary" line={1} className="mb-15 w-80" />
          <div className="w-40">
            <ShimmerText line={3} gap={10} />
          </div>
        </div>
      ) : (
        <div
          className={classNames({
            flex: true,
            "flex-vertical-center": contentCenter,
          })}
        >
          {imageType === "thumbnail" && (
            <ShimmerThumbnail width={imageWidth} height={imageHeight} />
          )}

          {imageType === "circular" && (
            <ShimmerCircularImage size={imageWidth} />
          )}

          <div className="flex-1 p-15">
            {title && <Title variant="secondary" />}
            {text && <ShimmerText line={3} gap={10} className="mb-20" />}
            {cta && <Button size="sm" />}
          </div>
        </div>
      )}
    </div>
  );
};

ShimmerCategoryItem.propTypes = {
  hasImage: PropTypes.bool.isRequired,
  imageType: PropTypes.oneOf(["circular", "thumbnail"]),
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  title: PropTypes.bool,
  text: PropTypes.bool,
  cta: PropTypes.bool,
  contentCenter: PropTypes.bool,
};

ShimmerCategoryItem.defaultProps = {
  hasImage: false,
  imageType: "thumbnail",
  title: false,
  text: false,
  contentCenter: false,
};

export default ShimmerCategoryItem;
