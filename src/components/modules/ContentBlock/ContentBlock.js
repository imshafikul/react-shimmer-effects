import React from "react";
import ShimmerCard from "../../common/Card";
import { ShimmerThumbnail } from "../../common/Image";
import ShimmerTitle from "../../common/Title";
import ShimmerText from "../../common/Text";
import ShimmerButton from "../../common/Button";
import PropTypes from "prop-types";
import classNames from "classnames";

const ShimmerContentBlock = ({
  card,
  title,
  text,
  cta,
  thumbnailWidth,
  thumbnailHeight,
  reverse,
}) => {
  const renderContent = () => {
    return (
      <div
        className={classNames({
          flex: true,
          "flex-reverse": reverse,
        })}
      >
        <div
          className={classNames({
            flex: true,
            "w-50": !thumbnailWidth,
          })}
        >
          <ShimmerThumbnail
            width={thumbnailWidth}
            height={thumbnailHeight}
            className="h-100 m-0"
          />
        </div>
        <div className=" flex-1 p-30">
          {title && <ShimmerTitle className="w-40" line={1} />}
          {text && <ShimmerText />}
          {cta && <ShimmerButton />}
        </div>
      </div>
    );
  };

  if (!card) return renderContent();

  return <ShimmerCard>{renderContent()}</ShimmerCard>;
};

ShimmerContentBlock.propTypes = {
  card: PropTypes.bool,
  title: PropTypes.bool,
  text: PropTypes.bool,
  cta: PropTypes.bool,
  thumbnailWidth: PropTypes.number,
  thumbnailHeight: PropTypes.number,
  reverse: PropTypes.bool,
};

ShimmerContentBlock.defaultProps = {
  card: true,
  title: false,
  text: false,
  cta: false,
  reverse: false,
};
export default ShimmerContentBlock;
