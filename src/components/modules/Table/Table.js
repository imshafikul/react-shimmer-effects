import React from "react";
import PropTypes from "prop-types";
import { ShimmerTableRow } from "../../common/Table";

const ShimmerTable = ({ row, col }) => {
  const renderRows = () => {
    const rows = [];

    for (let index = 0; index < row; index++) {
      rows.push(<ShimmerTableRow col={col} key={index} />);
    }

    return rows;
  };

  return (
    <div>
      <ShimmerTableRow col={col} header />
      {renderRows()}
    </div>
  );
};

ShimmerTable.propTypes = {
  row: PropTypes.number,
  col: PropTypes.number,
};

ShimmerTable.defaultProps = {
  row: 5,
  col: 5,
};

export default ShimmerTable;
