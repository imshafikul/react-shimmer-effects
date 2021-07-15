import React from "react";
import Card from "../../common/Card";
import { CircularImage, Thumbnail } from "../../common/Image";
import Title from "../../common/Title";
import Text from "../../common/Text";
import PropTypes from "prop-types";

const SocialPost = ({ type, title }) => {
  const renderContents = () => {
    if (type === "image") {
      return <Thumbnail height={300} className="m-02" />;
    } else if (type === "text") {
      return <Text line={13} className="p-15" />;
    } else {
      return (
        <div>
          <Text line={3} className="p-15" />
          <Thumbnail height={300} className="m-02" />
        </div>
      );
    }
  };

  return (
    <Card>
      <div className="p-15">
        <div className="flex">
          <CircularImage />
          <div className="flex-1 p-15">
            <Title variant="secondary" className="w-40" />
          </div>
        </div>
        {title && <Title variant line={1} className="w-40 m-0" />}
      </div>

      {renderContents()}

      <div className="p-15 flex flex-content-between">
        <Title line={1} className="w-10" variant="secondary" />
        <Title line={1} className="w-10" variant="secondary" />
      </div>
    </Card>
  );
};

SocialPost.propTypes = {
  type: PropTypes.oneOf(["text", "image", "both"]),
  title: PropTypes.bool,
};

SocialPost.defaultProps = {
  type: "image",
  title: false,
};
export default SocialPost;
