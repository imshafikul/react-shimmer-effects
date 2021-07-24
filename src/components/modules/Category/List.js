import React from "react";
import PropTypes from "prop-types";
import ShimmerCategoryItem from "./Item";
import ShimmerCard from "../../common/Card";
import ShimmerTitle from "../../common/Title";

const ShimmerCategoryList = ({ items, categoryStyle, title }) => {
  const categories = {
    STYLE_ONE: <ShimmerCategoryItem />,
    STYLE_TWO: (
      <ShimmerCategoryItem
        hasImage
        imageType="thumbnail"
        imageWidth={100}
        imageHeight={100}
        title
      />
    ),
    STYLE_THREE: (
      <ShimmerCategoryItem
        hasImage
        imageType="circular"
        imageWidth={100}
        imageHeight={100}
        title
      />
    ),
    STYLE_FOUR: (
      <ShimmerCategoryItem
        hasImage
        imageType="thumbnail"
        imageWidth={100}
        imageHeight={100}
        text
      />
    ),
    STYLE_FIVE: (
      <ShimmerCategoryItem
        hasImage
        imageType="circular"
        imageWidth={100}
        imageHeight={100}
        text
      />
    ),
    STYLE_SIX: (
      <ShimmerCategoryItem
        hasImage
        imageType="thumbnail"
        imageWidth={100}
        imageHeight={100}
        text
        cta
      />
    ),
    STYLE_SEVEN: (
      <ShimmerCategoryItem
        hasImage
        imageType="circular"
        imageWidth={100}
        imageHeight={100}
        text
        cta
      />
    ),
  };

  const renderItems = () => {
    const list = [];
    for (let index = 0; index < items; index++)
      list.push(<div key={index}>{categories[categoryStyle]}</div>);
    return list;
  };

  return (
    <ShimmerCard paddingSize={20}>
      {title && <ShimmerTitle line={1} className="w-60" />}
      {renderItems()}
    </ShimmerCard>
  );
};

ShimmerCategoryList.propTypes = {
  title: PropTypes.bool,
  items: PropTypes.number,
  categoryStyle: PropTypes.oneOf([
    "STYLE_ONE",
    "STYLE_TWO",
    "STYLE_THREE",
    "STYLE_FOUR",
    "STYLE_FIVE",
    "STYLE_SIX",
    "STYLE_SEVEN",
  ]),
};

ShimmerCategoryList.defaultProps = {
  title: false,
  items: 5,
  categoryStyle: "STYLE_ONE",
};

export default ShimmerCategoryList;
