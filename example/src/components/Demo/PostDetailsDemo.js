import React from "react";
import { ShimmerSeparator, ShimmerPostDetails } from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const PostDetailsDemo = () => (
  <div>
    <h3 className="d-flex justify-content-between">
      Post Details <CodePreview title="Post Details" code={code.POST_DETAILS} />
    </h3>
    <ShimmerPostDetails card cta variant="SIMPLE" />
    <ShimmerPostDetails card cta variant="EDITOR" />
    <ShimmerSeparator />
  </div>
);

export default PostDetailsDemo;
