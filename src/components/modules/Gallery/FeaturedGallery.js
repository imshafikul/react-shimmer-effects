import React from "react";
import PropTypes from "prop-types";
import { ShimmerThumbnail } from "../../common/Image";
import ShimmerSimpleGallery from "./SimpleGallery";
import ShimmerCard from "../../common/Card";
import "./gallery.scss";

const ShimmerFeaturedGallery = ({ row, col, gap, card, frameHeight }) => {
  const style = {};
  if (frameHeight) style.height = `${frameHeight}px`;

  const renderContent = () => (
    <div className="shimmer-row shimmer-gallery-puzzle" style={style}>
      <div className="shimmer-col flex-1">
        <ShimmerThumbnail className="h-100" fitOnFrame />
      </div>
      <div className="shimmer-col flex-1">
        <ShimmerSimpleGallery
          row={row}
          col={col}
          gap={gap}
          className="h-100"
          fitOnFrame
        />
      </div>
    </div>
  );

  if (!card) return renderContent();

  return <ShimmerCard paddingSize={20}>{renderContent()}</ShimmerCard>;
};

ShimmerFeaturedGallery.propTypes = {
  row: PropTypes.number,
  col: PropTypes.oneOf([2, 3, 4]),
  gap: PropTypes.oneOf([20, 30]),
  card: PropTypes.bool,
  frameHeight: PropTypes.number,
};

ShimmerFeaturedGallery.defaultProps = {
  card: false,
  row: 2,
  col: 2,
  gap: 20,
  frameHeight: 600,
};

export default ShimmerFeaturedGallery;
