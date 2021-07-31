import React from "react";
import { ShimmerSeparator, ShimmerPostList } from "react-shimmer-effects";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const PostListDemo = () => (
  <div>
    <h3 className="d-flex justify-content-between">
      Post List <CodePreview title=" Post List" code={code.POST_LIST} />
    </h3>
    <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
    <ShimmerSeparator />
  </div>
);

export default PostListDemo;
