import React from "react";
import { SocialPost, Separator } from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const SocialPostDemo = () => (
  <div>
    <h3 className="d-flex justify-content-between">
      Social Post <CodePreview title="Social Post" code={code.SOCIAL_POST} />
    </h3>
    <div className="shimmer-row">
      <div className="shimmer-col">
        <SocialPost type="image" />
        <SocialPost type="both" />
      </div>
      <div className="shimmer-col">
        <SocialPost type="text" />
        <SocialPost type="text" title />
      </div>
    </div>
    <Separator />
  </div>
);

export default SocialPostDemo;
