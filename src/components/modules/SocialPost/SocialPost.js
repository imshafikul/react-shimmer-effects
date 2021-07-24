import React from "react";
import ShimmerCard from "../../common/Card";
import { ShimmerCircularImage, ShimmerThumbnail } from "../../common/Image";
import ShimmerTitle from "../../common/Title";
import ShimmerText from "../../common/Text";
import PropTypes from "prop-types";

const ShimmerSocialPost = ({ type, title }) => {
  const renderContents = () => {
    if (type === "image") {
      return <ShimmerThumbnail height={300} className="m-02" />;
    } else if (type === "text") {
      return <ShimmerText line={13} className="p-15" />;
    } else {
      return (
        <div>
          <ShimmerText line={3} className="p-15" />
          <ShimmerThumbnail height={300} className="m-02" />
        </div>
      );
    }
  };

  return (
    <ShimmerCard>
      <div className="p-15">
        <div className="flex">
          <ShimmerCircularImage />
          <div className="flex-1 p-15">
            <ShimmerTitle variant="secondary" className="w-40" />
          </div>
        </div>
        {title && <ShimmerTitle line={1} className="w-40 m-0" />}
      </div>

      {renderContents()}

      <div className="p-15 flex flex-content-between">
        <ShimmerTitle line={1} className="w-10" variant="secondary" />
        <ShimmerTitle line={1} className="w-10" variant="secondary" />
      </div>
    </ShimmerCard>
  );
};

ShimmerSocialPost.propTypes = {
  type: PropTypes.oneOf(["text", "image", "both"]),
  title: PropTypes.bool,
};

ShimmerSocialPost.defaultProps = {
  type: "image",
  title: false,
};
export default ShimmerSocialPost;
