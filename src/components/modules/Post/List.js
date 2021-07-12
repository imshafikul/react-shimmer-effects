import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import PostItem from "./Item";

const PostList = ({ row, col, gap, cssClasses, postStyle }) => {
  const posts = {
    STYLE_ONE: <PostItem title text cta />,
    STYLE_TWO: <PostItem title cta />,
    STYLE_THREE: <PostItem title />,
    STYLE_FOUR: <PostItem text cta />,
    STYLE_FIVE: <PostItem text />,
    STYLE_SIX: (
      <PostItem
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
      <PostItem
        text
        cta
        imageType="thumbnail"
        imageWidth={80}
        imageHeight={80}
        contentCenter
      />
    ),
    STYLE_EIGHT: (
      <PostItem
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
        [cssClasses]: cssClasses,
      })}
    >
      {renderPosts()}
    </div>
  );
};

PostList.propTypes = {
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

PostList.defaultProps = {
  row: 3,
  col: 3,
  gap: 20,
  postStyle: "STYLE_ONE",
};

export default PostList;
