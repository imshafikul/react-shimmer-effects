import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ShimmerTableCol from "./TableCol";

const ShimmerTableRow = ({ col, header }) => {
  const renderColumns = () => {
    const columns = [];

    for (let index = 0; index < col; index++) {
      columns.push(<ShimmerTableCol key={index} />);
    }

    return columns;
  };

  return (
    <div
      className={classNames({
        "shimmer-table-row": true,
        "shimmer-table-row--header": header,
      })}
    >
      {renderColumns()}
    </div>
  );
};

ShimmerTableRow.propTypes = {
  col: PropTypes.number.isRequired,
  header: PropTypes.bool,
};

ShimmerTableRow.defaultProps = {
  col: 5,
  header: false,
};

export default ShimmerTableRow;
