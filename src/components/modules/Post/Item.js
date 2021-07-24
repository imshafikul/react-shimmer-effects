import React from "react";
import ShimmerCard from "../../common/Card";
import { ShimmerThumbnail, ShimmerCircularImage } from "../../common/Image";
import ShimmerTitle from "../../common/Title";
import ShimmerText from "../../common/Text";
import ShimmerButton from "../../common/Button";
import PropTypes from "prop-types";

const ShimmerPostItem = ({
  cta,
  title,
  text,
  imageType,
  imageWidth,
  imageHeight,
}) => {
  return (
    <ShimmerCard>
      {imageType === "thumbnail" && (
        <ShimmerThumbnail
          height={imageHeight}
          width={imageWidth}
          className={
            imageWidth && imageWidth !== "w-100" ? "m-30 mb-0" : "mb-0"
          }
        />
      )}
      {imageType === "circular" && (
        <ShimmerCircularImage size={imageWidth} className="m-30 mb-0" />
      )}
      <div className="p-30">
        {title && <ShimmerTitle variant="secondary" />}
        {text && <ShimmerText line={3} gap={10} />}
        {cta && <ShimmerButton size="sm" />}
      </div>
    </ShimmerCard>
  );
};

ShimmerPostItem.propTypes = {
  title: PropTypes.bool,
  text: PropTypes.bool,
  cta: PropTypes.bool,
  imageType: PropTypes.oneOf(["circular", "thumbnail"]),
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
};

ShimmerPostItem.defaultProps = {
  title: false,
  text: false,
  cta: false,
  imageType: "thumbnail",
};
export default ShimmerPostItem;
