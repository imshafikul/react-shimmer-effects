import React from "react";
import PropTypes from "prop-types";
import CategoryItem from "./Item";
import Card from "../../common/Card";
import Title from "../../common/Title";

const CategoryList = ({ items, categoryStyle, title }) => {
  const categories = {
    STYLE_ONE: <CategoryItem />,
    STYLE_TWO: (
      <CategoryItem
        hasImage
        imageType="thumbnail"
        imageWidth={100}
        imageHeight={100}
        title
      />
    ),
    STYLE_THREE: (
      <CategoryItem
        hasImage
        imageType="circular"
        imageWidth={100}
        imageHeight={100}
        title
      />
    ),
    STYLE_FOUR: (
      <CategoryItem
        hasImage
        imageType="thumbnail"
        imageWidth={100}
        imageHeight={100}
        text
      />
    ),
    STYLE_FIVE: (
      <CategoryItem
        hasImage
        imageType="circular"
        imageWidth={100}
        imageHeight={100}
        text
      />
    ),
    STYLE_SIX: (
      <CategoryItem
        hasImage
        imageType="thumbnail"
        imageWidth={100}
        imageHeight={100}
        text
        cta
      />
    ),
    STYLE_SEVEN: (
      <CategoryItem
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
    <Card paddingSize={20}>
      {title && <Title line={1} className="w-60" />}
      {renderItems()}
    </Card>
  );
};

CategoryList.propTypes = {
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

CategoryList.defaultProps = {
  title: false,
  items: 5,
  categoryStyle: "STYLE_ONE",
};

export default CategoryList;
