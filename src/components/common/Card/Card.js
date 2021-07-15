import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./card.scss";

const Card = ({ children, cssClasses, paddingSize }) => {
  if (!children) return null;
  return (
    <div
      className={classNames({
        "shimmer-card": true,
        [`p-${paddingSize}`]: paddingSize,
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
  paddingSize: PropTypes.oneOf([false, 20, 30]),
};

Card.defaultProps = { paddingSize: false };

export default Card;
