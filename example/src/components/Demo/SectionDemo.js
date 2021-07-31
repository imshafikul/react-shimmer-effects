import React from "react";
import { ShimmerSectionHeader } from "react-shimmer-effects";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const SectionDemo = () => (
  <div>
    <h3 className="d-flex justify-content-between">
      Sectio Header{" "}
      <CodePreview title="Sectio Header" code={code.SECTION_HEADER} />
    </h3>
    <ShimmerSectionHeader />
    <ShimmerSectionHeader center />
  </div>
);

export default SectionDemo;
