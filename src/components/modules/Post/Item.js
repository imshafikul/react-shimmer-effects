import React from "react";
import Card from "../../common/Card";
import { Thumbnail, CircularImage } from "../../common/Image";
import Title from "../../common/Title";
import Text from "../../common/Text";
import Button from "../../common/Button";
import PropTypes from "prop-types";

const PostItem = ({ cta, title, text, imageType, imageWidth, imageHeight }) => {
  return (
    <Card>
      {imageType === "thumbnail" && (
        <Thumbnail
          height={imageHeight}
          width={imageWidth}
          className={
            imageWidth && imageWidth !== "w-100" ? "m-30 mb-0" : "mb-0"
          }
        />
      )}
      {imageType === "circular" && (
        <CircularImage size={imageWidth} className="m-30 mb-0" />
      )}
      <div className="p-30">
        {title && <Title variant="secondary" />}
        {text && <Text line={3} gap={10} />}
        {cta && <Button size="sm" />}
      </div>
    </Card>
  );
};

PostItem.propTypes = {
  title: PropTypes.bool,
  text: PropTypes.bool,
  cta: PropTypes.bool,
  imageType: PropTypes.oneOf(["circular", "thumbnail"]),
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
};

PostItem.defaultProps = {
  title: false,
  text: false,
  cta: false,
  imageType: "thumbnail",
};
export default PostItem;
