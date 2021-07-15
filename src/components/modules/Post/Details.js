import React from "react";
import Card from "../../common/Card";
import { Thumbnail } from "../../common/Image";
import Title from "../../common/Title";
import Text from "../../common/Text";
import Button from "../../common/Button";
import PropTypes from "prop-types";

const PostDetails = ({ variant, cta, card }) => {
  const variants = {
    SIMPLE: (
      <div>
        <Title line={1} className="w-40" />
        <Title line={1} variant="secondary" className="w-20 mb-40" />

        <div className="w-40 mb-40">
          <Text line={1} className="mb-15 w-20" />
          <Text line={1} className="mb-15 w-40" />
          <Text line={1} className="mb-30 w-60" />
        </div>

        <Title line={1} variant="secondary" className="w-30" />
        <Text className="mb-40" />
        <Title line={1} variant="secondary" className="w-30" />
        <Text className="mb-40" />
        <Title line={1} variant="secondary" className="w-30" />
        <Text className="mb-40" />
        <Title line={1} variant="secondary" className="w-30" />
        <Text className="mb-40" />

        {cta && <Button />}
      </div>
    ),
    EDITOR: (
      <div>
        <Title line={1} className="w-40" />
        <Thumbnail height={400} />
        <Text />
        <Text />

        <div className="shimmer-row">
          <div className="shimmer-col">
            <Text line={13} />
          </div>
          <div className="shimmer-col">
            <Thumbnail height={300} />
          </div>
        </div>

        <Text />
        <Text />
        <Text />
      </div>
    ),
  };

  if (!card) return variants[variant];

  return <Card paddingSize={30}>{variants[variant]}</Card>;
};

PostDetails.propTypes = {
  variant: PropTypes.oneOf(["SIMPLE", "EDITOR"]),
  cta: PropTypes.bool,
  card: PropTypes.bool,
};

PostDetails.defaultProps = {
  variant: "SIMPLE",
  cta: false,
  card: false,
};
export default PostDetails;
