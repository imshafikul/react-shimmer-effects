import React from "react";
import { Table, Separator } from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const TableDemo = () => (
  <div>
    <h3 className="d-flex justify-content-between">
      Table <CodePreview title="Thumbnail Image Gallery" code={code.TABLE} />
    </h3>
    <Table row={10} />
    <Separator />
  </div>
);

export default TableDemo;
