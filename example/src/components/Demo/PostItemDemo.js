import React from "react";
import { Separator, PostItem } from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const PostItemDemo = () => (
  <div>
    <h1 className="d-flex justify-content-between">
      Post Item <CodePreview title="Post Item" code={code.POST_ITEMS} />
    </h1>
    <div className="shimmer-row">
      <div className="shimmer-col">
        <PostItem card title text cta />
      </div>
      <div className="shimmer-col">
        <PostItem card title cta />
      </div>
      <div className="shimmer-col">
        <PostItem
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
    <Separator />
  </div>
);

export default PostItemDemo;
