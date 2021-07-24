import React from "react";
import ShimmerCard from "../../common/Card";
import { ShimmerThumbnail } from "../../common/Image";
import ShimmerTitle from "../../common/Title";
import ShimmerText from "../../common/Text";
import ShimmerButton from "../../common/Button";
import PropTypes from "prop-types";

const ShimmerPostDetails = ({ variant, cta, card }) => {
  const variants = {
    SIMPLE: (
      <div>
        <ShimmerTitle line={1} className="w-40" />
        <ShimmerTitle line={1} variant="secondary" className="w-20 mb-40" />

        <div className="w-40 mb-40">
          <ShimmerText line={1} className="mb-15 w-20" />
          <ShimmerText line={1} className="mb-15 w-40" />
          <ShimmerText line={1} className="mb-30 w-60" />
        </div>

        <ShimmerTitle line={1} variant="secondary" className="w-30" />
        <ShimmerText className="mb-40" />
        <ShimmerTitle line={1} variant="secondary" className="w-30" />
        <ShimmerText className="mb-40" />
        <ShimmerTitle line={1} variant="secondary" className="w-30" />
        <ShimmerText className="mb-40" />
        <ShimmerTitle line={1} variant="secondary" className="w-30" />
        <ShimmerText className="mb-40" />

        {cta && <ShimmerButton />}
      </div>
    ),
    EDITOR: (
      <div>
        <ShimmerTitle line={1} className="w-40" />
        <ShimmerThumbnail height={400} />
        <ShimmerText />
        <ShimmerText />

        <div className="shimmer-row">
          <div className="shimmer-col">
            <ShimmerText line={13} />
          </div>
          <div className="shimmer-col">
            <ShimmerThumbnail height={300} />
          </div>
        </div>

        <ShimmerText />
        <ShimmerText />
        <ShimmerText />
      </div>
    ),
  };

  if (!card) return variants[variant];

  return <ShimmerCard paddingSize={30}>{variants[variant]}</ShimmerCard>;
};

ShimmerPostDetails.propTypes = {
  variant: PropTypes.oneOf(["SIMPLE", "EDITOR"]),
  cta: PropTypes.bool,
  card: PropTypes.bool,
};

ShimmerPostDetails.defaultProps = {
  variant: "SIMPLE",
  cta: false,
  card: false,
};
export default ShimmerPostDetails;
