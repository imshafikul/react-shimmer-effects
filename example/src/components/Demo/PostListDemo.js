import React from "react";
import { Separator, PostList } from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const PostListDemo = () => (
  <div>
    <h1 className="d-flex justify-content-between">
      Post List <CodePreview title=" Post List" code={code.POST_LIST} />
    </h1>
    <PostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
    <Separator />
  </div>
);

export default PostListDemo;
