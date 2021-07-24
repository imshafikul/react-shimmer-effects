import React from "react";
import {
  ShimmerButton,
  ShimmerCircularImage,
  ShimmerThumbnail,
  ShimmerBadge,
  ShimmerText,
  ShimmerTitle,
  ShimmerSeparator,
} from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const ElementsDemo = () => (
  <div>
    <h3 className="d-flex justify-content-between">
      Elements <CodePreview title="Elements" code={code.ELEMENTS} />
    </h3>
    <ShimmerButton size="sm" />
    <ShimmerButton size="md" />
    <ShimmerButton size="lg" />
    <ShimmerBadge width={200} />
    <ShimmerTitle />
    <ShimmerTitle line={3} variant="secondary" />
    <ShimmerText />
    <ShimmerCircularImage size={300} />
    <ShimmerThumbnail height={300} width={500} className="m-0" rounded />
    <ShimmerSeparator />
  </div>
);

export default ElementsDemo;
