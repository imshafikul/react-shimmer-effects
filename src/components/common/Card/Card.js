import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./card.scss";

const Card = ({ children, cssClasses }) => {
  if (!children) return null;
  return (
    <div
      className={classNames({
        "shimmer-card": true,
        [cssClasses]: cssClasses,
      })}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  cssClasses: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

Card.defaultProps = {};

export default Card;
