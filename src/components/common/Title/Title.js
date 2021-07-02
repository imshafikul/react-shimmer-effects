import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./title.scss";

const Title = ({ line, gap, variant }) => {
  const renderLines = () => {
    const title_lines = [];

    for (let index = 0; index < line; index++) {
      title_lines.push(<div class="shimmer shimmer-title-line" />);
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
      })}
    >
      {renderLines()}
    </div>
  );
};

Title.propTypes = {
  line: PropTypes.number,
  gap: PropTypes.oneOf([15, 20, 30]),
  gap: PropTypes.oneOf(["primary", "secondary"]),
};

Title.defaultProps = {
  line: 2,
  gap: 10,
  variant: "primary",
};

export default Title;
