import React from "react";
import { ShimmerTable, ShimmerSeparator } from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const TableDemo = () => (
  <div>
    <h3 className="d-flex justify-content-between">
      Table <CodePreview title="Shimmer Table " code={code.TABLE} />
    </h3>
    <ShimmerTable row={10} />
    <ShimmerSeparator />
  </div>
);

export default TableDemo;
