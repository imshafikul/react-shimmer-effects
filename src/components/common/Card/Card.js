import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Card = ({ children, cssClasses }) => {
  return (
    <div
      className={classNames({
        "shimmer-card": true,
        [cssClasses]: true,
      })}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  cssClasses: PropTypes.string,
};

Card.defaultProps = {};

export default Card;
