import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./title.scss";

const Title = ({ line, gap, variant, cssClasses }) => {
  const renderLines = () => {
    const title_lines = [];

    for (let index = 0; index < line; index++) {
      title_lines.push(
        <div className="shimmer shimmer-title-line" key={index} />
      );
    }

    return title_lines;
  };

  return (
    <div
      className={classNames({
        grid: true,
        "shimmer-title": variant === "primary",
        "shimmer-title--secondary": variant === "secondary",
        [`grid-gap-${gap}`]: gap,
        [cssClasses]: cssClasses,
      })}
    >
      {renderLines()}
    </div>
  );
};

Title.propTypes = {
  line: PropTypes.number,
  gap: PropTypes.oneOf([10, 15, 20, 30]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  cssClasses: PropTypes.string,
};

Title.defaultProps = {
  line: 2,
  gap: 10,
  variant: "primary",
};

export default Title;
