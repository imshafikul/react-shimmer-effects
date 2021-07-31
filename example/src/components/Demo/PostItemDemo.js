import React from "react";
import { ShimmerSeparator, ShimmerPostItem } from "react-shimmer-effects";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const PostItemDemo = () => (
  <div>
    <h3 className="d-flex justify-content-between">
      Post Item <CodePreview title="Post Item" code={code.POST_ITEMS} />
    </h3>
    <div className="shimmer-row">
      <div className="shimmer-col">
        <ShimmerPostItem card title text cta />
      </div>
      <div className="shimmer-col">
        <ShimmerPostItem card title cta />
      </div>
      <div className="shimmer-col">
        <ShimmerPostItem
          card
          title
          cta
          imageType="thumbnail"
          imageWidth={80}
          imageHeight={80}
          contentCenter
        />
      </div>
    </div>
    <ShimmerSeparator />
  </div>
);

export default PostItemDemo;
