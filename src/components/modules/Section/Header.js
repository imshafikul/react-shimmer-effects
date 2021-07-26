import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ShimmerTitle from "../../common/Title";
import ShimmerText from "../../common/Text";

const ShimmerSectionHeader = ({ title, subTitle, center }) => {
  if (!title && !subTitle) return null;
  return (
    <div
      className={classNames({
        "w-60 mb-40": true,
        "ml-auto mr-auto": center,
      })}
    >
      {title && (
        <ShimmerTitle
          className={classNames({
            "w-40": true,
            "ml-auto mr-auto": center,
          })}
          line={1}
        />
      )}
      {subTitle && (
        <div
          className={classNames({
            "flex-horizontal-center": center,
          })}
        >
          <ShimmerText line={1} className="mb-15 w-80" />
          <ShimmerText line={1} className="mb-15 w-70" />
          <ShimmerText line={1} className="mb-15 w-60" />
        </div>
      )}
    </div>
  );
};

ShimmerSectionHeader.propTypes = {
  title: PropTypes.bool,
  subTitle: PropTypes.bool,
  center: PropTypes.bool,
};

ShimmerSectionHeader.defaultProps = {
  title: true,
  subTitle: true,
  center: false,
};

export default ShimmerSectionHeader;
