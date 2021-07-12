import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import TableCol from "./TableCol";

const TableRow = ({ col, header }) => {
  const renderColumns = () => {
    const columns = [];

    for (let index = 0; index < col; index++) {
      columns.push(<TableCol key={index} />);
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

TableRow.propTypes = {
  col: PropTypes.number.isRequired,
  header: PropTypes.bool,
};

TableRow.defaultProps = {
  col: 5,
  header: false,
};

export default TableRow;
