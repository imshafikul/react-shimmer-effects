import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ShimmerPostItem from "./Item";

const ShimmerPostList = ({ row, col, gap, className, postStyle }) => {
  const posts = {
    STYLE_ONE: <ShimmerPostItem title text cta />,
    STYLE_TWO: <ShimmerPostItem title cta />,
    STYLE_THREE: <ShimmerPostItem title />,
    STYLE_FOUR: <ShimmerPostItem text cta />,
    STYLE_FIVE: <ShimmerPostItem text />,
    STYLE_SIX: (
      <ShimmerPostItem
        title
        text
        cta
        imageType="thumbnail"
        imageWidth={80}
        imageHeight={80}
        contentCenter
      />
    ),
    STYLE_SEVEN: (
      <ShimmerPostItem
        text
        cta
        imageType="thumbnail"
        imageWidth={80}
        imageHeight={80}
        contentCenter
      />
    ),
    STYLE_EIGHT: (
      <ShimmerPostItem
        title
        cta
        imageType="thumbnail"
        imageWidth={80}
        imageHeight={80}
        contentCenter
      />
    ),
  };

  const renderPosts = () => {
    const list = [];
    const items = row * col;
    for (let index = 0; index < items; index++) {
      list.push(<div key={index}>{posts[postStyle]}</div>);
    }
    return list;
  };

  return (
    <div
      className={classNames({
        grid: true,
        [`grid-gap-${gap}`]: true,
        [`grid-column-${col}`]: true,
        [className]: className,
      })}
    >
      {renderPosts()}
    </div>
  );
};

ShimmerPostList.propTypes = {
  row: PropTypes.number,
  col: PropTypes.oneOf([2, 3, 4]),
  gap: PropTypes.oneOf([20, 30]),
  postStyle: PropTypes.oneOf([
    "STYLE_ONE",
    "STYLE_TWO",
    "STYLE_THREE",
    "STYLE_FOUR",
    "STYLE_FIVE",
    "STYLE_SIX",
    "STYLE_SEVEN",
    "STYLE_EIGHT",
  ]),
};

ShimmerPostList.defaultProps = {
  row: 3,
  col: 3,
  gap: 20,
  postStyle: "STYLE_ONE",
};

export default ShimmerPostList;
