import React from "react";
import { ShimmerSocialPost, ShimmerSeparator } from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const SocialPostDemo = () => (
  <div>
    <h3 className="d-flex justify-content-between">
      Social Post <CodePreview title="Social Post" code={code.SOCIAL_POST} />
    </h3>
    <div className="shimmer-row">
      <div className="shimmer-col">
        <ShimmerSocialPost type="image" />
        <ShimmerSocialPost type="both" />
      </div>
      <div className="shimmer-col">
        <ShimmerSocialPost type="text" />
        <ShimmerSocialPost type="text" title />
      </div>
    </div>
    <ShimmerSeparator />
  </div>
);

export default SocialPostDemo;
