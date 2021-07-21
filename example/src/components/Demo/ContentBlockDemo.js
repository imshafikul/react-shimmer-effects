import React from "react";
import { ContentBlock } from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const ContentBlockDemo = () => (
  <div>
    <h3 className="d-flex justify-content-between">
      Content Blocks{" "}
      <CodePreview title="Content Blocks" code={code.CONTENT_BLOCK} />
    </h3>
    <ContentBlock title text cta thumbnailWidth={370} thumbnailHeight={370} />
    <ContentBlock title text cta thumbnailWidth={370} thumbnailHeight={370} />
  </div>
);

export default ContentBlockDemo;
