import React from "react";
import PropTypes from "prop-types";
import { TableRow } from "../../common/Table";

const Table = ({ row }) => {
  const renderRows = () => {
    const rows = [];

    for (let index = 0; index < row; index++) {
      rows.push(<TableRow />);
    }

    return rows;
  };

  return (
    <div>
      <TableRow header />
      {renderRows()}
    </div>
  );
};

Table.propTypes = {
  row: PropTypes.number.isRequired,
};

Table.defaultProps = {
  row: 5,
};

export default Table;
