import React from "react";
import PropTypes from "prop-types";
import Thumbnail from "../../common/Image/Thumbnail";
import SimpleGallery from "./SimpleGallery";
import "./gallery.scss";

const FeaturedGallery = (props) => {
  return (
    <div className="shimmer-row shimmer-gallery-puzzle">
      <div className="shimmer-col flex-1">
        <Thumbnail cssClasses="h-100" />
      </div>
      <div className="shimmer-col flex-1">
        <SimpleGallery {...props} cssClasses="h-100" fitOnFrame />
      </div>
    </div>
  );
};

FeaturedGallery.propTypes = {
  row: PropTypes.number,
  col: PropTypes.oneOf([2, 3, 4]),
  gap: PropTypes.oneOf([20, 30]),
};

FeaturedGallery.defaultProps = {};

export default FeaturedGallery;
