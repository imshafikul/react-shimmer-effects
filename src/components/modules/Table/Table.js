import React from "react";
import PropTypes from "prop-types";
import { TableRow } from "../../common/Table";

const Table = ({ row, col }) => {
  const renderRows = () => {
    const rows = [];

    for (let index = 0; index < row; index++) {
      rows.push(<TableRow col={col} key={index} />);
    }

    return rows;
  };

  return (
    <div>
      <TableRow col={col} header />
      {renderRows()}
    </div>
  );
};

Table.propTypes = {
  row: PropTypes.number,
  col: PropTypes.number,
};

Table.defaultProps = {
  row: 5,
  col: 5,
};

export default Table;
